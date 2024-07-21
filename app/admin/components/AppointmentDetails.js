// src/components/AppointmentDetails.js
import { Button } from '@/components/ui/button';
import formatDate from '@/utils/formatDate';
import { Transition } from '@headlessui/react';
import React from 'react';
import { useRouter } from 'next/navigation';

const AppointmentDetails = ({ appointment, handleClick }) => {
  console.log("appp", appointment)
  const router = useRouter();
    const handleSubmit = async() =>{
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/requests/${appointment._id}`, {
          method:'PUT',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            status:"approved"})
        }
        
      );
        const data = await res.json();
        if(data.success){
          alert("Request Approved")
        }

      } catch (error) {
        console.log("error", error.message)
      }
    }
    const handleCancel = async() =>{
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/requests/${appointment._id}`, {
          method:'PUT',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            status:"cancelled"})
        }
      );
        const data = await res.json();
        if(data.success){
          alert("Request Cancelled")
        }
        

      } catch (error) {
        console.log("error", error.message)
      }
    }
  return (
    <>
    <div className="w-full h-full mx-auto p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-md">
   
        <div>
        <div className='w-max-lg w-96 mx-auto bg-white rounded-lg shadow-md p-4'>
        <h1 className="text-2xl font-bold text-center mb-4">Appointment Details</h1>

        <div className="mb-2">
        <span className="font-semibold">Customer Name:</span> {appointment.name}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Service:</span> {appointment.service}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Created At:</span> {(formatDate(appointment.createdAt, true))}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Preferred Date:</span> {formatDate(appointment.preferredDate)}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Preferred Time:</span> {appointment.preferredTime}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Phone Number:</span> {appointment.phone}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Status:</span> {appointment.status}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Location:</span> {appointment.location}
      </div>
      <div className="mb-2 w-full">
       <form className='w-full' >
        <div className='flex w-full space-x-4'>
        <label className='font-semibold'>Approve</label>
        <input type='checkbox' onClick={handleSubmit} className='p-4'/>
        <label className='font-semibold'>Cancel</label>
        <input type='checkbox' onClick={handleCancel} className='p-4'/>
        </div>
        </form>
      </div>
   <div className='text-right' onClick={handleClick}>
   <Button color="secondary" className="bg-red-500">
          close
        </Button>
   </div>
        </div>
        
        </div>
      
    </div>
 
    </>
  );
};

export default AppointmentDetails;
