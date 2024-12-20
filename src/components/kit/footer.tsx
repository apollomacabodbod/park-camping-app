


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

        <div className="flex items-center justify-center">

          <img src="/park-logo.svg" alt="" width={113} />

        </div>


        <p className="text-center text-white font-inter text-[0.9375rem] not-italic font-normal my-[2em]">Nullam semper etiam congue lacinia nuncesit quam vel vestibulum<br></br>
        faucibus dolor non semper leo quis pretium quam lacus.</p>




        <div className="lg:flex lg:items-center lg:justify-center gap-[2em]">

          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left">home</p>

          <div className="flex items-center justify-center mt-[1em] lg:mt-[0em]">

            <img src="/footer-dots.svg" alt=""  width={7}/>

          </div>
        

          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left mt-[1em] lg:mt-[0em]">Services</p>

          <div className="flex items-center justify-center mt-[1em] lg:mt-[0em">

            <img src="/footer-dots.svg" alt=""  width={7}/>

          </div>


          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left mt-[1em] lg:mt-[0em]">Camping</p>

          <div className="flex items-center justify-center mt-[1em] lg:mt-[0em">

            <img src="/footer-dots.svg" alt=""  width={7}/>

          </div>

          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left mt-[1em] lg:mt-[0em]">About</p>

          <div className="flex items-center justify-center mt-[1em] lg:mt-[0em">

            <img src="/footer-dots.svg" alt=""  width={7}/>

          </div>


          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left mt-[1em] lg:mt-[0em]">Blog</p>

          <div className="flex items-center justify-center mt-[1em] lg:mt-[0em">

            <img src="/footer-dots.svg" alt=""  width={7}/>

          </div>


          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize text-center lg:text-left mt-[1em] lg:mt-[0em]">Contact</p>


        </div>



        <div className="flex items-center justify-center gap-[1em] mt-[4em] mb-[2em] ">

          <img src="/footer-facebook.svg" alt="" width={32}/>
          <img src="/footer-twitter.svg" alt="" width={32}/>
          <img src="/footer-instagram.svg" alt="" width={32}/>
          <img src="/footer-youtube.svg" alt="" width={32}/>

        </div>








        <div className="flex flex-col ">


          <div className="flex items-center justify-center ">

            <img src="/footer-border.svg" alt="" width={0} className="w-[50em]"/>


          </div>



            

          <div className="lg:flex lg:items-baseline lg:justify-center gap-[1.875em] my-[2em]">


            <div className="flex flex-col ">




              <p className="text-white text-center lg:text-left font-roboto text-[1.125rem] font-semibold ">Contact</p>
              <p className="text-white mt-[2em] text-center lg:text-left">021 Hollywood Boulevard, LA</p>
              <p className="text-white mt-[0.5em] text-center lg:text-left">customer@example.com</p>
              <p className="text-white mt-[0.5em] text-center lg:text-left">(021) 345-6789</p>


            </div>



            <div className="flex flex-col">


              <p className="text-white text-center lg:text-left font-roboto text-[1.125rem] font-semibold mt-[2em]">Services</p>
              <p className="text-white mt-[2em] text-center lg:text-left">Camping</p>
              <p className="text-white mt-[0.5em] text-center lg:text-left">Lodging</p>
              <p className="text-white mt-[0.5em] text-center lg:text-left">Harbor</p>
              <p className="text-white mt-[0.5em] text-center lg:text-left">Day Use</p>


            </div>




            <div className="flex flex-col">


              <p className="text-white text-center lg:text-left font-roboto text-[1.125rem] font-semibold mt-[2em]">Menu</p>
              <p className="text-white mt-[2em] text-center lg:text-left">About</p>
              <p className="text-white mt-[0.5em] text-center lg:text-left">Services</p>
              <p className="text-white mt-[0.5em] text-center lg:text-left">Booking</p>
              <p className="text-white mt-[0.5em] text-center lg:text-left">Blog</p>


            </div>




            <div className="flex flex-col">


              <p className="text-white text-center lg:text-left font-roboto text-[1.125rem] font-semibold mt-[2em]">Newsletters</p>
              <p className="text-white mt-[2em] text-center lg:text-left">Sign up your email and get best deals for you</p>




              <div className="flex items-center justify-center">

                <div className="flex flex-col bg-white py-[1em] px-[1em] rounded-[0.25em] mt-[1em]  w-full sm:w-[25.625em] lg:w-full">

                  <div className="flex items-center justify-center gap-[1em] ">

                    <input type="text" placeholder="Your email here" className="outline-none font-open-sans text-[0.9375rem] not-italic font-normal py-[1em] border-b-2  border-[#333] w-full"/>
                    <button className="py-[1em] px-[2em] bg-[#389844] text-white uppercase text-[0.9375rem] font-roboto font-extrabold not-italic rounded-[0.25em] w-full">subscribe</button>
    
    
                  </div>



                </div>

              </div>







            </div>








          </div>




          <div className="flex items-center justify-center mb-[5em]">

            <img src="/footer-border.svg" alt="" width={0} className="w-[50em]"/>


          </div>


          <p className="text-center text-white font-roboto text-[0.9375rem] not-italic font-normal mb-[2.02625em]">© 2024 Park Camping. All Rights Reserved.</p>




        </div>


        



      </div>
   
        
   
   
    </div>
   
    
  </>)
}