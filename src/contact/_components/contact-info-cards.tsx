



export default function ContactInfoCards(){


  return(<>

    <div className="grid lg:grid-cols-3 gap-[1.875em] border border-[#50B498] green lg:px-[5.625em] lg:relative lg:top-[-5.375em]">



      <div className="flex flex-col border border-[#50B498] green p-[2em] bg-white rounded-[0.25em] mt-[1.875em] lg:mt-[0em]" >


        <div className="flex items-center justify-center">

          <img src="/contact-info-address.svg" alt="" />


        </div>


        <p className="text-center mt-[1em] text-[#333] font-roboto text-[1.125rem] not-italic font-semibold " >Address</p>
        <p className="text-center text-[#333] font-inter not-italic font-normal ">021 Hollywood Boulevard, LA</p>



      </div>



      <div className="flex flex-col border border-[#50B498] green p-[2em] bg-white rounded-[0.25em]" >


        <div className="flex items-center justify-center">

          <img src="/contact-info-email.svg" alt="" />


        </div>


        <p className="text-center mt-[1em] text-[#333] font-roboto text-[1.125rem] not-italic font-semibold " >Email</p>
        <p className="text-center text-[#333] font-inter not-italic font-normal ">customer@example.com</p>



      </div>



      <div className="flex flex-col border border-[#50B498] green p-[2em] bg-white rounded-[0.25em]" >


        <div className="flex items-center justify-center">

          <img src="/contact-info-phone.svg" alt="" />


        </div>


        <p className="text-center mt-[1em] text-[#333] font-roboto text-[1.125rem] not-italic font-semibold " >Phone</p>
        <p className="text-center text-[#333] font-inter not-italic font-normal ">(021) 345-6789</p>



      </div>



    </div>
    
    
  </>)
}