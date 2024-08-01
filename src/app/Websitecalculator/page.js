"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
export default function Websitecalculator() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [SelectedNumber, setSelectedNumber] = useState([]);
  const [SelectedPage, setSelectedPage] = useState([]);
  const [SelectedRequirements, setSelectedRequirements] = useState([]);
  const [SelectedBrand, setSelectedBrand] = useState([]);
  const [SelectedCompleted, setSelectedCompleted] = useState([]);
  const [SelectedTechnology, setSelectedTechnology] = useState([]);

  const services = [
    "Blockchain Development",
    "SEO Optimization",
    "Software Development",
    "App Development",
    "Web Development",
    "Data Analysis",
    "Cyber Security",
  ];
  const types = ["Informative", "Dynamic", "E-commerce", "Corporate"];
  const number = ["1-4", "5-8", "9-20", "20-25", "Unlimited"];
  const requirements = [
    "Call Button",
    "Edit Pages",
    "Admin Panel",
    "Watsapp Chat",
    "Payment",
  ];
  const brand = ["Blue", "White", "Black", "Orange"];
  const technology = [
    "PHP",
    "HTML",
    "JAVA SCRIPT",
    " REACT",
    "FLUTTER",
    "DJANGO",
    "PYTHON",
    "NODE.JS",
  ];
  const completed = [
    "15 Days",
    "1 Month",
    "1-3 months",
    " 3-6 months",
    "Flexible",
  ];
  const page = [
    "Home",
    "About",
    "Contact",
    "Services",
    "Career",
    "Portfolio",
    "Enquiry",
    "Testimonials",
    "Faq’s",
    "Events",
    "Privacy Policy",
    "Refund Policy",
    "Complaint",
    "News",
    "Blog",
  ];

  const toggleService = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((item) => item !== service)
        : [...prevSelected, service]
    );
  };
  const toggleType = (type) => {
    setSelectedTypes((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((item) => item !== type)
        : [...prevSelected, type]
    );
  };
  const toggleNumber = (number) => {
    setSelectedNumber((prevSelected) =>
      prevSelected.includes(number)
        ? prevSelected.filter((item) => item !== number)
        : [...prevSelected, number]
    );
  };
  const togglePage = (page) => {
    setSelectedPage((prevSelected) =>
      prevSelected.includes(page)
        ? prevSelected.filter((item) => item !== page)
        : [...prevSelected, page]
    );
  };
  const toggleRequirements = (requirements) => {
    setSelectedRequirements((prevSelected) =>
      prevSelected.includes(requirements)
        ? prevSelected.filter((item) => item !== requirements)
        : [...prevSelected, requirements]
    );
  };
  const toggleBrand = (brand) => {
    setSelectedBrand((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((item) => item !== brand)
        : [...prevSelected, brand]
    );
  };
  const toggleCompleted = (completed) => {
    setSelectedCompleted((prevSelected) =>
      prevSelected.includes(completed)
        ? prevSelected.filter((item) => item !== completed)
        : [...prevSelected, completed]
    );
  };
  const toggleTechnology = (technology) => {
    setSelectedTechnology((prevSelected) =>
      prevSelected.includes(technology)
        ? prevSelected.filter((item) => item !== technology)
        : [...prevSelected, technology]
    );
  };

  return (
    <>
      <div className="relative">
        <div className="video-wrapper relative">
          <video
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay={true}
            muted
            loop
          >
            <source src="https://qawsedrftgyhujikl.s3.ap-south-1.amazonaws.com/18069166-uhd_3840_2160_24fps.mp4" />
          </video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <div className="container">
            <div className="row">
              <div className="min-h-[100px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6 wishgekshead">
                <h2 className="mb-6 font-bold	 text-xl	 md:text-6xl">
                  Website calculator
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Form Column */}
          <div className="col-span-12 sm:col-span-8">
            <form className="input-wrapper max-w-4xl  p-4">
              <div className="mt-5">
                <h2 className="text-2xl font-semi bold mb-6 ">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="relative ">
                    <label
                      htmlFor="firstName"
                      className="absolute top-1 left-3 z-10 bg-white px-1 "
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="border border-blue-300  rounded-lg p-2 mt-4 w-full"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="lastName"
                      className="absolute top-1 left-3 z-10 bg-white px-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="border border-blue-300  rounded-lg p-2 mt-4 w-full"
                      required
                    />
                  </div>
                </div>

                <div className="relative flex flex-col mt-5">
                  <label
                    htmlFor="email"
                    className="absolute top-1 left-3 z-10 bg-white px-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-blue-300  rounded-lg p-2 mt-4"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 mt-5">
                  <div className="relative">
                    <label
                      htmlFor="country"
                      className="absolute top-1 left-3 z-10 bg-white px-1"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      className="border border-blue-300  rounded-lg p-2 mt-4 w-full"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="mobileNumber"
                      className="absolute top-1 left-3 z-10 bg-white px-1"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      className="border border-blue-300 rounded-lg p-2 mt-4 w-full"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-5">
                  <button
                    type="submit"
                    className="border border-blue-300 rounded-lg text-black p-2 w-1/4 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-lg font-semibold mb-6">Multiple Select</p>

                <div className="container mx-auto ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service}
                        className={`border border-blue-300 rounded-lg p-2 flex items-center justify-center cursor-pointer ${
                          selectedServices.includes(service)
                            ? "bg-blue-500 text-white"
                            : "bg-white text-black"
                        }`}
                        onClick={() => toggleService(service)}
                      >
                        <p className="text-center text-sm font-medium">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className=" mt-5">
                  <p className="text-lg font-semibold mb-2">Web Development</p>
                  <p className="text-sm font-semibold mb-5">
                    Please Fill-up All Required Information
                  </p>

                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-xs md:text-lg font-semibold mb-3">
                      Select the type of your Website{" "}
                    </p>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {types.map((type) => (
                          <div
                            key={type}
                            className={`border border-blue-300 rounded-lg p-2 flex items-center justify-center cursor-pointer ${
                              selectedTypes.includes(type)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() => toggleType(type)}
                          >
                            <p className="text-center text-sm font-medium">
                              {type}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-lg font-semibold mb-3">
                      Number of Pages{" "}
                    </p>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {number.map((number) => (
                          <div
                            key={number}
                            className={`border border-blue-300 rounded-lg p-2 flex items-center justify-center cursor-pointer ${
                              SelectedNumber.includes(number)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() => toggleNumber(number)}
                          >
                            <p className="text-center text-sm font-medium">
                              {number}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-lg font-semibold mb-3">Pages Name </p>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {page.map((page) => (
                          <div
                            key={page}
                            className={`border border-blue-300 rounded-lg p-2 flex items-center justify-center cursor-pointer ${
                              SelectedPage.includes(page)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() => togglePage(page)}
                          >
                            <p className="text-center text-sm font-medium">
                              {page}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
                        <div className="border border-blue-300 rounded-lg text-black p-2 w-full	  rounded-md">
                          <p className="text-center text-sm font-medium">
                            Add More
                          </p>
                        </div>
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-lg font-semibold mb-3">
                      Special Requirements{" "}
                    </p>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                        {requirements.map((requirements) => (
                          <div
                            key={requirements}
                            className={`border border-blue-300 rounded-lg p-2 flex items-center justify-center cursor-pointer ${
                              SelectedRequirements.includes(requirements)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() => toggleRequirements(requirements)}
                          >
                            <p className="text-center text-sm font-medium">
                              {requirements}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
                        <div className="border border-blue-300 rounded-lg text-black p-2 w-full	  rounded-md">
                          <p className="text-center text-sm font-medium">
                            Add More
                          </p>
                        </div>
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto p-4 mt-5 border border-blue-300 rounded-lg">
                  <div className="flex flex-col sm:flex-row justify-between gap-8 ">
                    {/* Domain Section */}
                    <div className="flex-1">
                      <p className="font-semibold mb-2">Do you want Domain?</p>
                      <div className="flex gap-4">
                        <div className="border border-blue-300 rounded-lg text-black p-1 w-1/4 mt-3	">
                          <p className="text-center text-sm	 font-medium">Yes</p>
                        </div>
                        <div className="border border-blue-300 rounded-lg text-black p-1 w-1/4 mt-3	">
                          <p className="text-center text-sm font-medium">No</p>
                        </div>
                      </div>
                    </div>

                    {/* Hosting Section */}
                    <div className="flex-1">
                      <p className="font-semibold mb-2">Do you want Hosting?</p>
                      <div className="flex gap-4">
                        <div className="border border-blue-300 rounded-lg text-black p-1 w-1/4 mt-3	">
                          <p className="text-center text-sm font-medium">Yes</p>
                        </div>
                        <div className="border border-blue-300 rounded-lg text-black p-1 w-1/4 mt-3	">
                          <p className="text-center text-sm font-medium">No</p>
                        </div>
                      </div>
                    </div>

                    {/* Official Mail Section */}
                    <div className="flex-1">
                      <p className="font-semibold mb-2">
                        Do you want Official Mail?
                      </p>
                      <div className="flex gap-4">
                        <div className="border border-blue-300 rounded-lg text-black p-1 w-1/4 mt-3	">
                          <p className="text-center text-sm font-medium">Yes</p>
                        </div>
                        <div className="border border-blue-300 rounded-lg text-black p-1 w-1/4 mt-3	">
                          <p className="text-center text-sm font-medium">No</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
                    <div className="border border-blue-300 rounded-lg text-black p-2 w-full	  rounded-md">
                      <p className="text-center text-sm font-medium">
                        Add More{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-300 rounded-lg p-4 mt-5 flex flex-col">
                  <p className="text-lg font-semibold mb-2">Logo</p>
                  <p className="text-xm font-semibold text-gray-400">
                    Do you have a company logo that you would like to
                    incorporate into the website?
                  </p>
                  <div className="flex gap-4 mt-4">
                    <div className="border border-blue-300 rounded-lg text-black p-1 w-1/4 ">
                      <p className="text-center text-sm font-medium">Yes</p>
                    </div>
                    <div className="border border-blue-300 rounded-lg text-black p-1 w-1/4">
                      <p className="text-center text-sm font-medium">No</p>
                    </div>
                    <div className="border border-blue-300 rounded-lg text-black p-2 w-1/4 ml-auto">
                      <p className="text-center text-sm font-medium">
                        Upload your logo here
                      </p>
                      {/* <MdOutlineFileUpload /> */}
                    </div>
                  </div>
                  <div className="flex items-center mt-5">
                    <input
                      type="checkbox"
                      id="createLogo"
                      name="createLogo"
                      className="mr-2 h-4 w-4"
                    />
                    <label
                      htmlFor="createLogo"
                      className="text-sm font-semibold"
                    >
                      Do you want us to create a logo for you?
                    </label>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-lg font-semibold mb-3">Brand Colours</p>
                    <p className="text-xm font-semibold text-gray-400">
                      What colors would you like us to incorporate into the
                      design?
                    </p>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {brand.map((brand) => (
                          <div
                            key={brand}
                            className={`border border-blue-300 rounded-lg p-2 mt-5 flex items-center justify-center cursor-pointer ${
                              SelectedBrand.includes(brand)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() => toggleBrand(brand)}
                          >
                            <p className="text-center text-sm font-medium">
                              {brand}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
                        <div className="border border-blue-300 rounded-lg text-black p-2 w-full	  rounded-md">
                          <p className="text-center text-sm font-medium">
                            Add Hex Code
                          </p>
                        </div>
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-lg font-semibold mb-3">Technology </p>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {technology.map((technology) => (
                          <div
                            key={technology}
                            className={`border border-blue-300 rounded-lg p-2 flex items-center justify-center cursor-pointer ${
                              SelectedTechnology.includes(technology)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() => toggleTechnology(technology)}
                          >
                            <p className="text-center text-sm font-medium">
                              {technology}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-5">
                        <div className="border border-blue-300 rounded-lg text-black p-2 w-full	  rounded-md">
                          <p className="text-center text-sm font-medium">
                            Add More{" "}
                          </p>
                        </div>
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-xm font-semibold text-black">
                      When do you need the website to be completed?
                    </p>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {completed.map((item) => (
                          <div
                            key={item}
                            className={`border border-blue-300 rounded-lg p-2 mt-5 flex items-center justify-center cursor-pointer ${
                              SelectedCompleted.includes(item)
                                ? "bg-blue-500 text-white"
                                : "bg-white text-black"
                            }`}
                            onClick={() => toggleCompleted(item)}
                          >
                            <p className="text-center text-sm font-medium">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-xm font-semibold text-black">
                      What’s your Budget for this project?
                    </p>
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        <div className="border border-blue-300 rounded-lg p-2 mt-5 flex items-center justify-center cursor-pointer">
                          <p className="text-center text-sm font-medium">Add</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mt-5">
                  <div className="border border-blue-300 rounded-lg p-4 mt-5">
                    <p className="text-xm font-semibold text-black">
                      Extra Requirements
                    </p>
                    <div className="container mx-auto">
                      {" "}
                      <div className=" mt-5">
                        <textarea
                          className="w-9/12	 p-3 border border-blue-300 rounded-lg resize-none"
                          placeholder="Message..."
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Cart */}
          <div className="col-span-12 sm:col-span-4 ">
            <div className="sticky top-0 z-10 bg-white mt-5 rounded-lg p-3">
              <h2 className="text-2xl font-semibold mb-6 text-center mt-5">
                Your Cart
              </h2>
              <div className="border border-blue-300 rounded-lg">
                <div className="flex justify-between p-2">
                  <p className="text-sm font-medium">Informative</p>
                  <p className="text-sm font-medium">50000000</p>
                </div>
                <div className="w-full border-t border-blue-300 my-1"></div>
                <div className="flex justify-between p-2">
                  <p className="text-sm font-medium">1-4</p>
                  <p className="text-sm font-medium">00000000</p>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-lg font-semibold mb-2">Name Of Pages</p>
                <div className="border border-blue-300 rounded-lg">
                  <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-3">
                      <p className="text-sm font-medium">Informative</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-lg font-semibold mb-2">
                  Special Requirements
                </p>
                <div className="border border-blue-300 rounded-lg">
                  <div className="container mx-auto">
                    <div className="flex gap-5 p-3 overflow-x-auto">
                      <p className="text-sm font-medium whitespace-nowrap">
                        Call
                      </p>
                      <p className="text-sm font-medium whitespace-nowrap">
                        Action Button
                      </p>
                      <p className="text-sm font-medium whitespace-nowrap">
                        Admin Panel
                      </p>
                      <p className="text-sm font-medium whitespace-nowrap">
                        Payment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-lg font-semibold mb-2">Brand Color</p>
                <div className="border border-blue-300 rounded-lg">
                  <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-3">
                      <p className="text-sm font-medium">Blue</p>
                      <p className="text-sm font-medium">Black</p>
                      <p className="text-sm font-medium">White</p>
                      <p className="text-sm font-medium">Orange</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <div className="border border-blue-300 rounded-lg p-4 flex justify-between">
                  <p className="text-sm font-medium">Grand Total</p>
                  <p className="text-sm font-medium">15000</p>
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="border border-blue-300 rounded-lg text-black p-2 w-full rounded-md"
                >
                  Download Quotation and Pay Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
