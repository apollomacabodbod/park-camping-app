





export default function HomeHeroSection(){

  return (<>


    <div className="flex flex-col z-10 max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green transition-all duration-1000 ease-in-out">


      <div className="flex items-center border border-[#50B498] green">


        <div className="flex flex-col border border-[#50B498] green">


          <div className="flex items-center  gap-[0.625em]">

            <img src="/home-ranger-camp.svg" alt="" width={27} />

            <p className="text-[#F4EEA9]  font-open-sans text-[0.9375rem] not-italic font-bold uppercase">ranger camp</p>

            <img src="/home-ranger-camp.svg" alt="" width={27} />



          </div>


          <p className="text-white font-montserrat text-[4.5rem] leading-[1em] font-bold max-w-[37.5em]">Welcome to Ranger State Park & Lodge</p>




          <p className="text-white ">Nullam semper etiam congue lacinia nuncsit quam vel vestibulum faucibus dolor non semper leo quis retium quam lacus interdum ultrices velit elementum.</p>


        </div>



      </div>

    
    </div>
    
    
    
  </>)
}