// app/login.js
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const Login = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log("ress", data)
        
        if(data.message=='Login successful'){
          
            router.push('/admin')

        }
       
          if(data.error){
            setIsLoading(false)
            setError('Error has Occured')
            setTimeout(()=>{
                setError('')
            }, 3000)
        }
       /* if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userdetails', data.userdetails);

            window.location.href="/admin"
            console.log('User logged in successfully and token stored');
        } else {
            console.error('Login failed:', data.error);
        }
            */
        setIsLoading(false)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {isLoading ? <p  className='text-gray-500 text-2xl text-bold'>Loading...</p> :""}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <p className='p-4 bg-red-500 text-white'>An Error has Ocurred</p>}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <button
                            disabled={formData.email && formData.password ? false : true}
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
