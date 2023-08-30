// pages/welcome.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { parse } from 'querystring';
import Navbar from '@/components/Navbar';
import '@/css/globals.css';
import CreateProjectButton from '@/components/CreateProjectButton';
import FullPageModal from '@/components/FullPageModal';

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

    const typingInterval = setInterval(typeText, 100);

    return () => {
      clearInterval(typingInterval);
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="bg-custom-brown h-screen text-white flex flex-col justify-start p-4">
        <div className="container mx-auto text-left"> {/* Container with left alignment */}
          <div className="my-8">
            {userName ? (
              <Typewriter text={`Hi ${userName}!`} />
            ) : (
              <Typewriter text="Hi there!" />
            )}
          </div>

          <section className="flex flex-col">
            <CreateProjectButton openModal={openModal} />
            <FullPageModal isOpen={isModalOpen} onClose={closeModal} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Welcome;