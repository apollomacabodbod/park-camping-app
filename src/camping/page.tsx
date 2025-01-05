import CampingHeroSection from "./_components/camping-hero-section";



export default function Camping(){


  return (<>



    <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-center transition-all duration-1000 ease-in-out "
           
      style={{
        backgroundImage: "url('/camping-mornings.jpg')"
      }}
           
    >
       
       
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
       
      <CampingHeroSection/>
       
       
       
       
      <img src="/home-shape.svg" alt="" className="z-10"/>
       
       
    </div>
    


    
    
  </>)
}