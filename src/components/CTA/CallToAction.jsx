import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

function CallToAction() {
  const [signUpActive, setSignUpActive] = useState(false);
  return (
    <>
      <div className="relative py-20 lg:py-28 ">
        {/* body */}
        <div className="w-[86%] bg-gradient-to-r from-indigo-500 to-purple-500 space-y-6 m-auto text-center px-8 py-8 rounded-3xl lg:w-[85%] lg:py-32 lg:space-y-10">
          {/* main */}
          <div className="space-y-8 lg:space-y-10">
            <h3 className="text-xl lg:text-4xl font-poetsen">
              You can grow faster than you think!
            </h3>
            <p className="text-center lg:text-lg lg:w-[55%] lg:m-auto font-mono">
              Plan with Crest to fulfil your demand today, and dreams tomorrow.
              We bring the methods and technologies of large global companies to
              help brands of all sizes scale.
            </p>
          </div>

          {/* button */}
          <button
            onClick={() => setSignUpActive(!signUpActive)}
            className="font-mono font-bold px-7 py-2 bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent/60 lg:px-6 tracking-tighter"
          >
            Get started with CleverBook
          </button>
        </div>

        {/* signup Page */}
        {signUpActive && (
          <div className="h-screen w-screen fixed top-0 left-1/2 -translate-x-1/2 flex justify-center items-center bg-transparent/70 z-50">
            <div className="w-[90%] h-fit relative bg-black px-8 flex flex-col justify-center items-center pt-12 rounded-2xl overflow-hidden lg:w-2/5">
              <button
                className="absolute right-0 top-0 text-xl p-3 rounded-es-xl bg-zinc-900/80"
                onClick={() => setSignUpActive(!signUpActive)}
              >
                <RiCloseLargeLine />
              </button>
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Get started with Clever Book
              </h2>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to aceternity if you can because we don&apos;t have a
                login flow yet
              </p>

              <form className="my-8 text-center">
                <div className="flex flex-col text-left lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 mb-4">
                  <div>
                    <label htmlFor="firstname">First name</label>
                    <input
                      id="firstname"
                      placeholder="Tyler"
                      type="text"
                      className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname">Last name</label>
                    <input
                      id="lastname"
                      placeholder="Durden"
                      type="text"
                      className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
                    />
                  </div>
                </div>
                <div className="text-left mb-4 flex flex-col">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
                  />
                </div>
                <div className="text-left mb-4 flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
                  />
                </div>
                <div className="text-left mb-8 flex flex-col">
                  <label htmlFor="twitterpassword">Your twitter password</label>
                  <input
                    id="twitterpassword"
                    placeholder="••••••••"
                    type="password"
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
                  />
                </div>

                <button
                  onClick={() => setSignUpActive(!signUpActive)}
                  className=""
                >
                  <div className="px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl hover:bg-gradient-to-l">
                    Submit
                  </div>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CallToAction;
