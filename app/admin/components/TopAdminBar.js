// app/components/TopAdminBar.js
"use client"
import { FaBell, FaSignOutAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getUserFromToken } from '@/utils/getUserDetails';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import DashboardLoader from '../DashboardLoader';

const TopAdminBar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    setUser(cookies.user);
  }, []);
  if (!user) {
    return (
      <DashboardLoader/>
    )
  }
  return (
   
    <>
     <div className="flex justify-between items-center bg-gray-800 text-white">
  
    </div>
        <div class="bg-gray-800 text-white flex justify-between items-center p-4">
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <div class="flex items-center space-x-4">
      <div>
      <img src={ `https://avatar.iran.liara.run/public/boy`} alt="Profile" class="w-10 h-10 rounded-full" />
      <p>{user}</p>
      </div>

      <button class="text-white hover:text-gray-300"  onClick={async()=>{

try {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
  });
  console.log("res", response)

  if (response.ok) {
    router.push('/login');
  } else {
    console.log('Error logging out');
  }

} catch (error) {
    console.log("errwhen loging out", error.message)
}
}}>Logout</button>
    </div>
  </div>
    </>
  );
};

export default TopAdminBar;
