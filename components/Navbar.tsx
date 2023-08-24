import React from 'react';
import Login from './Login';

const Navbar = () => {

  const scrollToEmailForm = () => {
    // Find the email form element by its ID or another unique identifier.
    const emailForm = document.getElementById('email-form');
    console.log(emailForm);

    // Scroll to the email form using the scrollIntoView method.
    if (emailForm) {
      emailForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold"></div>
          <ul className="flex space-x-4">
            <li><a href="#"></a></li>
            <Login />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
