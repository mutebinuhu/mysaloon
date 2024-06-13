"use client"
import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage, resetForm } from 'formik';
import * as Yup from 'yup';

const AppointmentSection = () => {
  const initialValues = {
    name: '',
    phone: '',
    service: '',
    location:'',
    prefferedDate:'',
    prefferedTime:''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    service: Yup.string().required('Required'),
    prefferedDate: Yup.string().required('Required'),
    prefferedTime: Yup.string().required('Required'),
    //location: Yup.string().required('Required')

  });

  const onSubmit = async(values) => {
    alert("we are here")
    console.log('Form data===', values);
    // handle form submission
    try {
        const res = await fetch("http://localhost:3000/api/requests", {
          method: 'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(values)
        })
        const data = await res.json();
        console.log("data", data)
    } catch (error) {
      console.log("an error when submitting", error)
    }
    resetForm();
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
        <h2 className='text-4xl text-center md:text-5xl text-white font-bold  mb-4'>Book Appointment</h2>

          <p className="text-lg mb-8">Get the best salon services at your convenience.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Appointment Details</h2>
          <p className="text-lg mb-8">Please fill out the form below to book your appointment.</p>
          <Formik initialValues={initialValues}  validationSchema={validationSchema} onSubmit={onSubmit}>
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
                    <option value="haircut" label="Haircut" />
                    <option value="manicure" label="Manicure" />
                    <option value="pedicure" label="Pedicure" />
                    <option value="facial" label="Facial" />
                  </Field>
                  <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-gray-700">Preferred Date</label>
                  <Field
                    type="date"
                    id="prefferedDate"
                    name="prefferedDate"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.date && touched.date ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="prefferedDate" component="div" className="text-red-500 text-sm" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-700">Preferred Time</label>
                  <Field
                    type="time"
                    id="prefferedTime"
                    name="prefferedTime"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.time && touched.time ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="prefferedTime" component="div" className="text-red-500 text-sm" />
                </div>
                {/**<div>
                  <label htmlFor="time" className="block text-gray-700">Location </label>
                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className={`mt-1 block w-full border rounded py-2 px-3 ${errors.location && touched.location ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <ErrorMessage name="time" component="div" className="text-red-500 text-sm" />
                </div>
            **/}
                <div>
                  <button type="submit" className="bg-[#D5A354] w-full text-white py-2 px-4 rounded hover:[#E8A391]">Book Now</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
