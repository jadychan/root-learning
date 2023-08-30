import React, { useState } from 'react';
import QuizModal from './QuizModal';
import '@/css/modal.css';

interface FullPageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullPageModal: React.FC<FullPageModalProps> = ({ isOpen, onClose }) => {
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [quizKey, setQuizKey] = useState(0); // Add a quizKey state

  const handleQuizComplete = () => {
    setIsQuizCompleted(true);
  };

  const handleCloseModal = () => {
    onClose();
    setIsQuizCompleted(false); // Reset isQuizCompleted
    setQuizKey((prevKey) => prevKey + 1); // Increment quizKey to reset QuizModal
  };

  const quizData = [
    {
      question: 'What is your experience with programming?',
      choices: ['Beginner', 'Intermediate', 'Proficient'],
      type: 'choice' as const,
    },
    {
      question: 'What is your desired outcome?',
      choices: ['Web Development', 'Mobile Apps', 'Data Science and Machine Learning', 'Creative Coding', 'Music and Audio', 'Data Visualizations'],
      type: 'choice' as const,
    },
    {
      question: "Let's adjust your curriculum to your interests? What are your interests at the moment? i.e. Barbie, video games, plants",
      type: 'text' as const,
    },
  ];
  

  return (
    <div className={`full-page-overlay ${isOpen ? 'open' : ''}`}>
      <QuizModal
        key={quizKey}
        questions={quizData}
        onQuizComplete={handleQuizComplete}
        isCompleted={isQuizCompleted}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default FullPageModal;
