import React from 'react'
import { authenticateClient } from '../lib/auth'

const page = async () => {

  await authenticateClient() 

  return (
        <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center mt-12">
            <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800 lowercase">Studying made easier</h1>
                    <p className="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600">Prepare for a spelling bee or a spelling test using our tool!</p>
                    <div className="md:mt-14 mt-12 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="money">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg1.svg" alt="money" />
                        </div>
                        <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Costs? There are none! This is all for free!</p>
                    </div>
                    <div className="mt-7 flex flex-col items-center">
                        <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="bright ideas">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg4.svg" alt="bulb" />
                        </div>
                        <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Just sign in and add a word list! After that... let our website speak random words from said list to you and you provide an answer (:</p>
                    </div>
                </div>
            </div>
            <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
                <img src="https://i.ibb.co/7SmJNvH/about-image.png" alt="image ow a woman studying" className="h-full rounded-md object-cover object-center md:block hidden" />
                <img src="https://i.ibb.co/NT0VJcd/pexels-la-miko-3681591-1.png" alt="image ow a woman studying" className="h-auto w-auto md:hidden block" />
            </div>
        </div>
    
  )
}

export default page