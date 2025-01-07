import AboutActivtiesVideo from "./_components/about-activies-video";
import AboutActivities from "./_components/about-activities";
import AboutCampingGround from "./_components/about-camping-ground";
import AboutCards from "./_components/about-cards";
import AboutHeroSection from "./_components/about-hero-section";
import AboutTestimontials from "./_components/about-testimontials";
import AboutTestimontialsCards from "./_components/about-testimontials-cards";

export default function About() {
  return (<>
   
    <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-center transition-all duration-1000 ease-in-out "
              
      style={{
        backgroundImage: "url('/camping-mornings.jpg')"
      }}
              
    >
          
          
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
          
      <AboutHeroSection/>
          
          
          
      <img src="/home-shape.svg" alt="" className="z-10"/>
          
          
    </div>




    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] ">

      <AboutCards/>
      <AboutCampingGround/>
      <AboutActivities/>
      <AboutActivtiesVideo/>
      <AboutTestimontials/>
      <AboutTestimontialsCards/>


    </div>
   
  </>)
}
