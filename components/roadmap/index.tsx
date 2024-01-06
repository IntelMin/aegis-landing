import Image from 'next/image'
import React from 'react'
import Stepper from "awesome-react-stepper";

export const Roadmap = () => {
    const partners = [
        {
            name: "Zignaly",
            url: "https://www.binance.com/en/images/url.svg",
            logo: "/Partners/image 14.png"
        },
        {
            name: "OptimusAI",
            url: "https://www.binance.com/en/images/logo.svg",
            logo: "/Partners/image 14 (1).png"
        },
        {
            name: "Michael Terpin",
            url: "https://www.binance.com/en/images/url.svg",
            logo: "/Partners/image 17.png"
        },
        {
            name: "ChartAI",
            url: "https://www.binance.com/en/images/logo.svg",
            logo: "/Partners/image 17-1.png"
        },
        {
            name: "VaultTech",
            url: "https://www.binance.com/en/images/url.svg",
            logo: "/Partners/image 17-2.png"
        },
        {
            name: "Sentiment AI",
            url: "https://www.binance.com/en/images/logo.svg",
            logo: "/Partners/image 17-3.png"
        },
        {
            name: "AIgentX",
            url: "https://www.binance.com/en/images/logo.svg",
            logo: "/Partners/image 16.png"
        }
    ]
  return (
    <>
    <div id="home" className="bg-home w-full min-h-screen pt-[100px] px-16">
      <div className="py-4 w-full">
      <h1 className='text-6xl text-center text-white font-black '>Roadmap</h1>
      <Stepper
  strokeColor="#27272A"
  fillStroke="#FFFFFF"
  activeColor="#FFFFFF"
  activeProgressBorder="4px solid #17253975"
  submitBtn={<button className="stepperBtn">Submit</button>}
  continueBtn={<button className="stepperBtn">Next</button>}
  backBtn={<button className="stepperBtn">Back</button>}
  onSubmit={
    (step) => alert(`Thank you!!! Final Step -> ${step}`)
  }
>
  <div className="flex-cols list-none text-white h-[131px]">
    <li>
    $AGS Token Launch 
    </li>
    <li>Aegis AI Community Establishment</li>
    <li>Initial $AGS Marketing and Listings</li>
    <li>2500 $AGS Holders</li>
    <li>Awareness Ads on X, Telegram and more</li> 
    <li>Whitepaper release</li>
        
  </div>
  <div className="stepperSubDiv">
    <h1>Add your content here!!!</h1>
  </div>
  <div className="stepperSubDiv">
    <h1>Thank you for using Awesome React Stepper</h1>
  </div>
</Stepper>
      </div>
    </div>
    </>
  )
}

export default Roadmap;