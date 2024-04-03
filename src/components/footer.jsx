import React from "react";

export default function Footer() {
  return (
    <section class="relative bg-mini-blue pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-slate-100">
              Let's keep in touch!
            </h4>
            <h5 class="text-lg mt-0 mb-2 text-slate-100">
              Find me on any of these platforms, I respond within 1-2 business days.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <button
                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-instagram"></i>
              </button>
              <button
                class="bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-facebook"></i>
              </button>
              <button
                class="bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fa-brands fa-linkedin"></i>
              </button>
              <button
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-slate-300 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-slate-300 hover:underline font-semibold block pb-2 text-sm"
                      href="/About"
                    >
                      About me
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-slate-300 hover:underline font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <ul class="list-unstyled"> 
                  <li>
                    <a
                      class="text-slate-300 hover:underline font-semibold block pb-2 text-sm"
                      href="mailto:nadiabokordedzi@gmail.com"
                    >
                    Tap to email me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-slate-300 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>{" "}
              <a href="/" class="text-slate-300 hover:underline">
                NadiaKaf
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}