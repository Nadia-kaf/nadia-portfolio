import React, { useState } from 'react';
import html from "../assets/html.png";


const Scroll = () => {
  const [playing, setPlaying] = useState(true);
  const skills =[
    {
        image: {html},
        title: "HTML",
        proficiency: "intermediate",
    },
    {
        image: "", 
        title: "CSS",
        proficiency: "",
    },
  ]
  
  return (
    <div className="w-fit pb-10 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div speed={20} playing={playing}>
        {skills.map((skills) => (
          <div
          key={skills.title}
          className="w-30 bg-white shadow-md rounded-xl duration-500 bg-transparent hover:scale-105 hover:shadow-xl"
        >
          <a href="#">
            <img
            //   src={`https://savefiles.org/${skills.image}?shareable_link=163`}
            src={skills.image}
              alt="Product"
              className="h-40 w-30 object-cover rounded-t-xl"
            />
            <div className=" font-bold p-4">
              <p>{skills.title}</p>

              <p>{skills.proficiency}</p>
            </div>
          </a>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
