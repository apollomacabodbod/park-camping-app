import SingleBlogCardOne from "./_components/single-blog-card-one";
import SingleBlogCardTwo from "./_components/single-blog-card-two";
import SingleBlogCategory from "./_components/single-blog-category";
import SingleBlogComment from "./_components/single-blog-comment";
import SingleBlogDescription from "./_components/single-blog-description";
import SingleBlogDetails from "./_components/single-blog-details";
import SingleBlogHeroSection from "./_components/single-blog-hero-section";
import SingleBlogReply from "./_components/single-blog-reply";
import SingleBlogUpdates from "./_components/single-blog-updates";
import SingleBlogUpdatesCards from "./_components/single-blog-updates-cards";




export default function SingleBlog(){


  return (<>


    <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-center transition-all duration-1000 ease-in-out "
                      
      style={{
        backgroundImage: "url('/tourist-camp.jpg')"
      }}
                      
    >
                  
                  
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
                  
                  

      <SingleBlogHeroSection/>
                  
      <img src="/home-shape.svg" alt="" className="z-10"/>
                  
                  
    </div>



    <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">


      <SingleBlogDetails/>
      <SingleBlogCardOne/>
      <SingleBlogDescription/>
      <SingleBlogCardTwo/>
      <SingleBlogCategory/>
      <SingleBlogUpdates/>
      <SingleBlogUpdatesCards/>
      <SingleBlogComment/>
      <SingleBlogReply/>


    </div>
    
    
    
  </>)
}