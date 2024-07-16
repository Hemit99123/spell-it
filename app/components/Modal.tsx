'use client'

import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface ModalProps {
  isOpen: boolean;
  content: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, content, onClose }) => {

    const [randomWord, setRandomWord] = useState('')
    const [answer, setAnswer] = useState('')

    const handleGetRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * content.length);
        const randomWord = content[randomIndex];
        setRandomWord(randomWord);
        toast.success('Chose a new random word from your list')
    }

    const sayRandomWord = () => {
        if (randomWord) {
            const utterance = new SpeechSynthesisUtterance(randomWord);
            speechSynthesis.speak(utterance);
        } else {
            const utterance = new SpeechSynthesisUtterance('No word chosen');
            speechSynthesis.speak(utterance);
        }
    }

    const handleCheckAnswer = () => {
        if(answer.toLowerCase() === randomWord.toLowerCase()) {
            toast.success('Correct answer');
            setRandomWord('');
            setAnswer('');
        } else {
            toast.error('Wrong answer... try again');
        }
    }

    return (
        <div
            id="authentication-modal"
            aria-hidden={!isOpen}
            className={`backdrop-blur-sm fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full ${isOpen ? 'overflow-y-auto' : 'hidden'}`}
        >
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Testing ongoing...
                        </h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="authentication-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <div className="space-y-4">
                            <button
                                onClick={handleGetRandomWord}
                                className="w-auto text-white bg-black focus:outline-none font-medium rounded-lg text-xs px-3 py-2 flex items-center"
                            >
                                <svg
                                    className="w-4 h-4 mr-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                Choose a word
                            </button>
                            <button
                                onClick={sayRandomWord}
                                className="w-auto text-black border border-black font-medium rounded-lg text-xs px-3 py-2 flex items-center"
                            >
                                <svg
                                    className="w-4 h-4 mr-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                Say the word
                            </button>
                            <div>
                                <label
                                    htmlFor="answer"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Your answer
                                </label>
                                <input
                                    type="text"
                                    name="answer"
                                    id="answer"
                                    placeholder="Type your answer here"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                    required
                                />
                            </div>
                            <button
                                onClick={handleCheckAnswer}
                                className="w-full text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Check answer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
