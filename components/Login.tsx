'use client';
import React from 'react';
import firebase from '../firebase';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(provider);
      router.push('/home');
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
