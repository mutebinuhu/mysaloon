"use client"
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
//import fetchServices from '../api/services'; // Adjust path as needed
//import { addService, updateService, deleteService } from '../api/serviceActions'; // Create these functions

export default function ServicesTable() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/services")
        const res = await data.json()
        setServices(res);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };
    getServices();
  }, []);

  /*const handleAdd = async () => {
    const newService = { name: 'New Service', price: 100, specialists: [] }; // Replace with actual data from a form
    const addedService = await addService(newService);
    setServices([...services, addedService]);
  };

  const handleEdit = async (serviceId) => {
    const updatedService = { name: 'Updated Service', price: 150, specialists: [] }; // Replace with actual data from a form
    const editedService = await updateService(serviceId, updatedService);
    setServices(services.map(service => service._id === serviceId ? editedService : service));
  };

  const handleDelete = async (serviceId) => {
    await deleteService(serviceId);
    setServices(services.filter(service => service._id !== serviceId));
  };
*/
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Specialists',
      selector: row => row.specialists.join(', '),
      sortable: true,
    },
    //{
      //name: 'Actions',
      //cell: row => (
       // <>
        // <button onClick={{/*() => handleEdit(row._id)*/}} className="text-blue-500 hover:text-blue-700">Edit</button>
         // <button onClick={{/*() => handleDelete(row._id)*/}} className="text-red-500 hover:text-red-700 ml-4">Delete</button>
       // </>
     // ),
   // },
  ];

  return (
    <div className="p-4">
        {/*      <button onClick={handleAdd} className="mb-4 px-4 py-2 bg-green-500 text-white rounded">Add Service</button>*/}
      <DataTable
        columns={columns}
        data={services}
        progressPending={loading}
        pagination
      />
    </div>
  );
}
