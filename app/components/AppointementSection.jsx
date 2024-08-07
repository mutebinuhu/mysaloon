"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AppointmentSection = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [price, setPrice] = useState("")

  const services = [
    { id:1, name: 'Haircut', price: 15000 },
    { id:2,name: 'Manicure', price: 20000 },
    { id:3,name: 'Pedicure', price: 25000 },
    { id:4,name: 'Massage', price: 50000 },
    { id:5,name: 'Facial', price: 40000 },
    { id:6,name: 'Hair Coloring', price: 60000 },
    { id:7,name: 'Waxing', price: 30000 },
    { id:8,name: 'Shampoo and Blowdry', price: 10000 },
    { id:9,name: 'Eyebrow Threading', price: 5000 },
    { id:10,name: 'Hair Treatment', price: 70000 }
  ];

  
  

  
  
  


  /*const getServices = async () => {
    setIsLoading(true)
    // handle form submission
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/services");
        const data = await res.json();
        console.log("data", data);
        setServices(data)
        setTimeout(() => setShowSuccessMessage(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.log("an error occurred when submitting", error);
      setIsLoading(false)
    }
    setIsLoading(false)
  };

*/
  const initialValues = {
    name: '',
    phone: '',
    service: '',
    location:'',
    preferredDate:'',
    preferredTime:''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    service: Yup.string().required('Required'),
    preferredDate: Yup.string().required('Required'),
    preferredTime: Yup.string().required('Required'),
    location: Yup.string().required('Required')
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log('Form data===', values);

    const selectedService = services.find(service => service.id === parseInt(values.service));
    if (selectedService) {
      console.log("Selected service:", selectedService);
    } else {
      console.log("No service selected or invalid service ID");
    }

    const phone=  values.phone
    const location = values.location
    const name = values.name
    const preferredDate = values.preferredDate
    const preferredTime = values.preferredTime
    const service = selectedService.name
    const price = selectedService.price

    let dataTosubmit = {
      location,name,preferredTime, preferredDate, service, price, phone
    }

    setIsLoading(true)
  
    // handle form submission
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/requests/addrequest", {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(dataTosubmit)
        });
        const data = await res.json();
        console.log("services", data);
        resetForm();
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.log("an error occurred when submitting", error);
      setIsLoading(false)
    }
    setIsLoading(false)
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-fadeIn');
          } else {
            section.classList.remove('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    //getServices()
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div id="booknow" ref={sectionRef} className="relative bg-cover bg-center" style={{ backgroundImage: "url('barber-shop.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full md:flex items-center flex-row-reverse justify-between p-8">
        <div className="text-white max-w-lg">
          <h2 className='text-4xl text-center md:text-5xl text-white font-bold mb-4'>Book Appointment</h2>
          <p className="text-lg mb-8">Get the best salon services at your convenience.</p>
        </div>
        
       {
        showSuccessMessage ? 
        <div className='h-screen flex justify-center items-center'>

<div className="bg-green-100 border  border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
        <span className="block sm:inline">Your appointment has been successfully booked!</span>
      </div>
        </div>
        :
        <>
         <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
          <p className="text-lg mb-8">Please fill out the form below to book your appointment.</p>
       
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700">Service</label>
                  <Field

               
                    as="select"
                    id="service"
                    name="service"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.service && touched.service ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="" label="Select service" />
                    {services.map((service, id)=><option key={id}   value={service.id}  label={service.name} />)}
                  </Field>
                  <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label htmlFor="preferredDate" className="block text-gray-700">Preferred Date</label>
                  <Field
                  
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.prefferedDate && touched.prefferedDate ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="preferredDate" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-gray-700">Preferred Time</label>
                  <Field
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.prefferedTime && touched.prefferedTime ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="preferredTime" component="div" className="text-red-500 text-sm" />
                </div>
                {/**<div>
                  <label htmlFor="location" className="block text-gray-700">Location </label>
                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.location && touched.location ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                </div>
                **/}
                     <div>
                  <label htmlFor="name" className="block text-gray-700">Location</label>
                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.location && touched.location ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />

                </div>
                <div className=''>
                  <button type="submit" className="bg-[#D5A354] text-white py-2 px-4 rounded hover:bg-[#E8A391]">Book Now</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        </>
       }
      </div>
    </div>
  );
};

export default AppointmentSection;
