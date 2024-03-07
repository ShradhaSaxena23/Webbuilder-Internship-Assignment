import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { TbMathGreater } from "react-icons/tb";
const Headers = () => {
  return (
    <div className='sm:flex  justify-center items-center '>
    <div className=' justify-start'>
        <h1 className='text-5xl font-normal'>Best Website builders in the US</h1>
        <div className='border border-Gray w-full'/>
        <div className='flex items-center gap-4 p-4'>
     <CiCircleCheck /> Last Updated - February 22, 2020
     <IoIosInformationCircleOutline /> Advertising Disclosure
     </div>
     <div className='border border-Gray '/>
     <div className= 'sm:flex  gap-12 hidden '>
        <button className=' bg-white p-2'>Tools</button>
        <button className=' bg-white p-2'>AWS Builder</button>
        <button className=' bg-white p-2'>Start Build</button>
        <button className=' bg-white p-2'>Build Supplies</button>
        <button className=' bg-white p-2'>Tooling</button>
        <button className=' bg-white p-2'>BlueHosting</button>
     </div>

     <div>
      <ul className='flex items-center gap-3 mt-3'>
        <l1>Home</l1>
        <l1><TbMathGreater /></l1>
        <l1>Hosting for all</l1>
        <l1><TbMathGreater /></l1>
        <l1>Hosting</l1>
        <l1><TbMathGreater /></l1>
        <l1>Hosting6</l1>
        <l1><TbMathGreater /></l1>
        <l1>Hosting5</l1>
       
      </ul>
     </div>
    </div>
   
    
    

     
    
     
    
    </div>
  )
}

export default Headers