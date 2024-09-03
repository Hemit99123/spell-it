'use client'

import React from 'react'
import {signIn} from 'next-auth/react'

const SignInView = () => {

    const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        await signIn('google', {callbackUrl: "/"});
      };

      
  return (
    <div>
      <div className="h-screen w-screen">
        <div className="fixed grid place-items-center top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
          <div className="relative container m-auto px-6">
            <div className="m-auto md:w-7/12">
              <div className="bg-gray-50">
                <div className="p-8">
                  <div className="space-y-4">
                    <h2 className="mb-8 text-2xl font-bold">
                      Sign into Spell It!
                    </h2>
                  </div>
                  <div className="mt-10 grid space-y-4">
                  <button type="button" className="duration-1000 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 h-14 py-2.5 text-center inline-flex items-center me-2 mb-2" onClick={handleSignIn}>
                    <svg className="h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                      <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                    </svg>
                    Authenticate with Google
                  </button>
                  </div>
                  <div className="mt-14 space-y-4 py-3 text-gray-600 text-center">
                    <p className="text-xs">
                      By proceeding, you agree to our {""}
                      <a href="/privacy-policy/" className="underline">
                        Terms and Conditions
                      </a>
                      {" "} and confirm your acceptance of the developer's use of {" "}
                      <a href="/privacy-policy/" className="underline">
                        cookies for authentication purposes
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInView