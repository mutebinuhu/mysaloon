"use client"
import { useEffect, useState } from 'react'
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

function Page() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
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
      name: 'Action',
      selector: row => <Actions/>,

    },
  ];
  
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  

useEffect(()=>{
  const requests = async () =>{
    try {
        console.log(process.env.NEXT_PUBLIC_API_URL+"========================= api url ");
        console.log(process.env.NEXT_PUBLIC_MONGODB_URI+"========================= mongo db ");
      const data = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/requests")
      const response = await data.json();
      console.log("requests", response)
      setData(response.data);
    } catch (error) {
      console.log("error", error.message)
    }
  }
  requests();
}, [])
  return (
    <>
     <div className='flex'>
     <div className='w-1/4'>
        <SideBar/>
      </div>
      <div className='w-full'>
          <TopBar/>
      <div>
        <div className='flex justify-between mt-4 mx-4 space-x-4'>
        <Counters statistics={data && data.length} text="Total Appointments" icon={<MdEventNote className='font-bold text-3xl text-purple-600'/>}/>
        <Counters statistics={data && data.filter(data=>data.status=="confirmed").length} text="Confirmed Appointments" icon={<GiConfirmed className='font-bold text-3xl text-purple-600'/>}/>
        <Counters statistics={data && data.filter(data=>data.status=="cancelled").length} text="Cancelled Appointments" icon={<TiCancel  className='font-bold text-3xl text-purple-600'/>}/>
        <Counters statistics={100} text="Page  Visits" icon={<MdOutlinePeopleAlt className='font-bold text-3xl text-purple-600'/>}/>

        </div>
       

        <div className='mx-4 mt-4 bg-white border drop-shadow-xl'>
          <div>
            <h2 className='p-4 text-bold text-gray-700'>Appointment Requests</h2>
          </div>
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            pagination={2}

          />
        </div>
        </div>
      
      </div>
     </div>
     
    </>
  )
}

export default Page;
