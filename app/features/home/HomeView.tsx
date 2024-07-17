'use client'

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../../components/Modal';

interface WordListType {
  id: number;
  title: string;
  content: string[];
}

const HomeView = () => {
  const [wordList, setWordList] = useState<WordListType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        const getData = async () => {
          const url = '/api/post';
          try {
            const response = await fetch(url);
            const json = await response.json();
            setWordList(json);
          } catch (error: any) {
            console.error(error.message);
          }
        };

        getData();
    };

    fetchData();
  }, []);

  const handleDeletePost = async (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent div
    try {
      const request = new Request("/api/post", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      await fetch(request);
      setWordList((prevWordList) => prevWordList.filter(post => post.id !== id));
      toast.success('Deleted from the db');
    } catch (err) {
      toast.error('An error occurred');
      console.error(err);
    }
  };

  const handleOpenModal = (content: string[]) => {
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const truncateWords = (words: string[], limit: number) => {
    if (words.length > limit) {
      return words.slice(0, limit).join(', ') + '...';
    }
    return words.join(', ');
  };

  return (
    <div>
      <h1 className='text-center mt-5 text-3xl font-bold'>Dashboard</h1>
      <div className="flex justify-center my-5">
        <a href="/create-post" className="text-white bg-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center">
          Create a new list
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>

      <div className="max-w-screen-xl mx-auto p-16">
        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {wordList.map((word) => (
            <div
              key={word.id}
              className="group cursor-pointer hover:bg-black hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg mb-8"
              onClick={() => handleOpenModal(word.content)}
            >
              <div className="py-4 px-8">
                <h4 className="text-lg mb-3 font-semibold">{word.title}</h4>
                <p className="group-hover:text-gray-100 mb-2 text-sm text-gray-600">
                  {truncateWords(word.content, 3)}
                </p>
                <hr className="mt-4" />
                <div className="flex items-center justify-between mt-4">
                  <button onClick={(e) => handleDeletePost(e, word.id)} className="flex items-center w-4 h-4">
                    <svg
                      fill="#ff0000"
                      viewBox="0 0 482.428 482.429"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <g>
                        <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098 c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117 h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828 C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879 C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096 c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266 c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979 V115.744z"></path>
                        <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"></path>
                        <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07 c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"></path>
                        <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07 c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
        <Modal isOpen={isModalOpen} content={selectedContent} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default HomeView;
