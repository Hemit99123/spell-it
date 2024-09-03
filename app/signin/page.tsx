import {signIn} from '@/lib/auth'
import SpellItLogo from './assets/spell-it.png'
import Image from 'next/image'

const SignIn = () => {

  return (
    <div>
      <form 
        action={async () => {
          "use server";
          await signIn('google', { redirectTo: "/" }); // Perform the sign-in operation
          // Optionally, handle redirection or state change here if needed
        }}
      >
        <div className="h-screen w-screen">
          <div className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
            <div className="relative container m-auto px-6">
              <div className="m-auto md:w-7/12">
                <div className="bg-gray-50">
                  <div className="p-8">
                    <div className="space-y-4">
                      <Image
                        src={SpellItLogo}
                        loading="lazy"
                        alt='Spell-it Logo'
                        className="w-12 rounded-full"
                      />
                      <h2 className="mb-8 text-2xl font-bold">
                        Sign into Spell It!
                      </h2>
                    </div>
                    <div className="mt-10 grid space-y-4">
                    <button type="submit" className="duration-1000 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 h-14 py-2.5 text-center inline-flex items-center me-2 mb-2">
                      Authenticate
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
      </form>
    </div>
  )
}

export default SignIn