



export default function HomeServicesCards(){


  return(<>



    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[4em] gap-[1.875em] mb-[8.6875em]">



      <div className="relative flex flex-col  bg-center bg-cover bg-no-repeat w-full h-[15em] rounded-[0.375em] border border-[#50B498] green"

            
        style={{
          backgroundImage: "url(/grey-lightweight-tent.jpg)"
        }}
      >

        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>


        <div className="my-auto z-10 ">


          <div className="flex items-center justify-center  border border-[#50B498] green">

            <img src="/home-services-camping.svg" alt=""  className="w-[1.75em]"/>

          </div>

          <p className="text-center text-white font-roboto text-[1.125rem] not-italic font-semibold ">Camping</p>


        </div>


              


      </div>





      <div className="relative flex flex-col  bg-center bg-cover bg-no-repeat w-full h-[15em] rounded-[0.375em] border border-[#50B498] green"

            
        style={{
          backgroundImage: "url(/vines-growing.jpg)"
        }}
      >



        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>


        <div className="my-auto z-10">


          <div className="flex items-center justify-center  border border-[#50B498] green">

            <img src="/home-services-lodge.svg" alt=""  className="w-[1.75em]"/>

          </div>

          <p className="text-center text-white font-roboto text-[1.125rem] not-italic font-semibold ">Lodging</p>


        </div>


  


      </div>




      <div className="relative flex flex-col  bg-center bg-cover bg-no-repeat w-full h-[15em] rounded-[0.375em] border border-[#50B498] green"

            
        style={{
          backgroundImage: "url(/garda-lake-in-summer.jpg)"
        }}
      >


        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>


        <div className="my-auto z-10">


          <div className="flex items-center justify-center  border border-[#50B498] green">

            <img src="/home-services-harbor.svg" alt=""  className="w-[1.75em]"/>

          </div>

          <p className="text-center text-white font-roboto text-[1.125rem] not-italic font-semibold ">Harbor</p>


        </div>


  


      </div>




      <div className="relative flex flex-col  bg-center bg-cover bg-no-repeat w-full h-[15em] rounded-[0.375em] border border-[#50B498] green"

            
        style={{
          backgroundImage: "url(/an-attractive.jpg)"
        }}
      >


        <div className="absolute inset-0 bg-[rgba(16,34,29,0.60)] opacity-60"></div>


        <div className="my-auto z-10">


          <div className="flex items-center justify-center  border border-[#50B498] green">

            <img src="/home-services-event.svg" alt=""  className="w-[1.75em]"/>

          </div>

          <p className="text-center text-white font-roboto text-[1.125rem] not-italic font-semibold ">Event</p>


        </div>


  


      </div>





        









    </div>
    
    
  </>)
}