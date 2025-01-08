


export default function SingleBlogPostComment(){


  return (<>






    <div className="grid grid-cols-1 border border-[#50B498] green p-[2em] gap-[2em] mt-[2em] md:mx-auto ">



      <div className="grid grid-cols-1 ">

        <div className="flex flex-col">


          <textarea name="" id="" className="outline-none border-b-2 border-[rgba(16,34,29,0.60)] pt-[1em] pb-[4em] text-[rgba(16,34,29,0.60)] font-roboto text-[0.9375rem] not-italic font-normal resize-none" placeholder="Messages"></textarea>



        </div>


      </div>



      <div className="grid sm:grid-cols-3 gap-[1em]">


        <div className="flex flex-col">

          <input type="text" className="outline-none border-b-2 border-[rgba(16,34,29,0.60)] py-[1em] text-[rgba(16,34,29,0.60)] font-roboto text-[0.9375rem] not-italic font-normal " placeholder="Your Name"/>

        </div>


        <div className="flex flex-col">

          <input type="text" className="outline-none border-b-2 border-[rgba(16,34,29,0.60)] py-[1em] text-[rgba(16,34,29,0.60)] font-roboto text-[0.9375rem] not-italic font-normal " placeholder="Email Address"/>

        </div>




        <div className="flex flex-col">

          <input type="text" className="outline-none border-b-2 border-[rgba(16,34,29,0.60)] py-[1em] text-[rgba(16,34,29,0.60)] font-roboto text-[0.9375rem] not-italic font-normal " placeholder="Website (optional)"/>

        </div>



      </div>









    </div>
    
    
  </>)
}