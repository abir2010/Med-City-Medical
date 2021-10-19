import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import appointmentImg from "../../images/image/img1.png";

const Appointment = () => {
  return (
    <div>
      <div className="flex justify-center">
        <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
          <div className="container flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:gap-24">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <p className="text-blue-900 text-md mb-8 font-bold">
                Need A Doctor For Check-Up?
              </p>
              <h1 className="text-4xl font-bold leading-none sm:text-3xl lg:text-5xl">
                Just Make An <span className="text-green-400">Appointment</span>
              </h1>
              <p className="mt-6 text-gray-600 text-md font-bold sm:mb-12 lg:text-xl lg:mb-4">
                Get The Right Care Book With Your Doctors!
              </p>
              <p className="lg:mb-4 text-gray-600 text-sm lg:text-md sm:mb-12">
                To get our service make sure you have an appointment
                <br className="hidden md:inline lg:hidden" />
                .Thank You.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button
                  id="appointment-btn"
                  className="px-8 py-3 text-lg bg-green-300 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
                >
                  Get Appointment{" "}
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={appointmentImg}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center">
        <section className="p-6 dark:bg-coolGray-800 dark:text-coolGray-50">
          <form
            noValidate=""
            action=""
            className="container flex flex-col space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-800 text-white dark:bg-coolGray-900">
              <div className="text-left space-y-2 col-span-full lg:col-span-1">
                <p className="text-3xl mb-12 font-bold leading-none sm:text-4xl lg:text-3xl">
                  Get <span className="text-green-400">Appointment</span>
                </p>
                <img src="" alt="" />
                <p className="text-xl font-bold">Emergency Call</p>
                <p className="text-3xl text-green-400">+273-649300</p>
                <p className="w-1/3 font-bold">
                  <hr />
                </p>
                <p className="text-sm text-gray-400">
                  Anytime in any need of your health problems
                </p>
                <button
                  id="appointment-btn"
                  className="px-8 py-3 text-lg bg-green-300 font-semibold rounded text-black self-center dark:bg-violet-400 dark:text-coolGray-900"
                >
                  Submit
                </button>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    First name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="   First name"
                    className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="   Last name"
                    className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="   Email"
                    className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city" className="text-sm">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder=""
                    className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="state" className="text-sm">
                    State / Province
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder=""
                    className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="zip" className="text-sm">
                    ZIP / Postal
                  </label>
                  <input
                    id="zip"
                    type="text"
                    placeholder=""
                    className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Appointment;
