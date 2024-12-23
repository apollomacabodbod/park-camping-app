import { motion } from "framer-motion";


export default function Footer(){


  return (<>
    

    <div className=" relative flex flex-col bg-[#BDBDBD]  bg-cover bg-center transition-all duration-1000 ease-in-out"
       
      style={{
        backgroundImage: "url('/tent-in-mountain.jpg')"
      }}
       
    >


      <img src="/footer-shape.svg" alt="" className="z-10"/>
   
   
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
   
   
   
      <div className="flex flex-col mt-[8.16125em] z-10 max-w-[1200px] lg:mx-auto px-[1.25em]">

        <motion.div className="flex items-center justify-center transition-all duration-1000 ease-in-out"
        
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

          <img src="/park-logo.svg" alt="" width={113} />

        </motion.div>


        <motion.p className="text-center text-white font-inter text-[0.9375rem] not-italic font-normal my-[2em] transition-all duration-1000 ease-in-out"
        
        
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
        
        >Nullam semper etiam congue lacinia nuncesit quam vel vestibulum<br></br>
        faucibus dolor non semper leo quis pretium quam lacus.</motion.p>




      </div>


      <div className="z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-[1200px] lg:mx-auto px-[1.25em] gap-[2em]">





        <div className="flex flex-col ">


          <div className="flex items-center justify-between gap-[2em] ">

            <motion.p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left transition-all duration-1000 ease-in-out"
          
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
        
        
            >home</motion.p>

            <motion.div className="flex items-center justify-start   transition-all duration-1000 ease-in-out"
        
        
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

              <img src="/footer-dots.svg" alt=""  width={7}/>

            </motion.div>

          </div>

         
        

        </div>



        <div className="flex flex-col ">

          <div className="flex items-center justify-between gap-[2em]">

            <motion.p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left transition-all duration-1000 ease-in-out"

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


            >services</motion.p>

            <motion.div className="flex items-center justify-start   transition-all duration-1000 ease-in-out"


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

              <img src="/footer-dots.svg" alt=""  width={7}/>

            </motion.div>

          </div>




        </div>





        <div className="flex flex-col ">

          <div className="flex items-center justify-between gap-[2em]">

            <motion.p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left transition-all duration-1000 ease-in-out"

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


            >camping</motion.p>

            <motion.div className="flex items-center justify-start   transition-all duration-1000 ease-in-out"


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

              <img src="/footer-dots.svg" alt=""  width={7}/>

            </motion.div>

          </div>




        </div>





        <div className="flex flex-col ">

          <div className="flex items-center justify-between gap-[2em]">

            <motion.p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left transition-all duration-1000 ease-in-out"

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


            >about</motion.p>

            <motion.div className="flex items-center justify-start  transition-all duration-1000 ease-in-out"


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

              <img src="/footer-dots.svg" alt=""  width={7}/>

            </motion.div>

          </div>




        </div>





        <div className="flex flex-col ">

          <div className="flex items-center justify-between gap-[2em]">

            <motion.p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left transition-all duration-1000 ease-in-out"

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


            >blog</motion.p>

            <motion.div className="flex items-center justify-start  transition-all duration-1000 ease-in-out"


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

              <img src="/footer-dots.svg" alt=""  width={7}/>

            </motion.div>

          </div>




        </div>




        <div className="flex flex-col ">

          <div className="flex items-center justify-between gap-[2em]">

            <motion.p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left transition-all duration-1000 ease-in-out"

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


            >contact</motion.p>

            <img src="/footer-dots.svg" alt=""  width={7} className="lg:opacity-0"/>

          </div>




        </div>









        


        


      </div>

      {/* Foooter links */}


      <div className="z-10 grid grid-cols-4 max-w-[1200px] lg:mx-auto px-[1.25em] transition-all duration-1000 ease-out gap-[1em] mt-[4em] ">


        <div className="flex flex-col">


          <div className="flex items-center justify-center">

            <motion.img src="/footer-facebook.svg" alt="" width={32} className="transition-all duration-1000 ease-in-out"
          
          
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

          </div>


        </div>



        <div className="flex flex-col">


          <div className="flex items-center justify-center">

            <motion.img src="/footer-twitter.svg" alt="" width={32} className="transition-all duration-1000 ease-in-out"


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

          </div>


        </div>



        <div className="flex flex-col">


          <div className="flex items-center justify-center">

            <motion.img src="/footer-instagram.svg" alt="" width={32} className="transition-all duration-1000 ease-in-out"


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

          </div>


        </div>



        <div className="flex flex-col">


          <div className="flex items-center justify-center">

            <motion.img src="/footer-youtube.svg" alt="" width={32} className="transition-all duration-1000 ease-in-out"


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

          </div>


        </div>




      </div>


      {/* Horizontal */}


      <motion.div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] transition-all duration-1000 ease-in-out"
  
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

        <img src="/footer-border.svg" alt="" className="relative top-[2em] w-[1200px] "/>


      </motion.div>


      {/* footer buttom 4 */}

      <div className="z-10 grid  mt-[4em]  sm:grid-cols-2  lg:grid-cols-5 max-w-[1200px] lg:mx-auto px-[1.25em] transition-all duration-1000 ease-out  gap-[1.875em]">




        <div className="flex flex-col ">




          <motion.p className="text-white  font-roboto text-[1.125rem] font-semibold transition-all duration-1000 ease-in-out"


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

          >Contact</motion.p>
          <motion.p className="text-white mt-[2em]  transition-all duration-1000 ease-in-out xl:whitespace-nowrap"


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


          >021 Hollywood Boulevard, LA</motion.p>
          <motion.p className="text-white mt-[0.5em]  transition-all duration-1000 ease-in-out"


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

          >customer@example.com</motion.p>
          <motion.p className="text-white mt-[0.5em] transition-all duration-1000 ease-in-out"


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


          >(021) 345-6789</motion.p>


        </div>






        <div className="flex flex-col ">


          <motion.p className="text-white  font-roboto text-[1.125rem] font-semibold  transition-all duration-1000 ease-in-out"
              
              
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
              
              
          >Services</motion.p>
          <motion.p className="text-white mt-[2em]  transition-all duration-1000 ease-in-out"
              
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
              
              
              
          >Camping</motion.p>
          <motion.p className="text-white mt-[0.5em]  transition-all duration-1000 ease-in-out"
              
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
              
              
              
          >Lodging</motion.p>
          <motion.p className="text-white mt-[0.5em]  transition-all duration-1000 ease-in-out"
              
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
              
              
              
          >Harbor</motion.p>
          <motion.p className="text-white mt-[0.5em]  transition-all duration-1000 ease-in-out"
              
              
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
              
              
          >Day Use</motion.p>


        </div>




            

        <div className="flex flex-col ">


          <motion.p className="text-white font-roboto text-[1.125rem] font-semibold  transition-all duration-1000 ease-in-out"
              
              
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
              
          >Menu</motion.p>
          <motion.p className="text-white mt-[2em]  transition-all duration-1000 ease-in-out"
              
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
              
              
          >About</motion.p>
          <motion.p className="text-white mt-[0.5em]  transition-all duration-1000 ease-in-out"
              
              
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
              
              
          >Services</motion.p>
          <motion.p className="text-white mt-[0.5em]  transition-all duration-1000 ease-in-out"
              
              
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
              
              
          >Booking</motion.p>
          <motion.p className="text-white mt-[0.5em]  transition-all duration-1000 ease-in-out"
              
              
              
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
              
          >Blog</motion.p>


        </div>






        <div className="flex flex-col  lg:col-span-2 ">


          <motion.p className="text-white font-roboto text-[1.125rem] font-semibold  transition-all duration-1000 ease-in-out"

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

          >Newsletters</motion.p>
          <motion.p className="text-white mt-[2em]  transition-all duration-1000 ease-in-out"

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


          >Sign up your email and get best deals for you</motion.p>




          <div className="flex items-center justify-center">

            <motion.div className="flex flex-col bg-white py-[1em] px-[1em] rounded-[0.25em] mt-[1em]  w-full   transition-all duration-1000 ease-in-out"
  
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

              <div className="flex items-center justify-center gap-[1em] transition-all duration-1000 ease-in-out"
    
    
    
              >

                <input type="text" placeholder="Your email here" className="outline-none font-open-sans text-[0.9375rem] not-italic font-normal py-[1em] border-b-2 rounded-[0em]  border-[#333] w-full"/>
                <button className="py-[1em] px-[2em] bg-[#389844] text-white uppercase text-[0.9375rem] font-roboto font-extrabold not-italic rounded-[0.25em] w-full">subscribe</button>


              </div>



            </motion.div>

          </div>

        </div>






     
      </div>




      <motion.div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] transition-all duration-1000 ease-in-out"
  
  
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

        <img src="/footer-border.svg" alt="" className="relative top-[2em] w-[1200px] "/>


      </motion.div>






      <div className="flex flex-col z-10  mb-[2.02625em] mt-[4em]">

        <motion.p className="text-center text-white font-roboto text-[0.9375rem] not-italic font-normal  transition-all duration-1000 ease-in-out"
          
          
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
        
        
        
        >© 2024 Park Camping. All Rights Reserved.</motion.p>

      </div>


    


   
   
   
    </div>
   
    
  </>)
}