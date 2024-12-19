





export default function HomeHeroSection(){

  return (<>


    <div className="flex flex-col z-10 max-w-[1200px] lg:mx-auto px-[1.25em] border border-[#50B498] green transition-all duration-1000 ease-in-out">


      <div className="flex items-center border border-[#50B498] green gap-[1.875em]">


        <div className="flex flex-col border border-[#50B498] green max-w-[37.5em]" >


          <div className="flex items-center  gap-[0.625em] border border-[#50B498] green">

            <img src="/home-ranger-camp.svg" alt="" width={27} />

            <p className="text-[#F4EEA9]  font-open-sans text-[0.9375rem] not-italic font-bold uppercase">ranger camp</p>

            <img src="/home-ranger-camp.svg" alt="" width={27} />



          </div>


          <p className="text-white font-montserrat text-[4.5rem] leading-[1em] font-bold ">Welcome to Ranger State Park & Lodge</p>




          <p className="text-white font-inter text-[0.9375rem] not-italic font-normal my-[2em]">Nullam semper etiam congue lacinia nuncsit quam vel vestibulum faucibus dolor non semper leo quis retium quam lacus interdum ultrices velit elementum.</p>



          <div className="flex items-center ">

            <div className="flex flex-col border  border-[#F4EEA9] rounded-[0.25em]">


              <div className="flex items-center gap-[0.625em] py-[1em] px-[2em]">

                <p className="font-montserrat text-[#F4EEA9] text-[0.9375rem] font-bold uppercase">Learn more</p>

                <img src="/home-learn-more.svg" alt="" width={14}/>


              </div>

           

            </div>

  
          </div>



        
        
        
        </div>





        <div className="flex flex-col bg-white border border-[#50B498] green py-[2em] px-[2em]">


          <div className="flex items-center gap-[1em]">



            <div className="flex flex-col">

              <div className="flex items-center justify-between border border-[#50B498] green gap-[6em] border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em]">

                <p className="whitespace-nowrap">Check-in</p>
                <img src="/home-book-now.svg" alt="" width={14}/>


              </div>



            </div>




            <div className="flex flex-col">

              <div className="flex items-center justify-between border border-[#50B498] green gap-[6em] border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em]">

                <p className="whitespace-nowrap">Check-out</p>
                <img src="/home-book-now.svg" alt="" width={14}/>


              </div>



            </div>





          </div>


          
            




        </div>

       



      </div>

    
    </div>
    
    
    
  </>)
}