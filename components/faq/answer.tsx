// components/faq/Answer.tsx
import React from "react";

interface AnswerProps {
  answer: string;
}

export const Answer: React.FC<AnswerProps> = ({ answer }) => {
  const words = answer.split(" ");
  return (
    <div className="text-[#71717A] text-[18px] px-4">
      {words.map((word, index) => (
        <span key={index} className={index === 0 ? "text-white" : ""}>
          {word}{" "}
        </span>
      ))}
    </div>
  );
};
