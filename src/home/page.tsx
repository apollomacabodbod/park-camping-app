import HomeAbout from "./_components/home-about";
import HomeCampingGround from "./_components/home-camping-ground";
import HomeDeals from "./_components/home-deals";
import HomeFeatured from "./_components/home-featured";
import HomeFeaturedCards from "./_components/home-featured-cards";
import HomeHeroSection from "./_components/home-hero-section";
import HomePlaces from "./_components/home-places";
import HomePlacesCards from "./_components/home-places-cards";
import HomeRecognitions from "./_components/home-recognitions";
import HomeRecognitionsCards from "./_components/home-recognitions-cards";
import HomeStats from "./_components/home-stats";

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



    <div className="flex flex-col  max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">

      <HomeCampingGround/>
     


    </div>


    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">


      <HomeFeatured/>
      <HomeFeaturedCards/>

    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-auto ">



      <HomeAbout/>
      <HomeStats/>


     


    </div>



    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">

      <HomeRecognitions/>
      <HomeRecognitionsCards/>
      <HomeDeals/>


    </div>





    
    
  </>)
}
  