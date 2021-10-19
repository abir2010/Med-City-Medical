import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { user, signUpNewUser, logOut } = useAuth();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPass = (e) => {
    setPass(e.target.value);
  };
  const getName = (e) => {
    setUserName(e.target.value);
  }
  return (
    <div className="flex justify-center my-8">
      <div className="flex flex-col w-full max-w-md px-12 py-28 space-y-4 text-center rounded-xl dark:bg-coolGray-900 dark:text-coolGray-100">
        {user.email ? (
          <div className="text-black rounded-md p-2">
            <div className="max-w-md p-6 dark:bg-coolGray-900 dark:text-coolGray-100">
                <p className="text-xl font-bold text-green-400">Welcome</p>
              <img
                src={user?.photoURL}
                alt=""
                className="object-cover w-full h-64 pb-6 rounded-sm sm:h-96 dark:bg-coolGray-500"
              />
              <div>
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p>
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={logOut}
              className="bg-green-300 mt-2 text-md text-black font-bold block w-full p-3 text-center rounded-md dark:text-coolGray-900 dark:bg-violet-400"
            >
              log out
            </button>
          </div>
        ) : (
          <div className="bg-gray-800 w-full max-w-md px-8 py-12 space-y-3 rounded-xl">
            <h1 className="text-3xl font-semibold text-green-400">Sign up</h1>
            <a className="text-sm dark:text-coolGray-400 text-white" href="/">
              Or start your free trial
            </a>
            <form
              noValidate=""
              className="space-y-4 ng-untouched ng-pristine ng-valid"
            >
              <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                  Name
                </label>
                <input
                  onBlur={getName}
                  id="name"
                  type="name"
                  placeholder="   Your Name"
                  className="rounded-md mb-4 h-8 dark:border-coolGray-600 dark:bg-coolGray-900 dark:text-coolGray-100 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
                />
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={getEmail}
                  id="email"
                  type="email"
                  placeholder="   Email address"
                  className="rounded-md mb-4 h-8 dark:border-coolGray-600 dark:bg-coolGray-900 dark:text-coolGray-100 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onBlur={getPass}
                  id="password"
                  type="password"
                  placeholder="   Password"
                  className="-mt-1 rounded-md h-8 dark:border-coolGray-600 dark:bg-coolGray-900 dark:text-coolGray-100 focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    aria-label="Remember me"
                    className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-white dark:text-coolGray-400"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  className="text-sm text-white dark:text-coolGray-400"
                  href="/"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                onClick={() => signUpNewUser(userName, email, pass)}
                type="button"
                className="px-8 py-3 space-x-2 bg-green-400 text-black font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
              >
                Sign up
              </button>
              <p className="text-xs text-white text-center sm:px-6 dark:text-coolGray-400">
                Already have an account?
                <Link
                  to="/login"
                  className="underline text-green-400 dark:text-coolGray-100"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
