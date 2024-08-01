'use client';
import Image from 'next/image';
import logd from '../../../public/assets/image/features.gif'; // Fixed the typo from 'assests' to 'assets'
import { TiTick } from 'react-icons/ti';
import data from '../../../public/assets/data';
import Aos from 'aos';
import { useEffect } from 'react';

const Feature = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 20,
      delay: 50,
      easing: 'ease-in-out',
      mirror: false,
      once: false,
      anchorPlacement: 'top',
    });
  }, []);
  return (
    <div className="container mx-auto mt-5 px-4 md:px-20  md:py-8	">
      <div className="flex flex-col items-start py-5">
        <h5 className="relative text-black font-bold text-3xl md:text-4xl mt-3 leading-tight tracking-tight">
          <span className="absolute top-0 left-0 w-[65px] h-1 bg-blue-500"></span>
          <span className="block mt-4">FEATURES</span>
        </h5>

        <p className="text-black font-medium text-sm md:text-xl mt-3 w-full">
          Discover the key features that set Wish Geeks apart. Our comprehensive
          digital marketing solutions are designed to meet your business needs
          and drive success.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/4"
          data-aos="fade-up"
        >
          {data.features.map((feature) => (
            <div
              key={feature.id}
              className="p-4 flex items-center rounded-full shadow-lg	"
              style={{
                backgroundColor: '#FAFAFA',
              }}
            >
              <div className="titick text-white p-2 rounded-full flex items-center justify-center">
                <TiTick className="text-[20px]" />
              </div>
              <span className="mx-4 text-black font-medium text-sm md:text-lg">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src={logd}
            alt="Feature Image"
            className="w-full	px-4 md:px-20 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
