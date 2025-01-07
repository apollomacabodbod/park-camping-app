import BlogHeroSection from "./_components/blog-hero-section";
import BlogReadMore from "./_components/blog-read-more";



export default function Blog(){


  return (<>


    <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-center transition-all duration-1000 ease-in-out "
                  
      style={{
        backgroundImage: "url('/camping-mornings.jpg')"
      }}
                  
    >
              
              
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
              
      <BlogHeroSection/>
              
              
      <img src="/home-shape.svg" alt="" className="z-10"/>
              
              
    </div>


    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em]">

        
      <BlogReadMore/>


    </div>
    
    
    
  </>)
}