import logo from '../assets/image/work/logo.png';
import combo from '../assets/image/work/combo.png';
import combo2 from '../assets/image/work/combo2.png';
import website from '../assets/image/work/website.png';
import arrow from '../assets/image/about/arrow.png';
import cannon from '../assets/image/about/cannon.png';
import image1 from '../assets/image/portflio/image1.png';
import image2 from '../assets/image/portflio/image2.png';
import image3 from '../assets/image/portflio/image3.png';
import image4 from '../assets/image/portflio/image4.png';
import image5 from '../assets/image/portflio/image5.png';
import image6 from '../assets/image/portflio/image6.png';

// import seoProcess1 from '../../../public/assets/image/services/seo/seo-process1.png';
// import seoProcess2 from '../../../public/assets/image/services/seo/seo-process2.png';
// import seoProcess3 from '../../../public/assets/image/services/seo/seo-process3.png';
// import seoProcess4 from '../../../public/assets/image/services/seo/seo-process4.png';

const data = {
  faq: [
    {
      question: 'What services do you offer?',
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: 'What is the importance of IT product development?',
      answer:
        'User-friendly and attractive applications keep bringing back users to your products and services. They are instrumental in enhancing customer service, increasing sales, and product visibility.',
    },
    {
      question:
        'Do you provide ownership of codes while outsourcing an IT product development service?',
      answer:
        'Yes, we provide full ownership of the codes to the client after development. We also offer annual maintenance plans for clients who require ongoing support, including software updates, performance monitoring, and 24/7 technical support.',
    },
    {
      question: 'What makes your company stand out from your competitors?',
      answer:
        'Our company differentiates itself from its competitors through its approach to brainstorming and problem-solving, which involves a free-flowing and creative process that involves input from all team members. We also pride ourselves on our cordial relationships and collaborative approach with our clients, ensuring that we build a positive rapport that leads to successful collaborations.',
    },
    {
      question: 'How do you optimize a website for search engines?',
      answer:
        'We optimize a website for search engines by conducting keyword research, creating high-quality and relevant content, building high-quality backlinks, and ensuring that the website is mobile-friendly and has a fast loading speed.',
    },
    {
      question:
        'How do you track the effectiveness of your digital marketing efforts?',
      answer:
        'We track various digital marketing metrics such as website traffic, conversion rates, engagement on social media, lead generation, KPIs, return on investment, and customer satisfaction levels. This helps us to monitor the effectiveness of our marketing efforts and identify areas for improvement.',
    },
  ],
  features: [
    {
      id: 1,
      text: 'Custom Website Development',
    },
    {
      id: 2,
      text: 'Innovative Design Solutions',
    },
    {
      id: 3,
      text: 'Robust Security Measures',
    },
    {
      id: 4,
      text: 'Comprehensive SEO Services',
    },
  ],
  projects: [
    {
      id: 1,
      image: image1,
      title: 'Printing Solution',
      description: 'Digital Marketing Services',
      url: 'https://printingsolution.us/',
    },
    {
      id: 2,
      image: image2,
      title: 'Printing Work',
      description: 'Digital Marketing Services',
      url: 'https://printingswork.com/',
    },
    {
      id: 3,
      image: image3,
      title: 'Click Install Setup',
      description: 'Digital Marketing Services',
      url: 'https://clickinstallsetup.com/',
    },
    {
      id: 4,
      image: image4,
      title: 'HN Concept',
      description: 'Digital Marketing',
      url: 'https://hnconcepts.com/',
    },
    {
      id: 5,
      image: image5,
      title: 'ZoomWebmediallc',
      description: 'Digital Marketing Service',
      url: 'https://zoomwebmediallc.com/',
    },
    {
      id: 6,
      image: image6,
      title: 'Printing Blog',
      description: 'We Have The Best Offer For You',
      url: 'https://printersblogs.com/',
    },
  ],

  pricing: [
    {
      id: 1,
      image: logo,
      title: 'Logo',
      price: '₹499 / onwards',
      features: [
        '1 Creative concept design',
        '100% Copyright',
        'Various color combinations',
        'Design revisions',
        'Phone consultation with branding experts',
      ],
    },
    {
      id: 2,
      image: combo,
      title: 'Combo',
      price: '₹999 / onwards',
      features: [
        'Unlimited Creative Concept Design',
        'All are made from scratch level',
        '100% Copyright free',
        'Various color combinations',
        'Design revisions',
        'Phone consultation with branding expert',
      ],
    },
    {
      id: 3,
      image: website,
      title: 'Website Design',
      price: '₹1999 / onwards',
      features: ['Single page website excluding domain hosting'],
    },
    {
      id: 4,
      image: combo2,
      title: 'Combo',
      subtitle:
        '(Logo + LetterHead + Stamp + Visiting Card + Qr Code + Social Media Kit)',
      price: '₹1899 / onwards',
      features: [
        'Unlimited Creative Concept Design',
        'All are made from scratch level',
        '100% Copyright free',
        'Various color combinations',
        'Design revisions',
        'Phone consultation with branding expert',
      ],
    },
    {
      id: 5,
      image: website,
      title: 'Website',
      price: '₹3999 / month',
      features: [
        'Website Development (5 - 6 Pages)',
        'Company email IDs - 10',
        'Home page',
        'About us page',
        'Contact us page',
        'Product/Service pages',
        'Contact form integration',
        'WhatsApp chat integration',
      ],
      note: 'Excluding domain hosting integration with 6 months maintenance and support',
    },
  ],
  mission: [
    {
      id: 1,
      type: 'section',
      title: 'OUR MISSION',
      description: `Wish Geeks' mission is to help businesses in redefining their
                    excellence and values. We have set out foot in the path of
                    visibility, paving ways from local limitations towards the
                    world-wide presence.`,
      additional: `Ensuring that they do not go unnoticed. Promising a milestone
                    towards their achievement. Here to make a difference. Here to
                    make every click count.`,
      image: arrow,
    },
    {
      id: 2,
      type: 'section',
      title: 'OUR VISION',
      description: `Wish Geeks' vision is to redefine service excellence. We have a
                    promise, made to our self and to our members, to make their
                    online presence visible. And we ensure that every promise we
                    make is a guarantee of exceptional care, dedicated to bring
                    happiness and satisfaction to all our members.`,
      additional: `It is our vision to bring the best and hassle free service for
                    you. We are determined to provide the best at the most pocket
                    friendly prices.`,
      image: cannon,
    },
  ],
};

export default data;