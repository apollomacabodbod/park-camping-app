
import { useState } from "react"
import { motion } from "framer-motion"

export default function BlogUpdatesCards(){


     type data = {
        id : number;
        date: string;
        title: string;
        description: string;
        image: string;
     }


     const [cards] = useState<data[]>(
       [
         { id: 1, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/camping-2023.jpg" },
         { id: 2, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/camping-with-red.jpg" },
         { id: 3, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/camping-mornings.jpg" },
         { id: 4, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/family-camping.jpg" },
         { id: 5, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/friends-cooking.jpg" },
         { id: 6, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/friends-having.jpg" },
         { id: 7, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/tourist-camp.jpg" },
         { id: 8, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/tourist-couple.jpg" },
         { id: 9, date: "December 30, 2021  No Comments", title: "Nullam semper etiam congue lacinia", description: "Nullam semper etiam congue lacinia nuncesit quam vel vestibulum faucibus dolor semper.", image: "/tourists-go.jpg" },
    
    
       ]
     )
    


     return (<>


       <div className="grid grid-cols-1 sm:grid-cols-3 mt-[3.989375em] gap-[1.875em] mb-[4.6175em]">

         {cards.map((data) => (

           <div key={data.id} className="flex flex-col ">



             <motion.img src={data.image} alt="" className="h-[12.5em] object-cover rounded-[0.25em] transition-all duration-1000 ease-in-out"


               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={{
                 hidden: { opacity: 0, y: 10 },
                 visible: { 
                   opacity: 1, 
                   y: 0,
                   transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                 },
               }}


             />



             <motion.p className="text-[rgba(16,34,29,0.60)] font-open-sans text-[0.75rem] mt-[1em] font-normal leading-normal transition-all duration-1000 ease-in-out"


               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={{
                 hidden: { opacity: 0, y: 10 },
                 visible: { 
                   opacity: 1, 
                   y: 0,
                   transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                 },
               }}



             >{data.date}</motion.p>

             <motion.p className="text-[#333] font-roboto text-[1.125rem] not-italic font-semibold mt-[0.05em] transition-all duration-1000 ease-in-out"


  
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={{
                 hidden: { opacity: 0, y: 10 },
                 visible: { 
                   opacity: 1, 
                   y: 0,
                   transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                 },
               }}



             >{data.title}</motion.p>


             <motion.p className="text-[#333] font-inter not-italic font-normal text-[0.9375rem] mt-[1em] transtion-all duration-1000 ease-in-out"



               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={{
                 hidden: { opacity: 0, y: 10 },
                 visible: { 
                   opacity: 1, 
                   y: 0,
                   transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                 },
               }}


             >{data.description}</motion.p>



             <motion.div className="flex items-center mt-[1em] gap-[0.625em] transition-all duration-1000 ease-in-out"



               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={{
                 hidden: { opacity: 0, y: 10 },
                 visible: { 
                   opacity: 1, 
                   y: 0,
                   transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                 },
               }}



             >


               <p className="text-[#389844] font-roboto text-[0.9375rem] not-italic font-bold capitalize ">Read More</p>

               <img src="/home-updates-arrow.svg" alt="" />


             </motion.div>


           </div>









         ) )}


     













       </div>
    
     </>
     )
}