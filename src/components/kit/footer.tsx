import HomeHeroSection from "src/home/_components/home-hero-section";



export default function Footer(){


  return (<>
    

    <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-center transition-all duration-1000 ease-in-out"
       
      style={{
        backgroundImage: "url('/tent-in-mountain.jpg')"
      }}
       
    >


      <img src="/footer-shape.svg" alt="" className="z-10"/>
   
   
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
   
   
   
      <div className="flex flex-col mt-[8.16125em] z-10">

        <div className="flex items-center justify-center">

          <img src="/park-logo.svg" alt="" width={113} />

        </div>


        <p className="text-center text-white font-inter text-[0.9375rem] not-italic font-normal my-[2em]">Nullam semper etiam congue lacinia nuncesit quam vel vestibulum<br></br>
        faucibus dolor non semper leo quis pretium quam lacus.</p>




        <div className="flex items-center justify-center gap-[2em]">

          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">home</p>

          <img src="/footer-dots.svg" alt=""  width={7}/>

          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">Services</p>

          <img src="/footer-dots.svg" alt=""  width={7}/>


          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">Camping</p>

          <img src="/footer-dots.svg" alt=""  width={7}/>

          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">About</p>

          <img src="/footer-dots.svg " alt=""  width={7}/>


          <p className="text-white font-roboto text-[0.9375rem] not-italic font-bold capitalize">Blog</p>

          <img src="/footer-dots.svg " alt=""  width={7}/>


          <p className="text-white">Contact</p>


        </div>



        <div className="flex items-center justify-center">

          <img src="/footer-facebook.svg" alt="" width={32}/>
          <img src="/footer-twitter.svg" alt="" width={32}/>
          <img src="/footer-instagram.svg" alt="" width={32}/>
          <img src="/footer-youtube.svg" alt="" width={32}/>

        </div>


        



      </div>
   
        
   
   
    </div>
   
    
  </>)
}