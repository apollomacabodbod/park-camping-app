import { useEffect } from 'react';
import { fetchBlogUpdates, selectBlogUpdates } from 'src/redux/features/single-blog';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from 'src/redux/store';
import { motion } from "framer-motion";


const BlogDetails = () => {
  const { id } = useParams();
  const blogId = Number(id); // Convert to a number for comparison

  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector(selectBlogUpdates);

  useEffect(() => {
    dispatch(fetchBlogUpdates(blogId)); // Pass ID to Redux
  },[dispatch, id]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  // Find the blog post by ID
  const blog = data.find((post) => post.id === blogId);

  if (!blog) return <p>No blog updates available.</p>;

  return (
    <div className="z-10 flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em]  my-[9em] ">


      <motion.p className="text-white font-montserrat text-[4.5rem] text-center not-italic font-bold max-w-[15em] transition-all duration-1000 ease-in-out"
           
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
           
           
      >{blog?.title}</motion.p>


      <motion.p className="text-[#F4EEA9] font-inter text-[0.9375rem] text-center not-italic font-normal transition-all duration-1000 ease-in-out"
           
           
           
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
           
           
           
      >December 30, 2021  No Comments</motion.p>





    </div>

  );
};

export default BlogDetails;
