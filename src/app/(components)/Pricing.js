'use client';
import Image from 'next/image';
import data from '../../../public/assets/data';
import { useEffect } from 'react';
import Aos from 'aos';

const Pricing = () => {
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
    <div className="container mx-auto mt-5 px-4 md:px-20 md:py-8">
      <div className="flex flex-col items-start py-5">
        <h5 className="relative text-black font-bold text-3xl md:text-4xl mt-3 leading-tight tracking-tight">
          <span className="absolute top-0 left-0 w-[65px] h-1 bg-blue-500"></span>
          <span className="block mt-4"> PRICING</span>
        </h5>
        <p className="text-black font-medium text-sm md:text-xl mt-3 w-full">
          Choose a plan that suits your needs. Our pricing is competitive and
          designed to scale with your business.
        </p>
      </div>
      <div className="container mx-auto pricing mt-7">
        <div className="flex flex-wrap">
          {data.pricing.map((item) => (
            <div key={item.id} className="w-full sm:w-1/3 p-4">
              <div className="box featured relative flex flex-col h-full justify-between bg-white p-4 shadow-custom rounded-md"
              data-aos="flip-right">
                <div className="flex justify-center items-center mb-3">
                  <Image
                    src={item.image}
                    className="h-auto max-w-[150px]"
                    alt={item.title}
                  />
                </div>
                <div className="text-center">
                  <span className="text-blue-600 font-bold text-[28px]">
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span className="block font-bold text-blue-600 text-[15px]">
                      {item.subtitle}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <ul className="list-disc pl-5 text-sm md:text-base mt-3">
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        className="mb-1 text-black font-normal text-[14px] text-start tracking-tight"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {item.note && (
                    <span className="block text-black text-center tracking-tight font-normal text-[14px] mt-3">
                      {item.note}
                    </span>
                  )}
                </div>
                <h3 className="text-center mt-3 font-bold text-[24px]">
                  {item.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
