// components/TokenomicsItem.tsx
import React from 'react';
import Image from 'next/image';


const TokenomicsItem: React.FC = ({}) => {
  return (
    <div className={`flex flex-col items-center py-4 rounded-sm`}>
      <Image src='/Tokenomics.png' width={420} height={440} className='object-cover' alt='tokenomics'/>
    </div>
  );
};

export { TokenomicsItem };
