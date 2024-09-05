"use client"
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Tabs, Tab } from "@nextui-org/react";

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


function Page() {
  const [count, setCount] = useState(0)
  const [authToken, setAuthToken] = useState("");
  const [data, setData] = useState([]);
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
        
        if(!response.success){
          router.push('/login')
        }
        setData(response.data);
      } catch (error) {
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
  return (
    <>
      <body>
  <div class="flex flex-col h-screen">
    <div class="bg-gray-800 text-white flex justify-between items-center p-4">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <div class="flex items-center space-x-4">
        <img src="https://via.placeholder.com/40" alt="Profile" class="w-10 h-10 rounded-full" />
        <button class="text-white hover:text-gray-300">Logout</button>
      </div>
    </div>

    <div class="flex flex-1">
      <nav class="bg-gray-800 text-white w-64">
        <ul class="py-4">
          <li class="px-4 py-2 hover:bg-gray-700">
            <a href="#" class="block">Home</a>
          </li>
          <li class="px-4 py-2 hover:bg-gray-700">
            <a href="#" class="block">Coming Soon</a>
          </li>
          <li class="px-4 py-2 hover:bg-gray-700">
          <a href="#" class="block">Coming Soon</a>

          </li>
          <li class="px-4 py-2 hover:bg-gray-700">
          <a href="#" class="block">Coming Soon</a>

          </li>
        </ul>
      </nav>

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
          <div>
            <h2 className='p-4 text-bold text-gray-700'>Appointment Requests</h2>
          </div>

          <div className=' h-full'>
            <FilteredDataTable data={data}/>
          </div>
          </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  </div>
</body>
     
    </>
  )
}

export default Page;
