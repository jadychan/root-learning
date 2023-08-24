'use client';
import { useState } from 'react';
import './globals.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function postEmail(email: string): Promise<Response> {
    const response = await fetch('/api/post_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    return response;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Email submitted:', email);
    postEmail(email)
      .then(response => {
        if (response.ok) {
          toast.success('Email submitted successfully!', {
            className: 'Toastify__toast--success',
          });
        } else {
          console.error('Error posting email:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Failed to post email:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const scrollToEmailForm = () => {
    // Find the email form element by its ID or another unique identifier.
    const emailForm = document.getElementById('email-form');

    // Scroll to the email form using the scrollIntoView method.
    if (emailForm) {
      emailForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      
      <header className="bg-custom-brown h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col justify-center items-center text-center text-white flex-grow">
            <h1 className="text-4xl md:text-6xl font-bold">ROOTIMENTARY AI</h1>
            <p className="text-lg mt-4">Making coding more accessible.</p>

            <div className="text-center mt-8">
              <button
                className="bg-custom-green text-white px-6 py-2 hover:bg-custom-flax rounded-full"
                onClick={scrollToEmailForm}
              >
                Sign Up
              </button>
            </div>
        </div>
      </header>
      
      <div className="bg-custom-peach flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-2">Get Notified!</h2>
          <p className="text-gray-600 mb-4">Sign up to receive updates when the app launches.</p>

          <form id="email-form" onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border rounded-lg mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
        <ToastContainer progressClassName="toastProgress" />
      </div>
    </div>

  );
};

export default EmailForm;
