import React, { useState, useEffect } from 'react';
import '@/css/modal.css';

interface QuizModalProps {
  questions: Array<{
    question: string;
    choices?: Array<string>;
    type: 'choice' | 'text';
  }>;
  onQuizComplete: () => void;
  isCompleted: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({
  questions,
  onQuizComplete,
  isCompleted,
  onClose,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [textAnswer, setTextAnswer] = useState<string>('');

  // Reset the quiz state when isCompleted or onClose changes
  useEffect(() => {
    if (isCompleted) {
      setQuestionIndex(0);
      setSelectedAnswer(null);
      setTextAnswer('');
    }
  }, [isCompleted, onClose]);

  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
      setTextAnswer('');
    } else {
      onQuizComplete();
      onClose();
    }
  };

  const handleAnswerSelection = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    setSelectedAnswer(index);
  };

  const renderQuestion = () => {
    const currentQuestion = questions[questionIndex];
    if (currentQuestion.type === 'choice') {
      // Render multiple-choice question with buttons
      return (
        <>
          {currentQuestion.choices?.map((choice, index) => (
            <button
              key={index}
              className={`quiz-button ${
                index === selectedAnswer ? 'selected-answer' : ''
              }`}
              onClick={(e) => handleAnswerSelection(e, index)}
            >
              {choice}
            </button>
          ))}
        </>
      );
    } else if (currentQuestion.type === 'text') {
      // Render text input question
      return (
        <input
          type="text"
          placeholder="Your answer"
          value={textAnswer}
          onChange={(e) => setTextAnswer(e.target.value)}
        />
      );
    }
  };

  return (
    <div className="modal-content">
      <div className="modal-body">
        <form>
          <div className="quiz-question">
            <p>{questions[questionIndex].question}</p>
          </div>
          <div className="quiz-answer">{renderQuestion()}</div>
          <div className="next-button">
            <button
              className="modal-button"
              onClick={handleNextQuestion}
              disabled={
                (questions[questionIndex].type === 'choice' &&
                  selectedAnswer === null) ||
                (questions[questionIndex].type === 'text' && textAnswer === '')
              }
            >
              {questionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizModal;
