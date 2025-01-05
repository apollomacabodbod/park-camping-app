import ServicesHeroSection from "./_components/services-hero-section";
import ServicesOurStaff from "./_components/services-our-staff";
import ServicesTeam from "./_components/services-team";




export default function ServicesStaff(){


  return (<>


    <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-center transition-all duration-1000 ease-in-out "
       
      style={{
        backgroundImage: "url('/couple-camping.jpg')"
      }}
       
    >
   
   
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
   
      <ServicesHeroSection/>
   
   
   
   
      <img src="/home-shape.svg" alt="" className="z-10"/>
   
   
    </div>



    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">

      <ServicesTeam/>
      <ServicesOurStaff/>

    </div>
    
    
  </>)
}