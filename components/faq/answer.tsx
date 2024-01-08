import React from "react";

interface AnswerProps {
  answer: string;
  refer: (element: HTMLElement | null) => void
}

export const Answer: React.FC<AnswerProps> = ({ answer, refer }) => {
  const words = answer.split(" ");
  return (
    <div className="text-[#71717A] text-[18px] px-4" ref={refer}>
      {words.map((word, index) => (
        <span key={index} className={word === "Aegis" ? "text-white" : ""}>
          {word}{" "}
        </span>
      ))}
    </div>
  );
};
