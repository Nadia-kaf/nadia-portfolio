import { Link } from "react-router-dom";
import agromartshot from "../assets/AgroMart.png";
import onyxcinemashot from "../assets/OnyxCinema.png";
import decor from "../assets/Decor.png";
import bling from "../assets/blingweb.png"

export default function Projects() {
  return (
    <>
    <div className="area">
        <ul className="circles">
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
    <div className="container mx-auto">
      <section id="projects">
        <hr className="my-6 border-blueGray-300" />
        <div className="ps-4 pe-4 bg-mine-blue">
          <p className="text-white pt-14 pb-20 text-xl md:text-4xl relative z-10 text-center font-medium">
            Projects
          </p>

          <div className="flex flex-col mb-80 ml-2 w-10/12 ">
              <div className="  grid gap-x-4 gap-y-2 grid-cols-4">
                <div className= "flex flex-nowrap">
                    <div className="w-72 h-72 mr-3 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                   <Link to="https://onyx-agro-mart-eta.vercel.app/products"
                    target="_blank"
                    className="text-xs text-white decoration-none"> 
                    <img
                    src={agromartshot}
                    alt=""
                    className="h-40 w-80 object-cover rounded-t-xl"
                  /></Link>
            
                    <div className="flex justify-start w-80">
                    <span className="mr-44 text-gray-800 font-bold  uppercase text-sm">
                      Name:  AgroMart E-commerce  App               
                     </span>
                    </div>
                    <p className="text-sm font-bold text-black truncate block capitalize">
                    Desc: I am a collaborator to this project. 
                    <br />
                    <span className="italic text-blue">Kindly tap on the image for a display on the website.</span>   </p>
                   </div>
                    <div className="w-72 h-72 mr-3 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                  <Link  to="https://onyx-movie-search-app-hazel.vercel.app/"
                    target="_blank"
                    className="text-xs text-white decoration-none">
                       <img
                    src={onyxcinemashot}
                    alt=""
                    className="h-40 w-80 object-cover rounded-t-xl"
                  />
                    
                    </Link>
                   
            
                    <div className="flex justify-start w-80">
                    <span className="mr-44 text-gray-800 font-bold  uppercase text-sm">
                      Name: Onyx Cinema               
                     </span>
                    </div>
                    <p className="text-sm font-bold text-black">
                    Desc:  This is a movie search I collaborated in.
                    <br />
                    <span className="italic text-blue">Kindly tap on the image for a display on the website.</span> 
                     </p>
                   </div>
                    <div className="w-72 h-72 mr-3 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                      <Link to="https://decor-pro.vercel.app/"
                    target="_blank"
                    className="text-xs text-white decoration-none">
                      <img
                    src={decor}
                    alt=""
                    className="h-40 w-80 object-cover rounded-t-xl"
                  />
            
                    </Link>
                    
                    <div className="flex justify-start w-80">
                    <span className="mr-44 text-gray-800 font-bold  uppercase text-sm">
                      Name:Decor Pro Website                  
                     </span>
                    </div>
                    <p className="text-sm pt-2 font-bold text-black">
                    Desc:This is a website I created using HTML and CSS. 
                    <br />
                    <span className="italic text-blue">Kindly tap on the image for a display on the website.</span> </p>
                   </div>
                    <div className="w-72 h-72 mr-3 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
                   <Link to="https://bling-app.vercel.app/"
                    target="_blank"
                    className="text-xs text-white decoration-none" > <img
                    src={bling}
                    alt=""
                    className="h-40 w-72 object-cover rounded-t-xl"
                  /></Link>
            
                    <div className="flex justify-start w-80">
                    <span className="mr-44 text-gray-800 font-bold  uppercase text-sm">
                      Name: Bling App                 
                     </span>
                    </div>
                    <p className="pt-2 text-sm font-bold text-black">
                    Desc:This is my react  project for jewellery e-commerce shop.
                    <br />
                    <span className="italic text-blue">Kindly tap on the image for a display on the website.</span>  </p>
                   </div>
                    </div>
                  </div>








          {/* <ul className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1 px-5 py-0">
            <li className="sm:col-span-1">
              <div className="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure className="rounded-2xl h-96  img-holder overflow-hidden">
                  <img
                    src={agromartshot}
                    className="w-full h-full transition delay-150 duration-700 ease-in-out focus:scale-100 hover:scale-100 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="Book art design"
                  />
                </figure>
                <div className="absolute top-3 text-center sm:right-60 opacity-0 group-hover:translate-y-16 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left-3 bg-violet-700 rounded-xl px-14 py-4 sm:px-32 sm:py-16 translate-y-2/4 transition delay-50 duration-500 ease-in-out">
                  <h2 className="h3">
                    <a href="#" className="text-white">
                      AgroMart
                    </a>
                  </h2>
                  <Link
                    to="https://onyx-agro-mart-eta.vercel.app/products"
                    target="_blank"
                    className="text-xs text-white decoration-none"
                  >
                    Live <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure className="rounded-2xl img-holder overflow-hidden">
                  <img
                    src={onyxcinemashot}
                    className="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="3d Didita Art"
                  />
                </figure>

                <div className="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                  <h2 className="h3">
                    <a href="#" className="text-white">
                      OnyxCinema
                    </a>
                  </h2>

                  <Link
                    to="https://onyx-movie-search-app-hazel.vercel.app/"
                    target="_blank"
                    className="text-xs text-white decoration-none"
                  >
                    Live <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="group relative align-center rounded-2xl overflow-hidden h-5/6">
                <figure className="rounded-2xl img-holder overflow-hidden">
                  <img
                    src={decor}
                    className="w-full h-80 transition delay-150 duration-700 ease-in-out focus:scale-110 hover:scale-110 focus:brightness-50 hover:brightness-50"
                    loading="lazy"
                    alt="3d Didita Art"
                  />
                </figure>

                <div className="absolute top-[40%] text-center right-24 opacity-0  group-hover:-translate-y-6 group-focus:translate-y-16 group-focus:opacity-100 group-hover:opacity-100 left=-5 bg-violet-700 rounded-xl px-16 py-10 translate-y-6 transition delay-50 duration-500 ease-in-out">
                  <h2 className="h3">
                    <a href="#" className="text-white">
                      Decor Pro
                    </a>
                  </h2>

                  <Link
                    to="https://decor-pro.vercel.app/"
                    target="_blank"
                    className="text-xs text-white decoration-none"
                  >
                    Live <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
            </li>
          </ul> */}
        </div>
        </div>
      </section>
    </div>
    </>
  );
}
