'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// Mobile technologies
import android from '../../../public/assets/image/technologies/android.png';
import flutter from '../../../public/assets/image/technologies/flutter.png';
import xamarin from '../../../public/assets/image/technologies/xamarin.png';
import kotlin from '../../../public/assets/image/technologies/kotlin.png';
import react from '../../../public/assets/image/technologies/react.png';
import swift from '../../../public/assets/image/technologies/swift.png';
import objectiveC from '../../../public/assets/image/technologies/objective-c.png';

// Frontend technologies
import typescript from '../../../public/assets/image/technologies/typescript.png';
import css from '../../../public/assets/image/technologies/css.png';
import angular from '../../../public/assets/image/technologies/angular.png';
import javascript from '../../../public/assets/image/technologies/javascript.png';
import html from '../../../public/assets/image/technologies/html.png';
import vue from '../../../public/assets/image/technologies/vue.png';

// Backend technologies
import php from '../../../public/assets/image/technologies/php.png';
import java from '../../../public/assets/image/technologies/java.png';
import dotnet from '../../../public/assets/image/technologies/dotnet.png';
import chash from '../../../public/assets/image/technologies/chash.png';
import scala from '../../../public/assets/image/technologies/scala.png';
import nodejs from '../../../public/assets/image/technologies/nodejs.png';
import python from '../../../public/assets/image/technologies/python.png';

// Other technologies
import jenkins from '../../../public/assets/image/technologies/jenkins.png';
import magento from '../../../public/assets/image/technologies/magento.png';
import docker from '../../../public/assets/image/technologies/docker.png';
import rubyOnRails from '../../../public/assets/image/technologies/rubyOnRails.png';
import goLang from '../../../public/assets/image/technologies/goLang.png';
import kubernetes from '../../../public/assets/image/technologies/kubernetes.png';
import wordpress from '../../../public/assets/image/technologies/wordpress.png';

// Importing technologies
const technologies = {
  mobile: [
    { src: flutter, alt: 'Flutter' },
    { src: xamarin, alt: 'Xamarin' },
    { src: react, alt: 'React Native' },
    { src: swift, alt: 'Swift' },
    { src: kotlin, alt: 'Kotlin' },
    { src: android, alt: 'Android' },
    { src: objectiveC, alt: 'Objective-C' },
  ],
  frontend: [
    { src: typescript, alt: 'TypeScript' },
    { src: css, alt: 'CSS' },
    { src: react, alt: 'React' },
    { src: angular, alt: 'Angular' },
    { src: javascript, alt: 'JavaScript' },
    { src: html, alt: 'HTML' },
    { src: vue, alt: 'Vue' },
  ],
  backend: [
    { src: php, alt: 'PHP' },
    { src: java, alt: 'Java' },
    { src: dotnet, alt: '.NET' },
    { src: chash, alt: 'C#' },
    { src: scala, alt: 'Scala' },
    { src: nodejs, alt: 'Node.js' },
    { src: python, alt: 'Python' },
  ],
  other: [
    { src: jenkins, alt: 'Jenkins' },
    { src: magento, alt: 'Magento' },
    { src: docker, alt: 'Docker' },
    { src: rubyOnRails, alt: 'Ruby on Rails' },
    { src: goLang, alt: 'GoLang' },
    { src: kubernetes, alt: 'Kubernetes' },
    { src: wordpress, alt: 'WordPress' },
  ]
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  useEffect(() => {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
      Object.assign(swiperEl, {
        breakpoints: {
          100: { slidesPerView: 3, spaceBetween: 20 },
          640: { slidesPerView: 4, spaceBetween: 20 },
          768: { slidesPerView: 5, spaceBetween: 40 },
          1024: { slidesPerView: 6, spaceBetween: 50 },
        },
      });
      swiperEl.initialize();
    }
  }, [activeTab]);

  const renderContent = (category) => (
    <div>
      <swiper-container loop="true" space-between="30" speed="300" autoplay-delay="1000" autoplay-disable-on-interaction="false">
        {technologies[category].map((tech, index) => (
          <swiper-slide key={index}><Image src={tech.src} alt={tech.alt} /></swiper-slide>
        ))}
      </swiper-container>
    </div>
  );

  return (
    <div className='technologies-section'>
      <div className="tabs">
        <div className='tabs-section-mobile'>
          <button className={`${activeTab === 'mobile' ? 'active' : ''} left-end-btn`} onClick={() => setActiveTab('mobile')}>Mobile Technologies</button>
          <button className={activeTab === 'frontend' ? 'active' : ''} onClick={() => setActiveTab('frontend')}>Front-End Technologies</button>
        </div>
        <div className='tabs-section-mobile'>
          <button className={activeTab === 'backend' ? 'active' : ''} onClick={() => setActiveTab('backend')}>Back-End Technologies</button>
          <button className={`${activeTab === 'other' ? 'active' : ''} right-end-btn` } onClick={() => setActiveTab('other')}>Other Technologies</button>
        </div>
      </div>
      <div className="content">
        {renderContent(activeTab)}
      </div>
    </div>
  );
};

export default Technologies;
