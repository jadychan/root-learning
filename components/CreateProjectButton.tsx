import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '@/css/create_button.css';

interface CreateProjectButtonProps {
  openModal: () => void;
}

const CreateProjectButton: React.FC<CreateProjectButtonProps> = ({ openModal }) => {
  return (
    <div className="create-project-button">
      <button onClick={openModal} className="flex flex-col items-center">
        <div className="plus-icon">
          <FontAwesomeIcon icon={faPlus} size="lg" /> {/* Adjust size as needed */}
        </div>
        <div className="text">Create New Project</div>
      </button>
    </div>
  );
};



export default CreateProjectButton;

