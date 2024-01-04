'use client'
import React, { useState } from 'react';
import { Question } from './question';
import { Answer } from './answer';

const faqs = [
  {
    question: 'What is Aegis AI?',
    answer: 'As a project dev, Aegis AI helps you to launch your projects faster with 100% security with its AI unruggable deployer, token data visualization, smart contract marketplace, etc.',
  },
  {
    question: 'Why is smart contract auditing important?',
    answer: 'This toolkit empowers you with the tools to help you run smart contract audits with little or no knowledge of coding.',
  },
  {
    question: 'How does Aegis AI work?',
    answer: 'This toolkit empowers you with the tools to help you run smart contract audits with little or no knowledge of coding.',
  },
  {
    question: 'Do I need coding knowledge to use Aegis AI',
    answer: 'This toolkit empowers you with the tools to help you run smart contract audits with little or no knowledge of coding.',
  },
  {
    question: 'What kind of smart contracts can be audited using Aegis AI',
    answer: 'This toolkit empowers you with the tools to help you run smart contract audits with little or no knowledge of coding.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
  
    console.log("Current index: ", index, "Current openIndex: ", openIndex);
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center  item-center h-screen  mt-0 mb-0 mx-20">
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