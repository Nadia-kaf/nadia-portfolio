import { ReactTyped } from "react-typed";
import  { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../assets/pic.png";

export default function Hero(){
    return (
       <>
      <section className=" px-4" id="home">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2  mt-20  ml-36 mb-32 md:mb-0">
            <h4 className="  leading-tight mb-4 text-shady">Welcome to my portfolio!</h4>
            <h2 className="text-xl mb-2 font-bold text-shady">I am  <span className="text-cherry-red font-semibold">Nadia Kafui Bokordedzi</span></h2>
            <h2 className="font-bold text-white ">a <span className="text-cherry-red"><ReactTyped
      classNameName="absolute text-black font-medium text-sm md:text-4xl pointer-events-none "
      strings={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
      typeSpeed={50}
      backSpeed={25}
      loop
    /></span></h2>

    {/* <p className="mb-20 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ullam sequi odit pariatur ex neque nisi culpa,</p> */}

      <ul className=" flex items-center mt-12 -mx-3 lg:mt-30">
        <li className="flex items-center mx-3">
        <span className=" mr-2"> <FontAwesomeIcon icon={faCheckDouble} /> <span className="text-shady">Available for work</span></span>
        </li>
        <li className="flex items-center mx-3 ">
       <span className=" mr-2"> <FontAwesomeIcon icon={faCheckDouble} /> <span className="text-shady">Full Time Job</span></span>
        </li>
      
      </ul>

            <button className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white mt-5">Download CV</button>
        </div>
        <div className="md:w-1/2 ml-96">
            <img src={pic} alt="Hero Image" className="w-full rounded-xl"/>
        </div>
    </div>
</section>

       </>
    )
}



