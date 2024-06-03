import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

function CallToAction() {
  const [signUpActive, setSignUpActive] = useState(false);
  return (
    <>
      <div className="relative h-screen flex justify-center items-center bg-red-500">
        {/* body */}
        <div className="w-[95%] bg-red-900 h-[90%] flex flex-col items-center justify-center gap-12">
          <h3 className="text-4xl">You can grow faster than you think!</h3>
          <p className="w-3/5 text-center">
            Plan with Crest to fulfil your demand today, and dreams tomorrow. We
            bring the methods and technologies of large global companies to help
            brands of all sizes scale.
          </p>
          <button
            className="outline outline-2 bg-gradient-to-t from-blue-500 to-blue-900 ml-5 px-4 py-2 rounded-full"
            onClick={() => setSignUpActive(!signUpActive)}
          >
            Get Started with Clever
          </button>
        </div>

        {/* signup Page */}
        {signUpActive && (
          <div className="absolute max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <button
              className="absolute right-4 top-4 text-xl"
              onClick={() => setSignUpActive(!signUpActive)}
            >
              <RiCloseLargeLine />
            </button>
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Get started with Clever Book
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Login to aceternity if you can because we don&apos;t have a login
              flow yet
            </p>

            <form className="my-8">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <div>
                  <label htmlFor="firstname">First name</label>
                  <input
                    id="firstname"
                    placeholder="Tyler"
                    type="text"
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md p-2 mt-1 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastname">Last name</label>
                  <input
                    id="lastname"
                    placeholder="Durden"
                    type="text"
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md p-2 mt-1 w-full"
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md p-2 mt-1 w-full"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md p-2 mt-1 w-full"
                />
              </div>
              <div className="mb-8 flex flex-col">
                <label htmlFor="twitterpassword">Your twitter password</label>
                <input
                  id="twitterpassword"
                  placeholder="••••••••"
                  type="password"
                  className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md p-2 mt-1 w-full"
                />
              </div>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default CallToAction;
