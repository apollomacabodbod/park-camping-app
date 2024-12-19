import HomeHeroSection from "./_components/home-hero-section";

export default function Home() {
  

  return (<>

    <div className="relative flex flex-col   bg-cover bg-bottom transition-all duration-1000 ease-in-out"
    
      style={{
        backgroundImage: "url('/grey-lightweight-tent.jpg')"
      }}
    
    >


      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>

      <HomeHeroSection/>




      <img src="/home-shape.svg" alt="" className="z-10"/>


    </div>

    
    
  </>)
}
  