'use client'
import React, { useState } from 'react';
import { Question } from './question';
import { Answer } from './answer';

const faqs = [
  {
    question: 'What is the Aegis Security Ecosystem about?',
    answer: 'Aegis Security Ecosystem is dedicated to revolutionizing security norms in the current decentralization era. In order to strengthen the whole blockchain ecosystem, we are committed to providing all-round security solutions to help traders and builders thrive. Our tools range from AI security tools to Telegram monitoring bots, on-chain and off-chain investigation tools, and security hardwares solutions.',
  },
  {
    question: 'How does Aegis Enhance Security of Smart Contracts?',
    answer: 'Aegis Dapp offers cutting-edge tools like AI built Code Auditor and Token/Smart Contract Auditor. To drastically reduce vulnerabilities and strengthen decentralized applications, we make use of cutting-edge technology, bug bounty programs for community-driven security, and decentralized AI for stringent audits.',
  },
  {
    question: 'What is the Aegis Browser Extension about?',
    answer: 'An effective method for safeguarding wallets from phishing, frauds, and harmful websites is the Aegis Browser Extension. It serves as a watchful guardian, guaranteeing safe surfing experiences and defending users against any dangers in the decentralized environment, by offering real-time protection.',
  },
  {
    question: 'How does Aegis contribute to secure trading?',
    answer: 'Aegis Trading Infrastructure AI improves trading experience. We offer assistance for decentralized exchanges, security guarantees for trading platforms. In a safe trading environment, we want to protect the integrity of transactions and provide traders the tools they need to make wise trading decisions.',
  },
  {
    question: 'What role does Aegis play in privacy and anonymity?',
    answer: 'Aegis places a high priority on user privacy and anonymity by utilizing decentralized AI, AegisOS, and onion routing. These technologies provide a reliable online environment where user data and communications are kept private and secret by ensuring safe, private, and anonymous transactions.',
  },
  {
    question: 'What is Aegis Telegram Bot and how does it work?',
    answer: 'Aegis Telegram Bot offers real-time threat monitoring, hack notifications, and social and token audits information. It alerts users to possible security risks so they may quickly take precautions to protect their digital assets. The bot is a useful resource for being current with the state of decentralized ecosystem security.',
  },
  {
    question: 'How does Aegis prioritize community involvement?',
    answer: 'Aegis adopts a security strategy that is focused on the community. Through our community forums, bug bounty programs, and cooperative projects, users, developers, and enthusiasts are actively involved in helping to create a decentralized ecosystem that is more secure. Come interact with like-minded people in our community and help shape the direction of decentralized security in the future.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
  
    console.log("Current index: ", index, "Current openIndex: ", openIndex);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center  item-center h-screen  mt-0 mb-0  mx-20">
      {/* <span className='flex text-[#3F3F46] text-6xl font-normal px-24'><p className='text-white font-semibold'>Aegis</p>Security Ecosystem<p className='text-white font-semibold'>F</p>requently<p  className='text-white font-semibold'>A</p>sked<p  className='text-white font-semibold'>Q</p>uestions</span> */}
      <div className='flex-cols text-[#3F3F46] text-6xl font-normal  justify-center item-center text-center w-full ml-[260px] space-y-4 mb-4'>
        <h1 className='flex space-x-3'><p className='text-white font-semibold'>Aegis</p>{" "}Security Ecosystem</h1>
        <h1 className='flex space-x-3'><p className='text-white font-semibold'>F</p>requently <p className='text-white font-semibold'>A</p>sked <p className='text-white font-semibold'>Q</p>uestions</h1>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 last:mb-0 bg-none border-b border-white" >
        <Question
          question={faq.question}
          isOpen={openIndex === index}
          onClick={() => toggleFAQ(index)}
          className="text-lg font-semibold  text-white" 
          index = {(index + 1).toString()}
        />
        {openIndex === index && (
          <Answer
            answer={faq.answer}
            className="text-gray-400" 
          />
        )}
      </div>
      
      ))}
    </div>
  );
};