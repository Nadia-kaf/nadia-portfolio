import abtpic from "../assets/abtpic.png";
import CV from "../assets/CV.pdf";

function About(props) {
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
  <hr class="my-6 border-blueGray-300" />
      <section id='about' className=" " >
      <h2 className=' text-shady text-center text-4xl  lg:ml-30 lg:mb-3 '>About <span className="text-shade-purple">Me</span></h2>
          <div className=' grid grid-cols-1 md:grid-cols-2 '>
           <div className="shadow-lg  border-slate-400    backdrop-filter backdrop-blur-xl bg-transparent bg-opacity-50 relative mb-30 h-96 pt-10 ">
            <p className="text-shady items-center justify-center mx-auto px-5">
                  I am entry-level web developer.Although I am quite abbreased with some basic languages, framworks and tools, I am opened to learning new tools and languages  so i could offer ultimate web develpment solutions. <br />
                  My academic background was from a business and administrative health scope and now to the tech-space.
                  <br />
                  Out of passion and possessing a studuos lifestyle, I have been able to journey through the fundamentals of both frontend and backend web development. 
                  <br />
                  <br />
                  <br />
                  <br />

                  To learn more about me, kindly <span><br />
                  <br />
                   <a href={CV} download className=" text-sky-300 bg-purple-800 px-2 py-3 rounded-2xl  mr-20 text-sm mt-10">Download CV</a></span>.
                  </p>
                   
            </div>
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
                  <div className='items-center w-full mt-10 '>
                  <div >
                      <img src={abtpic} alt='about image' className="w-full h-full object-scale-down" />
                  </div>
              </div>
              </div>
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

      </section>
      </>
  );
}

export default About;