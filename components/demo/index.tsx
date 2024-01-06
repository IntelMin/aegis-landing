import Image from 'next/image'
import React from 'react'

export const Demo = () => {
    const demoImages = [
        {
            url: "/democollection/image 8.png",
        },
        {
            url: "/democollection/image 9.png",
        },
        {
            url: "/democollection/image 10.png",
        },
        {
            url: "/democollection/image 11.png",
        },
    ]

  return (
    <>
    <div id="demo" className="w-full pt-[20px]  flex bg-[#09090B]">
    <div className='flex-cols w-[40%] space-y-12'>
        <div className='text-white  text-start font-normal space-y-10 mt-4 px-40'>
        <h1 className='text-6xl text-start text-[#27272A] font-semibold '>Aegis <br/>
        <span className='text-white'>dApp</span> demo
        </h1>
        <p className='text-[#71717A] line-break'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, repellendus iste ut soluta natus similique, veniam rem voluptas  Lorem ipsum dolor sit, amet consectetur adi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, repellendus iste ut soluta natus similique, veniam rem voluptaspisicing elit. Recusandae, repellendus iste ut soluta natus similique, veniam rem voluptas delectus odio vitae, culpa quisquam!,natus similique, veniam rem voluptas delectus odio vitae, culpa quisquam!,natus similique, veniam rem voluptas delectus odio vitae, culpa quisquam!</p>
        </div>
        <div className='grid grid-cols-2 px-40 mt-4'>
            {
            demoImages.map((demo, index) => (
                <div key={index} className='flex justify-center items-center mt-4 '>
                    <Image src={demo.url} alt="demo" width={212} height={152} className='object-cover' />
                </div>
            ))
            }
        </div>
    </div>
    <div className='w-[60%]'>
        <Image src="/demoImage.png" alt="demo" width={1920} height={1080} className='object-cover' />
    </div>
       
    </div>
    </>
  )
}

export default Demo