
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
  <section>
    <h1 className="ml-96 mb-10 font-bold text-4xl">My Resume </h1>


    <Tabs value="html" className="mx-auto w-full">
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
