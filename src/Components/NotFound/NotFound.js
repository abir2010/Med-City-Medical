import React from "react";
import notFoundImg from "../../images/notfound/notfound.png";

const NotFound = () => {
  return (
    <div>
      <div
        className="w-full p-24 lg:py-48 dark:bg-gray-600"
        style={{
          backgroundImage: `url(${notFoundImg})`,
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        
      >
          <p className="text-5xl mb-20 lg:mb-48 lg:text-8xl"><span className="text-green-400 font-bold">404</span> <br/> Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
