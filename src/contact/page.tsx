import ContactContactUs from "./_components/contact-contact-us";
import ContactHeroSection from "./_components/contact-hero-section";
import ContactInfo from "./_components/contact-info";

export default function Contact() {
  return (
    <>
      <div className="relative flex flex-col bg-[#BDBDBD]  bg-cover bg-top transition-all duration-1000 ease-in-out "
                    
        style={{
          backgroundImage: "url('/young-support.jpg')"
        }}
                    
      >
                
                
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-80 "></div>
                
        <ContactHeroSection/>
                
                
                
        <img src="/home-shape.svg" alt="" className="z-10"/>
                
                
      </div>


      <div className="flex flex-col max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green">

        <ContactContactUs/>
        <ContactInfo/>

      </div>


    </>
  );
}
