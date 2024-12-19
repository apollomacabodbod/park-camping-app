import HomeHeroSection from "./_components/home-hero-section";

export default function Home() {
  

  return (<>

    <div className="relative flex flex-col bg-[#BDBDBD] max-w-[1200px] lg:mx-auto px-[1.25em] transition-all duration-1000 ease-in-out">


      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>

      <HomeHeroSection/>



      <img src="/home-shape.svg" alt="" className="z-10"/>


    </div>

    
    
  </>)
}
  