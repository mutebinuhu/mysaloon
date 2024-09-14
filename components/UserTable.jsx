import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Button } from '@nextui-org/react';
import AddUserForm from '@/app/admin/components/AddUserForm';

const columns = [
  {
    name: 'Name',
    selector: row => row.username,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
  },
  {
    name: 'Role',
    selector: row => row.role,
    sortable: true,
  },
  {
    //name: 'Actions',
    //cell: row => (
      //<div>
        //<Button auto color="primary" onClick={() => handleEdit(row.id)}>Edit</Button>
        //<Button auto color="error" onClick={() => handleDelete(row.id)}>Delete</Button>
      //</div>
   // ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const UserTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddUser, setShowAddUser] =useState(false);

  useEffect(() => {
    // Fetch user data from the API
    axios.get('/api/users') // Replace with your API endpoint
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
   <div className='relative h-screen'>
  <div className='absolute z-40 h-full w-96'>
  {
    showAddUser && <AddUserForm/>
   }
         <span className='text-red-500 text-xl font-bold w-full absolute top-0' onClick={()=>setShowAddUser(false)}>
      {showAddUser && "X"}
      </span>
  </div>
   <div className='text-right'>
      <button type="button" className='bg-green-600 p-4 text-white rounded' onClick={()=>setShowAddUser(true)}>Add User</button>
   </div>
    <DataTable
      columns={columns}
      data={data.data}
      pagination
      highlightOnHover
      pointerOnHover
    />
  </div>
  );
};

const handleEdit = (id) => {
  console.log('Edit user with id:', id);
  // Implement edit functionality
};

const handleDelete = (id) => {
  console.log('Delete user with id:', id);
  // Implement delete functionality
};

export default UserTable;
