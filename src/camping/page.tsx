import CampingFeatured from "./_components/camping-featured";
import CampingFeaturedCards from "./_components/camping-featured-cards";
import CampingGround from "./_components/camping-ground";
import CampingHeroSection from "./_components/camping-hero-section";
import CampingPlaces from "./_components/camping-places";
import CampingTestimontials from "./_components/camping-testimontials";
import CampingTestimontialsCards from "./_components/camping-testimontials-cards";
import CampingPlacesCards from "./_components/home-places-cards";



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


    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">

      <CampingPlaces/>
      <CampingPlacesCards/>
      <CampingGround/>
      <CampingFeatured/>
      <CampingFeaturedCards/>
      <CampingTestimontials/>
      <CampingTestimontialsCards/>


    </div>
    


    
    
  </>)
}