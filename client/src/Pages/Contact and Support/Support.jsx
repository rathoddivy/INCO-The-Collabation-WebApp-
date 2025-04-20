import React from 'react';
import { useEffect } from 'react';

const Support = () => {

useEffect(()=>{
  document.title = "Support | Inco"
},[])



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Need Support?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We are here to help. Fill out the form below, and we will get back to you as soon as possible.
          </p>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Describe your issue..."
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Request
            </button>
          </div>
        </form>

        <footer className="mt-6 text-center text-sm text-gray-600">
          <p>For urgent inquiries, contact us at: <a href="mailto:support@yourplatform.com" className="text-indigo-600 hover:text-indigo-800">support@yourplatform.com</a></p>
        </footer>
      </div>
    </div>
  );
};

export default Support;
