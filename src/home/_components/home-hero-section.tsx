





export default function HomeHeroSection(){

  return (<>


    <div className="flex flex-col z-10 max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green transition-all duration-1000 ease-in-out">


      <div className="flex items-center  gap-[0.625em]">

        <img src="/home-ranger-camp.svg" alt="" width={27} />

        <p className="text-[#F4EEA9]  font-open-sans text-[0.9375rem] not-italic font-bold uppercase">ranger camp</p>

        <img src="/home-ranger-camp.svg" alt="" width={27} />



      </div>


      <p className="text-white font-montserrat">Welcome to Ranger State Park & Lodge</p>


    </div>
    
    
    
  </>)
}