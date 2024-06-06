// NewsletterSignup.js
"use client"
import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-[#D5A354] py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Sign Up for Our Newsletter</h2>
        <p className="text-lg mb-6">Stay updated with our latest news and special offers.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
