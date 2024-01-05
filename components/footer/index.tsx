import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

export const FooterSection = () => {
  const socialLinks = [
    { url: 'https://instagram.com', label: 'Instagram' },
    { url: 'https://twitter.com', label: 'Twitter' },
    { url: 'https://tiktok.com', label: 'TikTok' },
    { url: 'https://linkedin.com', label: 'LinkedIn' },
    { url: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-footer text-white px-20 pt-4 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-start text-start gap-4">
          <h2 className="text-2xl font-bold mb-4"></h2>
           <Image src='/ageislogo.png' className='' width={179} height={46} alt='ageislogo'/>
          <nav className="flex flex-wrap justify-center gap-2 mb-4 lg:justify-start space-x-4 mx-2">
            <a href="#" className="text-sm hover:underline">HOME</a>
            <a href="#" className="text-sm hover:underline">GAMES</a>
            <a href="#" className="text-sm hover:underline">BLOG</a>
            <a href="#" className="text-sm hover:underline">PRESS</a>
            <a href="#" className="text-sm hover:underline">CAREERS</a>
            <a href="#" className="text-sm hover:underline">CONTACT US</a>
          </nav>
          <div className="flex justify-center gap-4 mb-4  ">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} url={social.url} className='rounded-full shadow-white ring-50' fgColor="#FFFFFF" bgColor="transparent" />
            ))}
          </div>
          <hr className="w-full border-t border-[#FFFFFF1A] py-4" />
          <div className="flex justify-between items-center w-full">
          <div className="text-xs">
            <span>Example@example.com</span>
            <span className="mx-2">|</span>
            <span>World wide</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <span className='text-white opacity-[0.3]'>Privacy Policy</span>
            <span>|</span>
            <span className='text-white opacity-[0.3]'>Terms & Service</span>
            <span>|</span>
            <span className='text-white opacity-[0.3]'>©2024 Enver Studio - All Rights Reserved</span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};
