import Image from 'next/image';
import { line, line2, seoServicesGif, appServicesGif, softwareServicesGif, blockChainServicesGif, dataServicesGif, cyberSecServicesGif, uiUxServicesGif, app, appProcess1, appProcess2, appProcess3, appProcess4, appProcess5, appProcess6 } from '@/app/(fileImports)/constant';
// import seoProcess1 from '../../../../public/assets/image/services/seo/seo-process1.png';
import processArrow1 from '../../../../public/assets/image/services/process-arrow1.png';
import processArrow2 from '../../../../public/assets/image/services/process-arrow2.png';
import processArrow3 from '../../../../public/assets/image/services/process-arrow3.png';
import processArrow4 from '../../../../public/assets/image/services/process-arrow4.png';
import processArrowMobile from '../../../../public/assets/image/services/process-arrow-mobile.png';

export default function Service({ params }) {
  if (params.slug.length !== 1) {
    return <div>Invalid URL</div>;
  }

  const serviceData = getServiceData(params.slug[0]);

  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row  lg:px-24 items-center justify-center container mx-auto md:py-8 px-4 md:px-20 mt-11">
        <div className="w-full md:w-3/5">
          <h1 className="text-black font-bold text-3xl md:text-4xl mt-3 leading-tight tracking-tight">
            {serviceData.heading}
          </h1>
          <p className=" w-full md:w-4/5 text-medium text-black mt-5 text-sm md:text-lg text-justify">
            {serviceData.description}
          </p>

          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-xl font-semibold text-white my-5"
          >
            Contact Us
          </button>
        </div>
        <div className="w-full px-2 md:px-0 md:w-2/5">
          <Image
            src={serviceData.image}
            className="w-full h-auto"
            alt={serviceData.heading}
          />
        </div>
      </div>


      <div className=" inset-0 flex items-center justify-center text-center p-4">
        <div className="container">
          <div className="flex flex-col items-center">
            <h5 className="relative text-black  font-bold text-3xl md:text-4xl mt-3 leading-tight tracking-tight">
              Overview
            </h5>
          </div>
          <div className="flex justify-center   ">
            <div className="w-full sm:w-10/12 p-5">
              <p className="text-gray-600 font-medium text-sm md:text-base text-center leading-relaxed		">
                {serviceData.overview}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="mt-4	text-white text-base py-3 px-6 border border-white rounded-lg "
            style={{
              backgroundColor: '#0079AD',
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>

      <div className="our-process mt-6 mb-6 md:mb-[-450px]">
        <h5 className="text-center font-bold text-4xl">Our Process</h5>

        <div className="our-process-steps-container w-full px-[3%] md:max-w-[1300px] mx-auto md:px-[3%]">
          {serviceData.processSteps.map((step) => (
            <div key={step.id} className={step.stepClass}>
              <div className="w-full md:w-[45%] relative md:h-[315px]">
                <Image
                  src={step.arrowImage}
                  className={step.arrowClass}
                />
                {step.id === 6 ? (
                  <Image
                    src={processArrowMobile}
                    className="hidden"
                  />
                ) : (
                  <Image
                    src={processArrowMobile}
                    className={step.mobileArrowClass}
                  />
                )}
                {/* <Image src={seoProcess1} className="mx-auto" /> */}
                <div
                  className={`our-process-steps-heading-container flex items-start mt-4 ${step.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <h4 className="text-4xl md:text-5xl font-bold me-5 md:ms-6">
                    {step.number}
                  </h4>
                  <div>
                    <h5 className="text-2xl md:text-3xl font-extrabold">
                      {step.title}
                    </h5>
                    <p className="leading-8 md:leading-10 mt-3 font-semibold max-w-[420px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function getServiceData(slug) {
  const services = {
    'seo-optimisation': {
      image: seoServicesGif,
      heading: 'SEO Optimisation',
      description:
        'We offer comprehensive SEO services to boost your website’s search engine ranking, drive organic traffic, and enhance visibility.',
      overview: "Our SEO services are designed to optimize your website for search engines, ensuring maximum visibility and traffic. We employ advanced strategies including keyword optimization, content creation, link building, and technical SEO to improve your search engine rankings and attract more visitors. Whether you're looking to improve local SEO or target a global audience, our tailored solutions ensure measurable results and long-term success.",
      processSteps: [
        {
          id: 1,
          number: '01',
          title: 'Keyword Optimization',
          description:
            'We optimize your website content with targeted keywords to improve search engine rankings and attract relevant traffic.',
          arrowImage: processArrow1,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow1 bottom-[-15%] left-[-32%] absolute max-w-[120%] hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10',
        },
        {
          id: 2,
          number: '02',
          title: 'Content Creation',
          description:
            'We develop high-quality, relevant content that engages users and enhances your site’s authority and visibility.',
          arrowImage: processArrow2,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow2 bottom-[-10%] right-[-40%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-100px] md:right-7 relative',
        },
        {
          id: 3,
          number: '03',
          title: 'Link Building',
          description:
            'We build authoritative backlinks to increase your site’s credibility and improve its search engine ranking ranking ranking ranking.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow3 bottom-[-6%] left-[-43%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-220px] md:left-8 relative',
        },
        {
          id: 4,
          number: '04',
          title: 'Technical SEO',
          description:
            'We optimize your website’s technical aspects, including site speed, mobile-friendliness, and schema markup, to enhance its search engine visibility.',
          arrowImage: processArrow4,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow4 bottom-[-7%] right-[-49%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-350px] md:right-10 relative',
        },
        {
          id: 5,
          number: '05',
          title: 'Local SEO',
          description:
            'We optimize your website to attract more local customers by improving your visibility in local search results.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow5 bottom-[-5%] left-[-36%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-470px] md:left-10 relative',
        },
        {
          id: 6,
          number: '06',
          title: 'SEO Analytics & Reporting',
          description:
            'We provide comprehensive analytics and reporting to track your SEO performance and make data-driven decisions for continuous improvement.',

          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-600px] md:left-5 relative',
        },
      ],
    },
    'app-development': {
      image: appServicesGif,
      heading: 'App Development',
      description:
        'We offer comprehensive app development services to create custom solutions that meet your business needs and engage your audience effectively.',
      overview: "Our app development services focus on crafting user-friendly and innovative mobile applications that enhance user experience and drive business growth. From initial concept to final deployment, we ensure your app meets industry standards and exceeds user expectations. Whether you need a native iOS or Android app, or a cross-platform solution, our team leverages the latest technologies and agile methodologies to deliver robust and scalable applications. We prioritize intuitive design, seamless functionality, and rigorous testing to ensure your app performs flawlessly across devices.",
      processSteps: [
        {
          id: 1,
          number: '01',
          image: {appProcess1},
          title: 'Custom App Development',
          description:
            'We specialize in developing tailored mobile applications that address your specific business requirements and goals.',
          arrowImage: processArrow1,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow1 bottom-[-15%] left-[-32%] absolute max-w-[120%] hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10',
        },
        {
          id: 2,
          number: '02',
          image: {appProcess2},
          title: 'Native & Cross-Platform Apps',
          description:
            'We develop native iOS and Android apps as well as cross-platform solutions using frameworks like React Native and Flutter.',
          arrowImage: processArrow2,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow2 bottom-[-10%] right-[-40%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-100px] md:right-7 relative',
        },
        {
          id: 3,
          number: '03',
          image: {appProcess3},
          title: 'User Experience Design',
          description:
            'We prioritize intuitive and engaging user interfaces that enhance user satisfaction and drive app adoption.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow3 bottom-[-6%] left-[-43%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-220px] md:left-8 relative',
        },
        {
          id: 4,
          number: '04',
          image: {appProcess4},
          title: 'App Maintenance & Support',
          description:
            'We provide ongoing maintenance and support services to ensure your app remains secure, up-to-date, and optimized for performance.',
          arrowImage: processArrow4,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow4 bottom-[-7%] right-[-49%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-350px] md:right-10 relative',
        },
        {
          id: 5,
          number: '05',
          image: {appProcess5},
          title: 'Agile Development Approach',
          description:
            'We follow agile methodologies to deliver iterative app development, ensuring flexibility, transparency, and timely delivery of milestones.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow5 bottom-[-5%] left-[-36%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-470px] md:left-10 relative',
        },
        {
          id: 6,
          number: '06',
          image: {appProcess6},
          title: 'Quality Assurance & Testing',
          description:
            'We conduct rigorous testing throughout the development lifecycle to identify and resolve issues, ensuring a seamless user experience.',

          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-600px] md:left-5 relative',
        },
      ],
    },
    'software-development': {
      image: softwareServicesGif,
      heading: 'Software Development',
      description:
        'We offer comprehensive software development services to create custom solutions that streamline operations and drive business growth.',
      overview: "Our software development services focus on delivering scalable and innovative solutions tailored to your business needs. From concept to deployment, we leverage cutting-edge technologies and agile methodologies to ensure your software meets industry standards and exceeds expectations. Whether you need a web application, enterprise software, or mobile app, our team is equipped to handle complex projects and deliver robust solutions. We prioritize user-centric design, seamless integration, and rigorous testing to ensure optimal performance and user satisfaction.",
      processSteps: [
        {
          id: 1,
          number: '01',
          title: 'Custom Software Solutions',
          description:
            'We specialize in developing bespoke software solutions that address unique business challenges and goals.',
          arrowImage: processArrow1,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow1 bottom-[-15%] left-[-32%] absolute max-w-[120%] hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10',
        },
        {
          id: 2,
          number: '02',
          title: 'Web & Mobile Applications',
          description:
            'We develop responsive web applications and mobile apps using scalable architectures and modern frameworks.',
          arrowImage: processArrow2,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow2 bottom-[-10%] right-[-40%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-100px] md:right-7 relative',
        },
        {
          id: 3,
          number: '03',
          title: 'Agile Development Methodology',
          description:
            'We follow agile practices to deliver iterative development, ensuring flexibility, transparency, and timely delivery of milestones.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow3 bottom-[-6%] left-[-43%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-220px] md:left-8 relative',
        },
        {
          id: 4,
          number: '04',
          title: 'Software Integration',
          description:
            'We seamlessly integrate new software solutions with your existing systems to optimize operations and enhance efficiency.',
          arrowImage: processArrow4,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow4 bottom-[-7%] right-[-49%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-350px] md:right-10 relative',
        },
        {
          id: 5,
          number: '05',
          title: 'Quality Assurance & Testing',
          description:
            'We conduct comprehensive testing throughout the development lifecycle to identify and resolve issues, ensuring reliable performance and security.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow5 bottom-[-5%] left-[-36%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-470px] md:left-10 relative',
        },
        {
          id: 6,
          number: '06',
          title: 'Maintenance & Support',
          description:
            'We provide ongoing maintenance and support services to keep your software up-to-date, secure, and optimized for performance.',

          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-600px] md:left-5 relative',
        },
      ],
    },
    'block-chain-development': {
      image: blockChainServicesGif,
      heading: 'Block Chain Development',
      description:
        'We offer comprehensive blockchain development services to create secure, decentralized solutions that transform industries and drive innovation.',
      overview: "Our blockchain development services focus on leveraging distributed ledger technology to build transparent, secure, and scalable solutions. From smart contracts to decentralized applications (dApps), we specialize in developing custom blockchain solutions tailored to your business needs. Our expertise spans multiple blockchain platforms, including Ethereum, Hyperledger, and Corda, enabling us to deliver cutting-edge solutions that streamline processes and enhance trust. Whether you're exploring blockchain for finance, healthcare, supply chain, or beyond, our team ensures robust architecture, rigorous testing, and seamless integration for optimal performance and reliability.",
      processSteps: [
        {
          id: 1,
          number: '01',
          title: 'Custom Blockchain Solutions',
          description:
            'We design and develop bespoke blockchain solutions that address specific business challenges and drive innovation.',
          arrowImage: processArrow1,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow1 bottom-[-15%] left-[-32%] absolute max-w-[120%] hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10',
        },
        {
          id: 2,
          number: '02',
          title: 'Smart Contract Development',
          description:
            'We create secure and automated smart contracts to facilitate transactions and enforce business rules within blockchain networks.',
          arrowImage: processArrow2,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow2 bottom-[-10%] right-[-40%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-100px] md:right-7 relative',
        },
        {
          id: 3,
          number: '03',
          title: 'Decentralized Applications (dApps)',
          description:
            'We build decentralized applications (dApps) that leverage blockchain technology to provide transparency, security, and efficiency.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow3 bottom-[-6%] left-[-43%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-220px] md:left-8 relative',
        },
        {
          id: 4,
          number: '04',
          title: 'Blockchain Integration',
          description:
            'We integrate blockchain solutions with your existing systems or new applications to enhance security, transparency, and data integrity.',
          arrowImage: processArrow4,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow4 bottom-[-7%] right-[-49%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-350px] md:right-10 relative',
        },
        {
          id: 5,
          number: '05',
          title: 'Consulting & Advisory Services',
          description:
            'We provide strategic consulting and advisory services to help businesses explore and implement blockchain solutions effectively.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow5 bottom-[-5%] left-[-36%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-470px] md:left-10 relative',
        },
        {
          id: 6,
          number: '06',
          title: 'Blockchain Security & Auditing',
          description:
            'We conduct thorough security audits and implement best practices to ensure the security and reliability of your blockchain solutions.',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-600px] md:left-5 relative',
        },
      ],
    },
    'data-analysis': {
      image: dataServicesGif,
      heading: 'Data Analysis',
      description:
        'We offer comprehensive data analysis services to extract valuable insights and drive informed business decisions.',
      overview: "Our data analysis services focus on interpreting complex data sets to uncover patterns, trends, and correlations that provide actionable insights. We utilize advanced analytics tools and techniques to analyze structured and unstructured data, ensuring accuracy and reliability. From data cleaning and transformation to statistical analysis and predictive modeling, our team is equipped to handle diverse data challenges. Whether you're looking to optimize operations, enhance marketing strategies, or improve customer experiences, our data-driven approach delivers measurable results and strategic recommendations.",
      processSteps: [
        {
          id: 1,
          number: '01',
          title: 'Data Cleaning & Transformation',
          description:
            'We clean and transform raw data to ensure accuracy and prepare it for meaningful analysis and interpretation.',
          arrowImage: processArrow1,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow1 bottom-[-15%] left-[-32%] absolute max-w-[120%] hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10',
        },
        {
          id: 2,
          number: '02',
          title: 'Statistical Analysis',
          description:
            'We apply statistical methods and models to analyze data, identify trends, and derive insights that support decision-making.',
          arrowImage: processArrow2,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow2 bottom-[-10%] right-[-40%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-100px] md:right-7 relative',
        },
        {
          id: 3,
          number: '03',
          title: 'Predictive Modeling',
          description:
            'We develop predictive models to forecast future trends and outcomes based on historical data patterns and variables.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow3 bottom-[-6%] left-[-43%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-220px] md:left-8 relative',
        },
        {
          id: 4,
          number: '04',
          title: 'Business Intelligence Dashboards',
          description:
            'We design and implement customized dashboards to visualize data insights and facilitate data-driven decision-making.',
          arrowImage: processArrow4,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow4 bottom-[-7%] right-[-49%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-350px] md:right-10 relative',
        },
        {
          id: 5,
          number: '05',
          title: 'Performance Monitoring & Optimization',
          description:
            'We continuously monitor data metrics and optimize strategies to improve performance and achieve business objectives.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow5 bottom-[-5%] left-[-36%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-470px] md:left-10 relative',
        },
        {
          id: 6,
          number: '06',
          title: 'Data-driven Strategy & Consulting',
          description:
            'We provide strategic guidance and consulting services based on data analysis, helping businesses leverage insights for competitive advantage.',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-600px] md:left-5 relative',
        },
      ],
    },
    'cyber-security': {
      image: cyberSecServicesGif,
      heading: 'Cyber Security',
      description:
        'We offer comprehensive cyber security services to protect your business from evolving digital threats and ensure data integrity.',
      overview: "Our cyber security services focus on safeguarding your digital assets and mitigating risks through proactive measures and advanced security solutions. We provide tailored security assessments, threat detection, and incident response services to protect against cyber attacks and unauthorized access. From network security and endpoint protection to secure coding practices and compliance audits, our team implements industry best practices to fortify your defenses. Whether you're a small business or a large enterprise, we prioritize confidentiality, integrity, and availability of your critical information assets.",
      processSteps: [
        {
          id: 1,
          number: '01',
          title: 'Security Assessments & Audits',
          description:
            'We conduct thorough security assessments and audits to identify vulnerabilities and assess your overall security posture.',
          arrowImage: processArrow1,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow1 bottom-[-15%] left-[-32%] absolute max-w-[120%] hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10',
        },
        {
          id: 2,
          number: '02',
          title: 'Threat Detection & Incident Response',
          description:
            'We monitor for potential threats, detect suspicious activities, and respond swiftly to mitigate cyber security incidents.',
          arrowImage: processArrow2,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow2 bottom-[-10%] right-[-40%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-100px] md:right-7 relative',
        },
        {
          id: 3,
          number: '03',
          title: 'Network & Endpoint Security',
          description:
            'We implement robust network security measures and endpoint protection strategies to secure your digital infrastructure.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow3 bottom-[-6%] left-[-43%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-220px] md:left-8 relative',
        },
        {
          id: 4,
          number: '04',
          title: 'Compliance & Risk Management',
          description:
            'We ensure compliance with industry regulations and standards while managing risks effectively to protect your business.',
          arrowImage: processArrow4,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow4 bottom-[-7%] right-[-49%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-350px] md:right-10 relative',
        },
        {
          id: 5,
          number: '05',
          title: 'Security Awareness Training',
          description:
            'We educate your employees about cyber security best practices and raise awareness to prevent human errors and mitigate risks.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow5 bottom-[-5%] left-[-36%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-470px] md:left-10 relative',
        },
        {
          id: 6,
          number: '06',
          title: 'Continuous Monitoring & Updates',
          description:
            'We provide ongoing monitoring and updates to keep your defenses strong against evolving cyber threats and vulnerabilities.',

          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-600px] md:left-5 relative',
        },
      ],
    },
    'ui-ux-design': {
      image: uiUxServicesGif,
      heading: 'UI & UX Designing',
      description:
        'We offer comprehensive UI/UX design services to create intuitive and engaging digital experiences that delight users and drive business growth.',
      overview: "Our UI/UX design services focus on understanding user behavior and preferences to deliver seamless and intuitive interfaces. We blend creativity with usability principles to design user-centric solutions that enhance user satisfaction and achieve business objectives. From wireframing and prototyping to visual design and usability testing, we ensure every interaction reflects your brand identity and aligns with user expectations. Whether you're designing a website, mobile app, or enterprise software, our goal is to create compelling digital experiences that leave a lasting impression.",
      processSteps: [
        {
          id: 1,
          number: '01',
          title: 'User Research & Analysis',
          description:
            'We conduct in-depth user research to understand user needs, behaviors, and pain points, informing our design decisions.',
          arrowImage: processArrow1,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow1 bottom-[-15%] left-[-32%] absolute max-w-[120%] hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10',
        },
        {
          id: 2,
          number: '02',
          title: 'Wireframing & Prototyping',
          description:
            'We create wireframes and interactive prototypes to visualize user journeys and validate design concepts early in the development process.',
          arrowImage: processArrow2,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow2 bottom-[-10%] right-[-40%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-100px] md:right-7 relative',
        },
        {
          id: 3,
          number: '03',
          title: 'Visual Design & Branding',
          description:
            'We design visually appealing interfaces that reflect your brand identity, using colors, typography, and imagery to create cohesive experiences.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow3 bottom-[-6%] left-[-43%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-220px] md:left-8 relative',
        },
        {
          id: 4,
          number: '04',
          title: 'Usability Testing & Optimization',
          description:
            'We conduct usability testing sessions to gather feedback and iterate on designs, ensuring intuitive navigation and optimal user experience.',
          arrowImage: processArrow4,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow4 bottom-[-7%] right-[-49%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-350px] md:right-10 relative',
        },
        {
          id: 5,
          number: '05',
          title: 'Responsive & Adaptive Design',
          description:
            'We ensure your designs are responsive and adaptive, providing seamless experiences across devices and screen sizes.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow5 bottom-[-5%] left-[-36%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-470px] md:left-10 relative',
        },
        {
          id: 6,
          number: '06',
          title: 'Accessibility & Inclusive Design',
          description:
            'We incorporate accessibility principles to ensure your digital products are usable by all users, including those with disabilities.',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-600px] md:left-5 relative',
        },
      ],
    },
    'cloud-computing': {
      image: seoServicesGif,
      heading: 'Cloud Computing',
      description:
        'We provide cloud computing services to enhance your business operations.',
      processSteps: [
        {
          id: 1,
          number: '01',
          title: 'Keyword Optimization',
          description:
            'We optimize your website content with targeted keywords to improve search engine rankings and attract relevant traffic.',
          arrowImage: processArrow1,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow1 bottom-[-15%] left-[-32%] absolute max-w-[120%] hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10',
        },
        {
          id: 2,
          number: '02',
          title: 'Content Creation',
          description:
            'We develop high-quality, relevant content that engages users and enhances your site’s authority and visibility.',
          arrowImage: processArrow2,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow2 bottom-[-10%] right-[-40%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-100px] md:right-7 relative',
        },
        {
          id: 3,
          number: '03',
          title: 'Link Building',
          description:
            'We build authoritative backlinks to increase your site’s credibility and improve its search engine ranking ranking ranking ranking.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow3 bottom-[-6%] left-[-43%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-220px] md:left-8 relative',
        },
        {
          id: 4,
          number: '04',
          title: 'Technical SEO',
          description:
            'We optimize your website’s technical aspects, including site speed, mobile-friendliness, and schema markup, to enhance its search engine visibility.',
          arrowImage: processArrow4,
          alignment: 'justify-start',
          arrowClass:
            'process-arrow4 bottom-[-7%] right-[-49%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] block md:hidden right-0 top-[154px] absolute scale-x-[-1]',
          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-350px] md:right-10 relative',
        },
        {
          id: 5,
          number: '05',
          title: 'Local SEO',
          description:
            'We optimize your website to attract more local customers by improving your visibility in local search results.',
          arrowImage: processArrow3,
          alignment: 'justify-end',
          arrowClass:
            'process-arrow5 bottom-[-5%] left-[-36%] absolute hidden md:block',
          mobileArrowClass:
            'h-[100%] my-auto block md:hidden left-0 top-[154px] absolute',
          stepClass:
            'our-process-steps flex items-center justify-end mt-20 md:mt-10 md:top-[-470px] md:left-10 relative',
        },
        {
          id: 6,
          number: '06',
          title: 'SEO Analytics & Reporting',
          description:
            'We provide comprehensive analytics and reporting to track your SEO performance and make data-driven decisions for continuous improvement.',

          stepClass:
            'our-process-steps flex items-center justify-start mt-20 md:mt-10 md:top-[-600px] md:left-5 relative',
        },
      ],
    },
  };

  return services[slug] || services.seo;
}
