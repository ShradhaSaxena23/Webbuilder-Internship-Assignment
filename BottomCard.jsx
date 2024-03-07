import React from 'react'

const BottomCard = ({item}) => {
    const {title,desc,price,price2, discount}=item;
  return (
    <div  >
        
        

<div class="max-w-lg bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg flex justify-center" src="/Image/img1.png" alt="" />
    </a>
    <div className=' flex gap-4 justify-start p-2 mt'>
    <button className='bg-Gray p-1 rounded'>20% off</button>
    <button className='bg-Gray p-1 rounded'>Limited Time</button>
    </div>
    <div class="p-3">
        <a href="#">
            <h5 class="mb-2 text-xl  flex justify-center font-medium tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <div>
            <ul className='flex gap-3 items-baseline'>
                <li className='text-lg'>{price}</li>
                <li className ='text-sm text-gray-400  '>{price2}</li>
                <li className ='text-sm  text-red-500'>{discount}</li>
            </ul>
            </div>
        <a href="#" class="flex items-center justify-center px-10  py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            view deal
             
        </a>
    </div>
</div>

    </div>
  )
}

export default BottomCard