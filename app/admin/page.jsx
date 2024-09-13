"use client"
import { use, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';


//import './App.css'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import Counters from './components/common/Counters'
import { MdEventNote } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { GiConfirmed } from "react-icons/gi";
import formatDate from '../../utils/formatDate';
import Actions from './components/common/Actions';
import AppointmentDetails from './components/AppointmentDetails';
import FilteredDataTable from './components/FilteredDataTable';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import UserTable from '@/components/UserTable';
import AddUserForm from './components/AddUserForm';
import TopAdminBar from './components/TopAdminBar';
import DashboardLoader from './DashboardLoader';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';


import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

function Page() {
  const [count, setCount] = useState(0)
  const [authToken, setAuthToken] = useState("");
  const [data, setData] = useState([]);
  const [paidClients, setpaidClients] = useState([]);
  const [username, setUsername] = useState('');
  const [showAddUser, setShowAddUser] = useState(false)
  const router = useRouter();

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,

    },
    {
      name: 'Service',
      selector: row => row.service,
      sortable: true,

    },

  
    {
      name: 'Created At',
      selector: row => formatDate(row.createdAt),
      sortable: true,

    },
    {
      name: 'Status',
      selector: row => <span className={`${row.status == 'confirmed'  ? 'text-green-500' :'text-red-500'}`}>{row.status}</span>,
      sortable: true,

    },
    {
      name: 'Action',
      selector: row => <Actions onView={()=>handleViewAppointment(row)}/>,

    },
  ];

  const [showAppointmentPage, setShowAppointmentPage] = useState(false);
  const [details, setDetails] = useState({})
  const handleViewAppointment = (row) =>{

    setShowAppointmentPage(true)
    setDetails(row)
  }
  const handleClick = () =>{
    setShowAppointmentPage(false);
  }
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  
  function getMonthNameFromDate(dateString) {
    const date = new Date(dateString);
    const monthName = date.toLocaleString('en-US', { month: 'long' });
    return monthName;
  }
  
  const dateString = "2024-08-21T05:42:03.702Z";
  console.log(getMonthNameFromDate(dateString)); 
useEffect(()=>{
  const fetchUserDetails = async () => {
    const response = await fetch('/api/authcookie');
    if (response.ok) {
      const res = await response.json();
      setAuthToken(res.token);
      try {
          
        const data = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/requests", {
          headers:{
            'Authorization':res.token
          }
        })
        
        
        const response = await data.json();

       
        let newData = response.data.map((item)=>{

            let createdData = getMonthNameFromDate(item.createdAt)

            return {
             ...item,
              createdAt: createdData
            }
        });

        console.log("newData", newData)
;       
        
        if(!response.success){
          router.push('/login')
        }
        setData(response.data);
  

        
      } catch (error) {
        console.log("errrors", error.message)
      }
     
      //console.log("tokennnn", authToken)
    } else {
      console.log('Error fetching user details');
    }
  };

  fetchUserDetails();
 
 
  const cookies = parseCookies();

   setUsername( cookies.user)
 

}, [router])
if(!username){
  return (
    <DashboardLoader/>
  )
 }

 const TabsCard = () => {
  let tabs = [
    {
      id: "appointments",
      label: "Appointments",
      content: <div className=' h-full'>
                <FilteredDataTable data={data}/>
              </div>
    },
    {
      id: "users",
      label: "Users",
      content:<UserTable/>  
    }
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabs} color="secondary" className='rounded'  >
        {(item) => (
          <Tab className='text-bold' key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}
const monthsData = [
  { month: 'January', sales: 4000 },
  { month: 'February', sales: 3000 },
  { month: 'March', sales: 2000 },
  { month: 'April', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'June', sales: 2390 },
  { month: 'July', sales: 3490 },
  { month: 'August', sales: 2000 },
  { month: 'September', sales: 2780 },
  { month: 'October', sales: 1890 },
  { month: 'November', sales: 4000 },
  { month: 'December', sales: 3000 },
];

const SalesBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={monthsData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

  return (
 
    
  <div class="flex flex-col h-screen">
<TopAdminBar/>

    <div class="flex flex-1">
     <SideBar/>

      <main class="flex-1  bg-gray-100">
      <div className='flex justify-between mt-4 mx-4 space-x-4'>
        <Counters statistics={data && data.length} text="Total Appointments" icon={<MdEventNote className='font-bold text-3xl text-purple-600'/>}/>
        <Counters statistics={data && data.filter(data=>data.status=="new request").length} text="New  Appointments" icon={<GiConfirmed className='font-bold text-3xl text-purple-600'/>}/>
        <Counters statistics={data && data.filter(data=>data.status=="confirmed").length} text="Confirmed Appointments" icon={<TiCancel  className='font-bold text-3xl text-purple-600'/>}/>
        <Counters statistics={data && data.filter(data=>data.status=="cancelled").length}  text="Cancelled Appointments" icon={<MdOutlinePeopleAlt className='font-bold text-3xl text-purple-600'/>}/>

        </div>
        <div>
        <div className='bg-white  drop-shadow-xl my-12  mx-4 space-x-4 ' >
          <div className='md:flex flex-col justify-between '>
          
          <div>
           <SalesBarChart/>
                 
          <TabsCard/>
          </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  </div>
  )
}

export default Page;
