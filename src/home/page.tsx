import HomeHeroSection from "./_components/home-hero-section";
import HomePlaces from "./_components/home-places";
import HomePlacesCards from "./_components/home-places-cards";

export default function Home() {
  

  return (<>

    <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-bottom transition-all duration-1000 ease-in-out"
    
      style={{
        backgroundImage: "url('/grey-lightweight-tent.jpg')"
      }}
    
    >


      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>

      <HomeHeroSection/>




      <img src="/home-shape.svg" alt="" className="z-10"/>


    </div>



    <div className="flex flex-col bg-white max-w-[1200px] lg:mx-auto px-[1.25em]">

      <HomePlaces/>
      <HomePlacesCards/>


    </div>

    
    
  </>)
}
  