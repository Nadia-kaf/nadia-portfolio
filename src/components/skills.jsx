import React, { useState } from 'react';
import html from "../assets/html.png";
import CSS from "../assets/CSS.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind-css.png";
import nodejs from "../assets/nodejs.png";



const Scroll = () => {
 
  const skills =[
    {
        image: html,
        title: "HTML",
        proficiency: "intermediate",
    },
    {
        image: CSS, 
        title: "CSS",
        proficiency: "",
    },
    {
        image: javascript, 
        title: "JavaScript",
        proficiency: "",
    },
    {
        image: react, 
        title: "REACT",
        proficiency: "",
    },
    {
        image:nodejs, 
        title: "NodeJs",
        proficiency: "",
    },
    {
        image: tailwind, 
        title: "Tailwind CSS",
        proficiency: "",
    },
  ]
  
  return (
    <div className="drop-shadow-2xl">
      

<div className="w-full px-40 flex flex-col justify-center">
  <div className="overflow-x-scroll pb-10 hide-scroll-bar mt-10 mb-10">
    <div className="flex flex-nowrap">
            {skills.map((skills) => {
              return (
                <div className='shadow-lg bg-slate-800 border-slate-400    backdrop-filter backdrop-blur-xl bg-white/30 bg-opacity-50 relative' >
                  <img src={skills.image} alt=""  className="w-64  pr-5 pl-1"/>
                  <p className=" pr-10 pl-10 text-white">{skills.title}</p> 
                  <p className=" pr-10 pl-10 text-white">{skills.proficiency}</p> 
                </div>

              )
            })}
            </div>
          </div>
          </div>
          </div>
)

}





//     <div className="w-fit pb-10 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
//       <div speed={20} playing={playing}>
//         {skills.map((skills) => (
//           <div
//           key={skills.title}
//           className="w-30 bg-white shadow-md rounded-xl duration-500 bg-transparent hover:scale-105 hover:shadow-xl"
//         >
//           <a href="#">
//             <img
//             //   src={`https://savefiles.org/${skills.image}?shareable_link=163`}
//             src={html}
//               alt="Product"
//               className="h-40 w-30 object-cover rounded-t-xl"
//             />
//             <div className=" font-bold p-4">
//               <p>{skills.title}</p>

//               <p>{skills.proficiency}</p>
//             </div>
//           </a>
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Scroll;

export default Scroll;

