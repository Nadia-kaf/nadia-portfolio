
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import Education from "./education";
import Experience from "./experience";
import Scroll from "./skills";
   
  export default function Resume() {
   
    const data = [
      {
        label: "Education",
        value: "education",
        desc: <Education/>,
      },
      {
        label: "Professional Experience",
        value: "experience",
        desc: <Experience/>,
      },
      {
        label: "Skills",
        value: "skills",
        desc: <Scroll/>,
      },
     
    ];




  return(
    
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
  <section id="resume">
  <hr class="my-6 border-blueGray-300" />
    <h1 className=" text-white pt-14 pb-20 text-xl md:text-4xl relative z-10 text-center font-medium">My Resume </h1>


    <Tabs value="html" className="mx-auto w-10/12">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>

</section>
</>

  );
}
