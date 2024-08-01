import Image from 'next/image';
import wish from '../../../public/assets/image/wish.png';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import {
  faceBookFooter,
  instagramFooter,
  linkedinFooter,
} from '../(fileImports)/constant';
import CountriesTFN from './CountriesTFN';

const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Services', url: '/services' },
  { name: 'Terms of Service', url: '/terms' },
  { name: 'Privacy Policy', url: '/privacy' },
];

const services = [
  { name: 'SEO Optimization', url: '/service/seo-optimisation' },
  { name: 'App Development', url: '/service/app-development' },
  { name: 'Software Development', url: '/service/software-development' },
  { name: 'Block Chain Development', url: '/service/block-chain-development', },
  { name: 'Data Analysis', url: '/service/data-analysis' },
  { name: 'Cyber Security', url: '/service/cyber-security' },
  { name: 'UI & UX Designing', url: '/service/ui-ux-design' },
];

const Footer = () => {
  return (
    <footer className="text-black py-9 lg:py-16 relative bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-y-12 md:gap-y-0 md:ml-14 lg:ml-20 md:mr-0 pb-12">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-2xl mb-8 font-semibold uppercase">
              <Link href="/">
                <Image
                  src={wish}
                  alt="Wish Geeks Logo"
                  width={192}
                  height={75}
                  className="w-48"
                />
              </Link>
            </h3>

            <h4 className="text-lg font-bold">HEADQUATERED IN:</h4>
            <p className="text-base font-inter">
              12A02 Tower C 13th Floor Iconic Corenthum <br />
              Sector-62, Noida, Uttar Pradesh
              <br />
              India, 201301
              <br />
              <br />
              <strong>Phone:</strong>
              <Link href="tel:01204122558">
                <span>+91</span>
                <span className="text-black-600 underline ml-1">
                  01204122558
                </span>
              </Link>{' '}
              <br />
              <strong className=''>Email:</strong>
              <Link href="mailto:info@wishgeekstechserve.com">
                <span className="text-black-600 ml-1">
                  info@wishgeekstechserve.com
                </span>
              </Link>
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3">
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="list-disc list-inside">
              {links.map((link) => (
                <li key={link.name} className="py-2 flex items-center">
                  <Link href={link.url}>
                    <span className="text-gray-800 underline">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/3">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="list-disc list-inside">
              {services.map((service) => (
                <li key={service.name} className="py-2 flex items-center">
                  <Link href={service.url}>
                    <span className="text-gray-800 underline">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <CountriesTFN />
      <div className="absolute top-1/2 md:top-1/3 flex flex-col gap-y-2 transform -translate-y-1/2">
        <Link href="https://www.facebook.com/people/Wish-Geeks-Techserve/61561598433636/">
          <Image
            src={faceBookFooter}
            alt="facebook icon"
            className="w-14 h-auto"
          />
        </Link>
        <Link href="https://www.instagram.com/wishgeekstechserve/?igsh=cWl4cGlxeTltZng0">
          <Image
            src={instagramFooter}
            alt="instagram icon"
            className="w-14 h-auto"
          />
        </Link>
        <Link href="https://www.linkedin.com/company/wishgeekstechserve/?originalSubdomain=in">
          <Image
            src={linkedinFooter}
            alt="linkedin icon"
            className="w-14 h-auto"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
