import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-black  text-Greyish p-10">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 ">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
               CATEGORIES
              </h2>
              <ul class="text-Greyish dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="/" class=" hover:underline">
                    Web Builder
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    Hosting
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    Data Center
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    Robotic-Automation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                CONTACT
              </h2>
              <ul class="text-Greyish dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    Contact
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    Private Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                   Terms Of Service
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    Categories
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/" class="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="justify-center ">
                <select className="bg-black" >
                    <option > United States</option>
                </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
