import { faArrowLeft, faCross, faCut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";

const ServiceDetails = () => {
  const { singleService,handleBackBtn } = useServices();
  const {name, image, des} = singleService;
  return (
    <div>
      <div>
        <section className="p-4 lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
          <div className="container mx-auto space-y-4">
            <div className="flex">
                <button onClick={handleBackBtn} className="self-start bg-green-300 px-4 py-2 rounded"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <div className="flex items-center justify-center flex-1 dark:bg-violet-400">
                <img
                  src={image}
                  alt=""
                  className="p-8 rounded-md dark:bg-coolGray-500"
                />
              </div>
              <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
                <span className="text-xs uppercase dark:text-coolGray-400">
                  We are ready to help you in
                </span>
                <h2 className="text-3xl font-bold text-blue-900">
                  {name}
                </h2>
                <p className="my-6 dark:text-coolGray-400">
                  {des}
                </p>
                <button type="button" className="self-center bg-green-300 px-4 py-2 font-bold rounded" id="login-btn">
                  Get Help Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
