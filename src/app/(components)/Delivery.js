'use client';
import Image from 'next/image';
import logd from '../../../public/assets/image/delivery.gif';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Aos from 'aos';
import { useEffect } from 'react';

const Delivery = () => {
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
    <div className="container mx-auto md:py-8	 px-4 md:px-20 mt-11">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="w-full md:w-1/2 mb-8 md:mb-0" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight exprers">
            We’re Delivering Only
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight exprers">
            Exceptional Quality Work
          </h2>
        </div>

        <div className="w-full md:w-1/2" data-aos="down">
          <p
            className="text-italic font-semibold text-[26px] text-sm md:text-base text-justify leading-relaxed md:leading-[30px]"
            style={{ color: '#816F88' }}
          >
            At Wish Geeks, we combine creativity, technology, and strategy to
            deliver top-notch digital marketing services.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-5">
        <div className="w-full md:w-1/2 flex justify-start mb-6 md:mb-0">
          <Image
            src={logd}
            alt="Description of image"
            className="w-full md:w-2/3 h-auto object-cover"
            data-aos="fade-up"
          />
        </div>
        <div className="w-full md:w-1/2" data-aos="fade-down">
          <ul className="list-disc pl-5 text-sm md:text-base">
            <li className="mb-2 text-black font-medium text-[20px] mt-1 leading-[40px] tracking-tight">
              Customized website design and development tailored to your brand.
            </li>
            <li className="mb-2 text-black font-medium text-[20px] mt-1 leading-[40px] tracking-tight">
              Effective social media marketing to boost your online presence.
            </li>
            <li className="mb-2 text-black font-medium text-[20px] mt-1 leading-[40px] tracking-tight">
              Comprehensive SEO strategies to improve your search engine
              rankings.
            </li>
          </ul>
          <button
            type="button"
            className="mt-5 bg-transparent text-blue-900 font-bold py-3 text-[24px] flex items-center"
          >
            READ MORE
            <MdKeyboardDoubleArrowRight className="ml-2 text-[25px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
