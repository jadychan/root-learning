// pages/welcome.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { parse } from 'querystring';
import Navbar from '../../components/Navbar';
import '../globals.css';
interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex += 1;
      }
    };

    const typingInterval = setInterval(typeText, 100); // Adjust the typing speed (milliseconds per character)

    return () => {
      clearInterval(typingInterval); // Cleanup on unmount to stop typing
    };
  }, [text]);

  return <h1 className="text-4xl md:text-6xl font-bold">{displayText}</h1>;
};


const Welcome = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Check if there's a query parameter named 'name'
    const { name } = parse(window.location.search.slice(1));
    if (name && typeof name === 'string') {
      setUserName(name);
    }
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="bg-custom-brown h-screen text-white flex flex-col justify-start items-center p-4">
        <div className="my-8 text-center">
          {userName ? (
            <Typewriter text={`Hi ${userName}!`} />
          ) : (
            <Typewriter text="Hi there!" />
          )}
        </div>

        <section className="flex flex-col items-center">
          <button
            className="mt-4 bg-custom-flax text-white px-6 py-2 hover:bg-custom-peach rounded-full"
            onClick={() => {
              // Handle the quiz button click here
            }}
          >
            Take Quiz
          </button>
          
          <button
            className="mt-4 bg-custom-peach text-white px-6 py-2 hover:bg-custom-flax rounded-full"
            onClick={() => {
              // Handle the quiz button click here
            }}
          >
            Resume Learning
          </button>

          {/* Add more dashboard elements here */}
        </section>
      </main>



    </div>
  );
};

export default Welcome;