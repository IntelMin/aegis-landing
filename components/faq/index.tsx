"use client";
import React, { useState } from "react";
import { Question } from "./question";
import { Answer } from "./answer";
import { faqs } from "./constant";
import { MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { isViewportValid } from "@/utils/mediaQuery";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, { height }] = useMeasure();

  const toggleFAQ = (index: number) => {
    console.log("Current index: ", index, "Current openIndex: ", openIndex);
    setOpenIndex(openIndex === index ? null : index);
  };
  const isMobile = isViewportValid(700);
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div className="flex flex-col items-center justify-center w-full min-h-screen pt-[100px] gap-8 text px-3 md:px-16 py-16" id="faq">
        <div className="flex flex-col text-[#3F3F46] text-[40px] md:text-6xl font-normal items-center justify-center item-center text-center w-full space-y-4 mb-4">
          <h1
            className={`${
              isMobile ? "text-white" : ""
            } flex text-center gap-4 font-semibold`}
          >
            <span className={!isMobile ? `text-white` : "text-[#3F3F46]"}>Aegis </span>{" "}
            {isMobile ? "FAQ" : "Security Ecosystem"}
          </h1>
          <div className="flex items-center gap-4 max-md:hidden">
            <h1 className="flex font-semibold">
              <span className="text-white">F</span>requently
            </h1>
            <h1 className="flex font-semibold">
              <span className="text-white">A</span>sked
            </h1>
            <h1 className="flex font-semibold">
              <span className="text-white">Q</span> uestions
            </h1>
          </div>
        </div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="pb-1 bg-none border-b border-[#18181B] w-full md:w-[70%]"
          >
            <Question
              question={faq.question}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              className="text-lg font-semibold  text-white"
              index={(index + 1).toString()}
            />
            <motion.div
              animate={openIndex === index ? { height } : { height: 0 }}
              className="overflow-hidden"
            >
              {openIndex === index && (
                <Answer answer={faq.answer} refer={ref} />
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </MotionConfig>
  );
};
