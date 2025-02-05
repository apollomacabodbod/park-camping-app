import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/src/redux/store";
import { motion } from "framer-motion";
import { fetchPosts } from "src/redux/features/single-blog-slice";

const BlogDetails = () => {
  const { id } = useParams();
  const blogId = Number(id); // Convert to a number for comparison

  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(fetchPosts(blogId));
  },[dispatch, blogId]);

  // Find the specific post by ID
  const post = posts.find((p) => p.id === blogId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-white">Error: {error}</p>;
  // if (!post) return <p className="text-white">No blog updates available.</p>;

  return (
    <div className="z-10 flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] my-[9em]">
      <motion.p
        className="text-white font-montserrat text-[4.5rem] text-center font-bold max-w-[15em] transition-all duration-1000 ease-in-out"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0, ease: "easeInOut" } },
        }}
      >
        {post?.title || "No blog updates available"}
      </motion.p>

      <motion.p
        className="text-[#F4EEA9] font-inter text-[0.9375rem] text-center font-normal transition-all duration-1000 ease-in-out"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0, ease: "easeInOut" } },
        }}
      >
        {post?.date} No Comments
      </motion.p>
    </div>
  );
};

export default BlogDetails;
