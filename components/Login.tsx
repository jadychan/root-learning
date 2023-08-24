'use client';
import React from 'react';
import firebase from '../firebase';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      
      if (user) {
        // User is signed in, check if the user has a display name
        if (user.displayName) {
          // Navigate to the '/home' route with the user's name as a query parameter
          router.push(`/home?name=${encodeURIComponent(user.displayName)}`);
        } else {
          router.push('/home'); // Navigate without a name if it's not available
        }
      } else {
        console.error('User is null after signing in with Google');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <button
        className="bg-custom-peach text-white px-6 py-2 hover:bg-custom-flax rounded-full" 
        onClick={handleGoogleLogin}>Sign in w/ Google</button>
    </div>
  );
};

export default Login;
