import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import Layout from '../Layout/Layout';

const Contact = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const formData = await res.json();

    if (formData.status === 500 || !formData) {
      window.alert('Invalid message');
      console.log('Invalid data');
    } else {
      window.alert('Message has been sent successfully');
      console.log('Message has been sent successfully');

      navigate('/');
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <h1 className="text-2xl font-semibold py-4 text-center">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} method="POST" className="px-6 pb-8">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
              <input
                className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                {...register('name', { required: true })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
              <input
                className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                name="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', { required: true })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full px-3 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                {...register('message', { required: true })}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
