import { useEffect } from "react";
import BlogHeroSection from "./_components/blog-hero-section";
import BlogReadMore from "./_components/blog-read-more";
import BlogUpdates from "./_components/blog-updates";
import BlogUpdatesCards from "./_components/blog-updates-cards";
import { fetchPosts } from "../redux/features/blog-slice";
import { AppDispatch } from "@/src/redux/store";
import { useDispatch } from "react-redux";

export default function Blog(){


  const dispatch = useDispatch<AppDispatch>();
  

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);



  return (<>


    <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-center transition-all duration-1000 ease-in-out "
                  
      style={{
        backgroundImage: "url('/tourist-camp.jpg')"
      }}
                  
    >
              
              
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
              
      <BlogHeroSection/>
              
              
      <img src="/home-shape.svg" alt="" className="z-10"/>
              
              
    </div>


    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] ">


      <BlogReadMore/>
      <BlogUpdates/>
      <BlogUpdatesCards/>


    </div>
    
    
    
  </>)
}