// app/components/TopAdminBar.js
"use client"
import { FaBell, FaSignOutAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getUserFromToken } from '@/utils/getUserDetails';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';

const TopAdminBar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    setUser(cookies.user);
  }, []);
  if (!user) {
    return <p>Access denied</p>;
  }
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          src="/person+profile+user+icon-1320184018411209468.png"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <span>{user}</span>
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <FaBell size={20} />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
        </button>
        <button  onClick={async()=>{

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
                }}>
          <FaSignOutAlt size={20}  />
        </button>
      </div>
    </div>
  );
};

export default TopAdminBar;
