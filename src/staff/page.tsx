import ServicesHeroSection from "./_components/services-hero-section";




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
    
    
  </>)
}