import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = (props) => {
  const { id, name, image, des } = props.service;
  const history = useHistory();
  const handleDetails = (id) => {
    history.push(`/service/${id}`);
  }
  return (
    <div className="service-card relative flex flex-col items-center px-8 py-3 border-2 rounded-md dark:border-violet-400 dark:bg-coolGray-800">
      <p className="flex items-center justify-center my-6 space-x-2 font-bold">
        <span className="pb-2 text-blue-900 text-2xl">{name}</span>
      </p>
      <ul className="flex-1 space-y-2">
        <li className="flex items-center space-x-2">
          <img className="rounded" src={image} alt="" />
        </li>
      </ul>
      <p className="text-sm">{des}</p>
      <button
      onClick={()=>handleDetails(`${id}`)}
        id="details-btn"
        className="px-6 py-2 mt-12 text-md font-semibold uppercase rounded dark:bg-violet-400 dark:text-coolGray-900"
      >
        See Details
      </button>
    </div>
  );
};

export default Service;
