import { Link } from "react-router-dom";
import agromartshot from "../assets/AgroMart.png";
import onyxcinemashot from "../assets/OnyxCinema.png";
import decor from "../assets/Decor.png";

export default function Projects() {
  return (
    <>
    <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    <div class="container mx-auto">
      <section id="projects">
        <hr class="my-6 border-blueGray-300" />
        <div class="ps-4 pe-4 bg-mine-blue">
          <p class="text-white pt-14 pb-20 text-xl md:text-4xl relative z-10 text-center font-medium">
            Projects
          </p>
          <ul class="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1 px-5 py-0">
            <li class="sm:col-span-1">
              <div class="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure class="rounded-2xl h-96  img-holder overflow-hidden">
                  <img
                    src={agromartshot}
                    class="w-full h-full transition delay-150 duration-700 ease-in-out focus:scale-100 hover:scale-100 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="Book art design"
                  />
                </figure>
                <div class="absolute top-3 text-center sm:right-60 opacity-0 group-hover:translate-y-16 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left-3 bg-violet-700 rounded-xl px-14 py-4 sm:px-32 sm:py-16 translate-y-2/4 transition delay-50 duration-500 ease-in-out">
                  <h2 class="h3">
                    <a href="#" class="text-white">
                      AgroMart
                    </a>
                  </h2>
                  <Link
                    to="https://onyx-agro-mart-eta.vercel.app/products"
                    target="_blank"
                    class="text-xs text-white decoration-none"
                  >
                    Live <i class="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div class="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure class="rounded-2xl img-holder overflow-hidden">
                  <img
                    src={onyxcinemashot}
                    class="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="3d Didita Art"
                  />
                </figure>

                <div class="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                  <h2 class="h3">
                    <a href="#" class="text-white">
                      OnyxCinema
                    </a>
                  </h2>

                  <Link
                    to="https://onyx-movie-search-app-hazel.vercel.app/"
                    target="_blank"
                    class="text-xs text-white decoration-none"
                  >
                    Live <i class="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div class="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure class="rounded-2xl img-holder overflow-hidden">
                  <img
                    src={decor}
                    class="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="3d Didita Art"
                  />
                </figure>

                <div class="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                  <h2 class="h3">
                    <a href="#" class="text-white">
                      Decor Pro
                    </a>
                  </h2>

                  <Link
                    to="https://decor-pro.vercel.app/"
                    target="_blank"
                    class="text-xs text-white decoration-none"
                  >
                    Live <i class="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    </>
  );
}
