// components/FilteredDataTable.js
"use client"
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { format, parseISO, isWithinInterval } from 'date-fns';
import Actions from './common/Actions';
import AppointmentDetails from './AppointmentDetails';

import { useRouter } from 'next/navigation';

import axios from 'axios';
const UpdateForm = ({appointment}) => {
  const [status, setStatus] = useState('');  // state to hold the selected option
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSelectChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!status) {
      alert("Please select an option before submitting.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/requests/${appointment._id}`, {
        status: status,
      });

      if (response.status === 200) {
        setSuccess("Status updated successfully!");
      } else {
        setError("Failed to update status. Please try again.");
      }
    } catch (err) {
      console.log("err", err)
      setError("An error occurred while updating status. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <select
          id="status"
          value={status}
          onChange={handleSelectChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>Select an option</option>
          {
           appointment.isPaid ? "" : <>
              <option value="approved">Approve</option>
              <option value="cancelled">Cancel</option>
           </> 
          }
      
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Updating..." : "Submit"}
        </button>

        {error && <p className="text-red-500 mt-2 w-12">{error}</p>}
        {success && <p className="text-green-500 mt-2 w-12">{success}</p>}
      </form>
    </div>
  );
};

const FilteredDataTable = ({ data }) => {
   let router =useRouter()
    const handleViewAppointment = (row) =>{

        setShowAppointmentPage(true)
        setDetails(row)
      }

      const handlePayMent = async (row) => {
        try {
          const data = await fetch(`/api/requests/${row}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: row, isPaid: true })
          });
    
          const res = await data.json();
          alert("Payment Made");
          console.log("response", res);
          router.push("/admin"); // Redirect after the update
        } catch (error) {
          console.log("Error", error);
        }
      }
    console.log("this is the entires data==============", data);
    const [showAppointmentPage, setShowAppointmentPage] = useState(false);
    const [details, setDetails] = useState({})
  const [filteredData, setFilteredData] = useState(data);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [isPaid, setIsPaid] = useState('');
  const [total, setTotal ] = useState('');


  const [serviceFilter, setServiceFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    let filtered = data;
    console.log("filtered Data==============", filtered)

    if (startDate && endDate) {
      const start = parseISO(startDate);
      const end = parseISO(endDate);
      filtered = filtered.filter(item => {
        const date = parseISO(item.createdAt);
        return isWithinInterval(date, { start, end });
      });
    }

    if (statusFilter) {
        
      filtered = filtered.filter(item => item.status === statusFilter);
    }

    if (serviceFilter) {

      filtered = filtered.filter(item => item.service == serviceFilter);

    }
    if (isPaid) {

      filtered = filtered.filter(item => item.isPaid == true);
      setTotal(filtered && filtered.filter(item => item.isPaid == true).reduce((acc, curr)=>acc.price + curr))
     // setTotal(filtered.filter(item => item.isPaid == true).reduce((acc, curr)=>{
       // return acc + curr.price
      //}, 0))

    }

    if (nameFilter) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    setFilteredData(filtered);
  }, [startDate, endDate, statusFilter, serviceFilter, nameFilter, isPaid,  data]);


  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,

    },
    {
      name: 'Approve ',
      selector: row => <UpdateForm appointment={row}/>,
      

    },

    {
      name: 'service',
      selector: row => row.service,
      sortable: true,

    },

  
    {
      name: 'Created At',
      selector: row => format(parseISO(row.createdAt), 'yyyy-MM-dd'),
      sortable: true,

    },
    {
      name: 'Status',
      selector: row => <span className={`${row.status == 'confirmed'  ? 'text-green-500' :'text-red-500'}`}>{row.status}</span>,
      sortable: true,

    },
    {
      name: 'Price',
      selector: row =><div><span>{ row.price}</span>{row.isPaid ? <span className={`mx-1 bg-green-500 p-4 py-2 text-white `}>PAID</span> :<button className={`mx-1 bg-red-500 p-2 rounded text-white ${row.status == 'new request' ? 'hidden':''}`} onClick={()=>handlePayMent(row._id)}>PAY</button>}</div>,
      sortable: true,

    },

    {
      name: 'Action',
      selector: row => <div className='flex h-full w-full justify-between items-center'><Actions   onView={()=>handleViewAppointment(row)}/></div>,

    },
  ];
  
  const handleClick = () =>{
    setShowAppointmentPage(false);
  }
  return (
    <div className="p-4 ">
      <p className=''>  {startDate && endDate && total ? (
    <>From {startDate} to {endDate} <span className='font-bold'>{total}</span> ugx was recorded</>
  ) : (
    ""
  )}</p>
      <div className="mb-4 flex justify-between rounded bg-gray-100 p-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Start Date:
          </label>
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            End Date:
          </label>
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Status:
          </label>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All</option>
            <option value="new request">New Request</option>
            <option value="approved">Approved</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Service:
          </label>
          <select
            value={serviceFilter}
            onChange={e => setServiceFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All</option>
            <option value="haircut">Haircut</option>
            <option value="manicure">Manicure</option>
            <option value="pedicure">Pedicure</option>
            <option value="facial">Facial</option>
            <option value="Hair Coloring">Hair Coloring</option>
            <option value="Waxing">Waxing</option>
            <option value="Shampoo and Blowdry">Shampoo and Blowdry</option>
            <option value="Eyebrow Threading">Eyebrow Threading</option>
            <option value="Hair Treatment">Hair Treatment</option>

            {/* Add more services as needed */}
          </select>
        </div>
        <div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Paid
          </label>
          <select
            value={isPaid}
            onChange={e => setIsPaid(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All</option>
            <option value="true">Paid</option>
          </select>
        </div>
        <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            value={nameFilter}
            onChange={e => setNameFilter(e.target.value)}
            placeholder="Search by name"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
          
        </div>
      </div>
      <div className='relative h-full'>

      <DataTable
        columns={columns}
        data={filteredData}
        pagination={5}
        
        className="bg-white shadow-md rounded-lg "
      />
          
          {
            showAppointmentPage && <div className='absolute inset-0'>
            <AppointmentDetails appointment={details} handleClick={handleClick}/>
            </div>
          }
          </div>
    </div>
  );
};

export default FilteredDataTable;
