import React from "react";

const TopCard = ({ item }) => {
  const { desc1, title, desc2 } = item;
  return (
    <div className="flex flex-row justify-center mb-7 px-5">
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
       
      
  
        
       <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="Image/img1.png"
          alt=""
        />
        <div className="flex ">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {desc1}
          </h5>
          <h2 className="font-bold">{title}</h2>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc2}
          </p>
          <div className="flex ">
            <div className="text-blue-500">show more</div>


          </div>
        </div>
        </div>
  
      
      </a>
    </div>
  );
};

export default TopCard;
