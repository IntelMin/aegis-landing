// components/faq/Question.tsx
import React from "react";
import Image from "next/image";

interface QuestionProps {
  question: string;
  onClick: () => void;
  isOpen: boolean;
  className?: string;
  index: string;
}
//  ${isOpen ? 'bg-gray-300' : 'bg-gray-200'}

export const Question: React.FC<QuestionProps> = ({
  question,
  onClick,
  isOpen,
  className,
  index,
}) => {
  return (
    <div
      className={`flex justify-between items-center gap-x-2.5 p-4 cursor-pointer border-0 ${className}`}
      onClick={onClick}
    >
      <span>{`${index} .`}</span>
      <span className="font-normal text-2xl flex-1 color-[#FFF]">{question}</span>
      <div
        className={`transform transition duration-300 ease-in-out ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <Image
          src="../../arrow-down.svg"
          height={28}
          width={24}
          alt="Dropdown arrow"
        />
      </div>
    </div>
  );
};
