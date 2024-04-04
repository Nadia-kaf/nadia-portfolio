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
      <section id='about' >
      <h2 className=' text-shady text-center  text-4xl my:32 lg:mt-30 lg:ml-30 lg:mb-10 '>About <span className="text-shade-purple">Me</span></h2>
          <div className=' grid grid-cols-1 md:grid-cols-2 '>
           <div className="shadow-lg  border-slate-400    backdrop-filter backdrop-blur-xl bg-transparent bg-opacity-50 relative mb-30 h-96 pt-10">
            <p className="text-shady items-center justify-center mx-auto px-5">
                  I am entry-level web developer.Although I am quite abbreased with some basic languages, framworks and tools, I am opened to learning new tools and languages  so i could offer ultimate web develpment solutions. <br />
                  My academic background was from a business and administrative health scope and now to the tech-space.
                  <br />
                  Out of passion and possessing a studuos lifestyle, I have been able to journey through the fundamentals of both frontend and backend web development. 
                  <br />
                  <br />
                  To learn more about me, kindly <span> <a href={CV} download className="text-center text-sky-300 bg-purple-800 px-3 py-2 rounded-2xl  mr-20 ">Download My Curriculum Vitae</a></span>.
                  </p>
                   
            </div>
                
                  <div className='items-center w-full '>
                  <div >
                      <img src={abtpic} alt='about image' className="w-full h-full object-scale-down	mb-30" />
                  </div>
              </div>
                 
              </div>

      </section>
      </>
  );
}

export default About;