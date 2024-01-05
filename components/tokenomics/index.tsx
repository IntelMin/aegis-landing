'use client'
import React, { useState, useRef, useEffect } from 'react';
import TokenomicsItem from './tokenomicsItem';


export const TokenomicsSection = () => {
  const [centeredIndex, setCenteredIndex] = useState(0);
  const refContainer = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-black text-white p-8 overflow-y-auto h-screen" ref={refContainer}>
      <h2 className="text-4xl font-bold text-center mb-8">Tokenomics</h2>
      <div className="flex flex-col items-center space-y-4">
          <TokenomicsItem/>
      </div>
    </div>
  );
};
