import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import bannerImg from "../../images/banner/banner-img.png";
import Service from "../Service/Service";
import "./Home.css";
import icon1 from "../../images/icon/icons8-form-50.png";
import icon2 from "../../images/icon/icons8-pdf-50.png";
import icon3 from "../../images/icon/icons8-caduceus-50.png";
import icon4 from "../../images/icon/icons8-medical-doctor-50.png";
import patient1 from "../../images/patient/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import patient2 from "../../images/patient/julian-wan-WNoLnJo7tS8-unsplash.jpg";

const Home = () => {
  const { services } = useServices();
  return (
    <div>
      {/* banner-part */}
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:gap-24">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Best <span className="text-green-400">Medical</span> And
              <span className="text-green-400 text-gray-900 dark:text-violet-400">
                {" "}
                Health{" "}
              </span>
              Care Center
            </h1>
            <p className="mt-6 mb-8 text-gray-400 text-lg sm:mb-12">
              This Med-City is one of the best medical and health care
              <br className="hidden md:inline lg:hidden" /> center in your area.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/appointment"
                id="appointment-btn"
                className="px-8 py-3 text-lg bg-green-300 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
              >
                Appointment
              </Link>
              <Link
                to="/"
                id="service-btn"
                className="px-8 py-3 text-green-400 text-lg font-semibold border border-gray-400 rounded dark:border-coolGray-100"
              >
                Services
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={bannerImg}
              alt=""
              id="img"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500"
            />
          </div>
        </div>
      </section>
      {/* medical care part */}
      <section>
        <div className="bg-green-300 dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-8 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 lg:py-12 dark:text-coolGray-900">
            <p className="text-blue-900 mt-6 font-bold sm:mb-12 lg:my-2 xl:max-w-3xl dark:text-coolGray-900">
              Working Process
            </p>
            <p className="text-2xl my-2 font-bold leading-none sm:text-6xl lg:my-0 lg:text-4xl xl:max-w-3xl dark:text-coolGray-900">
              We Provide All Aspects Of Medical Practice
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                id="appointment-btn"
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded flex gap-3 dark:bg-coolGray-800 dark:text-coolGray-50"
              >
                Learn More{" "}
                <FontAwesomeIcon
                  className="mt-1"
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
        {/* single care item part */}
        <section className="py-6 w-5/6 mx-auto mb-12 -mt-20 rounded-lg lg:-mt-64 dark:bg-coolGray-800 dark:text-coolGray-50">
          <div className="container mx-auto p-4 sm:p-10">
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-4">
              <div className="care-item relative z-0 flex flex-col items-center p-8 border rounded-md bg-gray-800 text-white">
                <img src={icon1} alt="" />
                <p className="my-6 text-xl font-bold dark:text-violet-400">
                  Fill up form In Medical Application
                </p>
                <p className="text-gray-500 text-sm">
                  To get our service one have to fill up this medical
                  Application.This is how we can contact with them
                </p>
              </div>
              <div className="care-item relative z-0 flex flex-col items-center p-8 border rounded-md bg-gray-800 text-white">
                <img src={icon2} alt="" />
                <p className="my-6 text-xl font-bold dark:text-violet-400">
                  Review Family Medical History
                </p>
                <p className="text-gray-500 text-sm">
                  Any old patient can get his medical history at any time from
                  us.It can be get via online also
                </p>
              </div>
              <div className="care-item relative z-0 flex flex-col items-center p-8 border rounded-md bg-gray-800 text-white">
                <img src={icon3} alt="" />
                <p className="my-6 text-xl font-bold dark:text-violet-400">
                  Choose Between Care Programs
                </p>
                <p className="text-gray-500 text-sm">
                  There are so many daily care programs we are offering.Cause we
                  love to care our patients
                </p>
              </div>
              <div className="care-item relative z-0 flex flex-col items-center p-8 border rounded-md bg-gray-800 text-white">
                <img src={icon4} alt="" />
                <p className="my-6 text-xl font-bold dark:text-violet-400">
                  Introduce To Qualified Doctors
                </p>
                <p className="text-gray-500 text-sm">
                  World's best doctors are here to serve you with any of your
                  problems.Have a visit in our doctors section now.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* services-part */}
      <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
        <div className="container mx-auto p-4 sm:p-10">
          <div className="mb-16 space-y-4 text-center">
            <p className="px-4 sm:px-8 lg:px-24">What We Do</p>
            <h1 className="text-4xl font-semibold leading-tight">
              We Offer Different Services To{" "}
              <span className="text-green-400">Improve Your Health</span>
            </h1>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </section>
      {/* patients say part */}
      <section>
        <div>
          <div className="container flex flex-col items-center px-4 py-8 pb-24 mx-auto text-center  md:py-32 md:px-10 lg:px-32 lg:py-12 dark:text-coolGray-900">
            <p className="text-green-400 mt-6 font-bold sm:mb-12 lg:my-2 xl:max-w-3xl dark:text-coolGray-900">
            Our Testimonials
            </p>
            <p className="text-2xl my-2 font-bold leading-none sm:text-6xl lg:my-0 lg:text-4xl xl:max-w-3xl dark:text-coolGray-900">
              What Our Patients Say
            </p>
          </div>
        </div>
        <section className="py-6 w-5/6 mx-auto mb-12 -mt-20 rounded-lg dark:bg-coolGray-800 dark:text-coolGray-50">
          <div className="container mx-auto p-4 sm:p-10">
            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-2">
              <div className="patient relative z-0 flex flex-col items-center p-4">
                <div className="flex justify-between gap-4">
                  <img
                    className="w-16 h-16 ring-gray-500 rounded-full"
                    src={patient1}
                    alt=""
                  />
                  <p className="my-6 text-xl font-bold dark:text-violet-400">
                    M Hoagland
                  </p>
                </div>
                <p className="text-sm text-green-400">CEO Of Brandy</p>
                <p className="text-gray-500 text-sm mt-4">
                  I have got all the facilities a medical center should have and
                  the bill compromisation was unexpected. The best for me
                  undoubtedly.
                </p>
              </div>
              <div className="patient relative z-0 flex flex-col items-center p-10">
                <div className="flex justify-between gap-4">
                  <img
                    className="w-16 h-16 ring-gray-500 rounded-full"
                    src={patient2}
                    alt=""
                  />
                  <p className="my-6 text-xl font-bold dark:text-violet-400">
                    John Doey
                  </p>
                </div>
                <p className="text-sm text-green-400">College Professor</p>
                <p className="text-gray-500 text-sm mt-4">
                  The best for me undoubtedly. Many beautiful care services i
                  never expected. Beautifully served me as a patient.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
