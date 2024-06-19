// src/components/AppointmentDetails.js
import formatDate from '@/utils/formatDate';
import { Transition } from '@headlessui/react';
import React from 'react';

const AppointmentDetails = ({ appointment, handleClick }) => {
    console.log("======appointment=======", appointment)
  return (
    <>
    <div className="w-full h-full mx-auto bg-white p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-md" onClick={handleClick}>
   
        <div>
        <h1 className="text-2xl font-bold text-center mb-4">Appointment Details</h1>
        <div className='w-max-lg w-96 mx-auto bg-white rounded-lg shadow-md p-4'>
        <div className="mb-2">
        <span className="font-semibold">Customer Name:</span> {appointment.name}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Service:</span> {appointment.service}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Created At:</span> {(formatDate(appointment.createdAt))}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Preferred Date:</span> {appointment.preferredDate}
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
        </div>
        </div>
      
    </div>
 
    </>
  );
};

export default AppointmentDetails;