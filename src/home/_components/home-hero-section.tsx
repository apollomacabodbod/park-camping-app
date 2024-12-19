import { useState } from "react";






export default function HomeHeroSection(){

 
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState<string | null>(null);


  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };



  const handleDateChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDateTwo(event.target.value);
  };





  return (<>



    <div className="grid grid-cols-1 lg:grid-cols-2 z-10 max-w-[1200px] lg:mx-auto px-[1.25em] my-[9em] gap-[1.875em]  border border-[#50B498] green">



      <div className="flex flex-col border border-[#50B498] green  " >


        <div className="flex items-center  gap-[0.625em] border border-[#50B498] green">

          <img src="/home-ranger-camp.svg" alt="" width={27} />

          <p className="text-[#F4EEA9]  font-open-sans text-[0.9375rem] not-italic font-bold uppercase">ranger camp</p>

          <img src="/home-ranger-camp.svg" alt="" width={27} />



        </div>


        <p className="text-white font-montserrat text-[3.8rem] lg:text-[4.5rem] leading-[1em] font-bold ">Welcome to Ranger State Park & Lodge</p>




        <p className="text-white font-inter text-[0.9375rem] not-italic font-normal my-[2em]">Nullam semper etiam congue lacinia nuncsit quam vel vestibulum faucibus dolor non semper leo quis retium quam lacus interdum ultrices velit elementum.</p>



        <div className="flex items-center ">

          <div className="flex flex-col border  border-[#F4EEA9] rounded-[0.25em]">


            <div className="flex items-center gap-[0.625em] py-[1em] px-[2em]">

              <p className="font-roboto text-[#F4EEA9] text-[0.9375rem] font-bold uppercase">Learn more</p>

              <img src="/home-learn-more.svg" alt="" width={14}/>


            </div>

 

          </div>


        </div>






      </div>







      <div className="flex flex-col bg-white  lg:h-[17.875em] py-[2em] px-[2em] lg:px-[2em] mt-[2em] lg:mt-[0em] rounded-[0.25em]">


        <div className="lg:flex lg:items-center  lg:gap-[1.5em] xl:gap-[1em]  ">



          {/* <div className="flex flex-col w-full ">

            <div className="flex items-center justify-between border border-[#50B498] green  border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em]">

              <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">Check-in</p>
              <img src="/home-book-now.svg" alt="" width={14} className=""/>


            </div>



          </div> */}


          <div className="relative flex flex-col w-full">
            {/* Trigger div */}
            <div className="flex items-center justify-between  border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em] ">
              <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">
                {selectedDate || "Check-in"}
              </p>
              <img src="/home-book-now.svg" alt="" width={14}  />
            </div>

            {/* Native date picker */}
            <input
              type="date"
              id="nativeDatePicker"
              className="absolute inset-0 opacity-0 cursor-pointer  "
              onChange={handleDateChange}
            />
          </div>




          <div className="relative flex flex-col w-full">
            {/* Trigger div */}
            <div className="flex items-center justify-between  border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em] ">
              <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">
                {selectedDateTwo || "Check-out"}
              </p>
              <img src="/home-book-now.svg" alt="" width={14}  />
            </div>

            {/* Native date picker */}
            <input
              type="date"
              id="nativeDatePicker"
              className="absolute inset-0 opacity-0 cursor-pointer  "
              onChange={handleDateChangeTwo}
            />
          </div>




        </div>



        <div className="sm:flex sm:items-center sm:gap-[1em] mt-[2em] sm:mt-[1em]">


          <div className="flex flex-col w-full ">

            <div className="flex items-center  justify-between border border-[#50B498] green  border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em]">

              <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">Adults</p>
              <img src="/home-dropdown.svg" alt="" width={14}/>


            </div>



          </div>



          <div className="flex flex-col w-full mt-[1em] sm:mt-[0em]">

            <div className="flex items-center justify-between border border-[#50B498] green  border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em]">

              <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">Check-out</p>
              <img src="/home-dropdown.svg" alt="" width={14}/>


            </div>



          </div>




          <div className="flex flex-col w-full mt-[1em] sm:mt-[0em]">

            <div className="flex items-center justify-between border border-[#50B498] green  border-b-2 border-b-[rgba(16,34,29,0.60)] py-[1em]">

              <p className="whitespace-nowrap text-[rgba(16,34,29,0.60)] font-open-sans text-[0.9375rem] not-italic font-normal">Check-out</p>
              <img src="/home-dropdown.svg" alt="" width={14}/>


            </div>



          </div>







        </div>








        <div className="flex items-center  mt-[2em]">

          <div className="flex flex-col w-full   bg-[#389844] rounded-[0.25em]">


            <div className="flex items-center gap-[0.625em] py-[1em] px-[2em] justify-center">

              <p className="font-roboto text-white text-[0.9375rem] font-bold uppercase ">Learn more</p>

              <img src="/home-book-now-left.svg" alt="" width={14}/>


            </div>

 

          </div>


        </div>


  




      </div>







    </div>




    
    
    
    
  </>)
}