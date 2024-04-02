import { ReactTyped } from "react-typed";
import  { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heropic from "../assets/10.jpg";

export default function Hero(){
    return (
       <>
      <section className="bg-light-blue py-20 px-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
            <h5 className="  leading-tight mb-4">Welcome to my portfolio!</h5>
            <h3 className="text-xl mb-2 font-bold">I am  <span className="text-hot-pink font-semibold">Nadia Kafui Bokordedzi</span></h3>
            <h3 className="font-bold ">a <span className="text-hot-pink"><ReactTyped
      classNameName="absolute text-black font-medium text-sm md:text-4xl pointer-events-none "
      strings={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
      typeSpeed={20}
      backSpeed={10}
      loop
    /></span></h3>

    <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ullam sequi odit pariatur ex neque nisi culpa,</p>

      <ul className=" flex items-center mt-4 -mx-3 lg:mt-5">
        <li className="flex items-center mx-3">
        <span className=" mr-2"> <FontAwesomeIcon icon={faCheckDouble} /> <span>Available for work</span></span>
        </li>
        <li className="flex items-center mx-3 ">
       <span className=" mr-2"> <FontAwesomeIcon icon={faCheckDouble} /> <span>Full Time Job</span></span>
        </li>
      
      </ul>

            <button className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white mt-5">HIRE ME</button>
        </div>
        <div className="md:w-1/2 ml-96">
            <img src={heropic} alt="Hero Image" className="w-full rounded-xl"/>
        </div>
    </div>
</section>

       </>
    )
}



