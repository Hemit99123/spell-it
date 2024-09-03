"use client"

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [wordList, setWordList] = useState<string[]>([]);
    const [word, setWord] = useState('');

    const handleAddWord = () => {
        if (word.trim()) {
            setWordList(prevWordList => [...prevWordList, word.trim()]);
            setWord(''); // Clear the input after adding
        }
    };

    const handleDeleteWord = (indexToDelete: number) => {
        setWordList(prevWordList => 
            prevWordList.filter((_, index) => index !== indexToDelete)
        );
    };

    const handlePostWordList = async () => {
        try {
            const response = await fetch('/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content: wordList }),
            });

            if (response.ok) {
                toast.success('Posted into the db!');
            } else {
                toast.error('Failed to post.');
            }
        } catch (err) {
            toast.error('An error occurred');
            console.error(err);
        }
    };

    return (
        <div className='flex justify-center items-center mt-7'>
            <div className='w-full max-w-md'>
                <h1 className='font-bold text-3xl'>Create a new post</h1>
                <p className='text-sm text-gray-500'>
                    This post will contain all the different words that you want to be tested on!
                </p>

                <div className='flex flex-col mt-4'>
                    <label className='mt-2 text-xs'>Title</label>
                    <input 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='rounded border border-gray-500 p-2'
                        placeholder='Enter post title'
                    />
                    <label className='mt-2 text-xs'>Add your words</label>
                    <div className='flex mt-2'>
                        <input
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            className='rounded border border-gray-500 w-full p-2'
                            placeholder='Enter a word'
                        />
                        <button
                            type="button"
                            onClick={handleAddWord}
                            className="ml-4 text-black border border-black hover:bg-black hover:text-white duration-300 font-medium rounded-full text-sm p-4 text-center inline-flex items-center"
                        >
                            <svg className="fill-current w-3 h-3" viewBox="0 0 45.402 45.402" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                            </svg>
                            <span className="sr-only">Add word</span>
                        </button>
                    </div>
                </div>

                {/* Display added words */}
                <ul className="mt-4 overflow-auto max-h-64">
                    {wordList.map((w, index) => (
                        <li key={index} className="flex justify-between items-center border border-gray-400 p-6 rounded-lg font-semibold mb-3">
                            <span className="text-gray-700">{w}</span>
                            <button
                                onClick={() => handleDeleteWord(index)}
                                className="text-red-500 hover:text-red-700 transition-colors"
                                aria-label={`Delete ${w}`}
                            >
                               Delete
                            </button>
                        </li>
                    ))}
                </ul>

                <button 
                    onClick={handlePostWordList}
                    className="w-full py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-black text-white shadow-sm duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm mt-4"
                >
                    Submit your wordlist
                </button>      
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreatePost;
