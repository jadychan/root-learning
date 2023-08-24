import React from 'react';
import Login from './Login';
import firebase from '../firebase';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut(); // Sign out the user using Firebase
      router.push('/'); // Redirect to the home page or login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const user = firebase.auth().currentUser;

  return (
    <nav className="p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold"></div>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-custom-peach text-white px-6 py-2 hover:bg-custom-flax rounded-full" 
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Login />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
