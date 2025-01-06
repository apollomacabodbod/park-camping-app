import AboutHeroSection from "./_components/about-hero-section";

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
   
  </>)
}
