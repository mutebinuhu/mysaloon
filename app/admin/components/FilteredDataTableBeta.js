import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { format, parseISO, isWithinInterval } from 'date-fns';

const FilteredDataTableBeta = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    let filtered = data;

    if (startDate && endDate) {
      const start = parseISO(startDate);
      const end = parseISO(endDate);
      filtered = filtered.filter(item => {
        const date = parseISO(item.preferredDate);
        return isWithinInterval(date, { start, end });
      });
    }

    if (statusFilter) {
      filtered = filtered.filter(item => item.status === statusFilter);
    }

    if (serviceFilter) {
        alert("filtered", serviceFilter)
      filtered = filtered.filter(item => item.service == serviceFilter);
    }

    if (nameFilter) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    setFilteredData(filtered);
  }, [startDate, endDate, statusFilter, serviceFilter, nameFilter, data]);

  const columns = [
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Phone', selector: row => row.phone, sortable: true },
    { name: 'Service', selector: row => row.service, sortable: true },
   /** { name: 'Preferred Date', selector: row => format(parseISO(row.preferredDate), 'yyyy-MM-dd'), sortable: true },
    { name: 'Preferred Time', selector: row => row.preferredTime, sortable: true },
     */ 
    { name: 'Status', selector: row => row.status, sortable: true },
  ];

  return (
    <div className="p-4">
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
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
            <option value="Haircut">Haircut</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Facial">Facial</option>
            {/* Add more services as needed */}
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
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        className="bg-white shadow-md rounded-lg"
      />
    </div>
  );
};

export default FilteredDataTableBeta;
