'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePostView = () => {
    const [title, setTitle] = useState('');
    const [wordList, setWordList] = useState<string[]>([]);
    const [word, setWord] = useState('');

    const handleAddWord = () => {
        if (word) {
            setWordList([...wordList, word]);
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
            const request = new Request("/api/post", {
                method: "POST",
                body: JSON.stringify({ title, content: wordList }),
            });
            await fetch(request);
            toast.success('Posted into the db!');
        } catch (err) {
            toast.error('An error occurred');
            console.error(err);
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='w-full max-w-md'>
                <h1 className='font-bold text-3xl'>Create a new post</h1>
                <p className='text-sm text-gray-500'>This post will contain all the different words that you want to be tested on!</p>

                <div className='flex flex-col mt-4'>
                    <label className='mt-2 text-xs'>Title</label>
                    <input 
                        onChange={(e) => setTitle(e.target.value)}
                        className='rounded border border-gray-500 p-2'
                    />
                    <label className='mt-2 text-xs'>Add your words</label>
                    <div className='flex mt-2'>
                        <input
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            className='rounded border border-gray-500 w-full p-2'
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
                        <div key={index} className="flex justify-between items-center border border-gray-400 p-6 rounded-lg font-semibold mb-3">
                            <li className="text-gray-700">{w}</li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current cursor-pointer" onClick={() => handleDeleteWord(index)} width="24" height="24" id="delete">
                                <g fill="none" fillRule="evenodd" stroke="#4A4A4A">
                                    <path d="M5.5 7.5V20A1.5 1.5 0 0 0 7 21.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5h-14z"></path>
                                    <path strokeLinecap="round" d="M8.5 10.41v8.18M12.5 10.41v8.18M16.5 10.41v8.18M9 4.333V3.244C9 2.557 9.627 2 10.4 2h4.2c.773 0 1.4.557 1.4 1.244v1.09"></path>
                                    <rect width="18" height="3" x="3.5" y="4.5" rx="1.5"></rect>
                                </g>
                            </svg>
                        </div>
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

export default CreatePostView;
