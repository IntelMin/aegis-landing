// components/faq/Answer.tsx
import React from 'react';

interface AnswerProps {
  answer: string;
  className?: string;
}

export const Answer: React.FC<AnswerProps> = ({ answer, className }) => {
  return <div className={`p-4 ${className || ''}`}>{answer}</div>;
};