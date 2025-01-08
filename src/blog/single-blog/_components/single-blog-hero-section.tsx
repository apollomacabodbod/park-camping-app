
import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleBlogHeroSection(){



       type data = {
          id : number;
          date: string;
          title: string;
          description: string;
          image: string;
       }
  
  
       const [cards] = useState<data[]>(
         [
           { id: 1, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia lorem", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/camping-2023.jpg" },
           { id: 2, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia loren", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/camping-with-red.jpg" },
           { id: 3, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia lorex", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/camping-mornings.jpg" },
           { id: 4, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia lorev", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/family-camping.jpg" },
           { id: 5, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia lored", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/friends-cooking.jpg" },
           { id: 6, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia loreq", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/friends-having.jpg" },
           { id: 7, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia loreh", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/tourist-camp.jpg" },
           { id: 8, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia lorej", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/tourist-couple.jpg" },
           { id: 9, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia lorei", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/tourists-go.jpg" },
      
      
         ]
       )


       const { id } = useParams()
       const blogId = Number(id); // Convert to a number for comparison

       const blog = cards.find((blog) => blog.id === blogId ) 


      

       return(<>


         <div className="z-10 flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em]  my-[9em] ">


           <p className="text-white font-montserrat text-[4.5rem] text-center not-italic font-bold max-w-[15em]">{blog?.title}</p>


           <p className="text-[#F4EEA9] font-inter text-[0.9375rem] text-center not-italic font-normal ">December 30, 2021  No Comments</p>





         </div>


    
    
    
       </>)
}