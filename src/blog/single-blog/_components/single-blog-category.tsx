



export default function SingleBlogCategory(){

  return(<>


    <div className="flex flex-col border border-[#50B498] green mt-[4em]">


      <div className="lg:flex lg:items-center lg:justify-between p-[1em] border border-[#50B498] green">



        <div className="flex flex-col  border border-[#50B498] green">


          <div className="sm:flex sm:items-center sm:gap-[1em] sm:border border-[#50B498] green" >

            <p className="text-[#CA6702] font-roboto not-italic font-bold capitalize">Business,</p>
            <p className="text-[#CA6702] font-roboto not-italic font-bold capitalize">Technology,</p>
            <p className="text-[#CA6702] font-roboto not-italic font-bold capitalize">Food,</p>
            <p className="text-[#CA6702] font-roboto not-italic font-bold capitalize">Programming,</p>
            <p className="text-[#CA6702] font-roboto not-italic font-bold capitalize">Designer</p>


          </div>


        </div>




        <div className="flex flex-col">

          <div className="flex items-center border border-[#50B498] green gap-[1em] mt-[1em] lg:mt-[0em]">




            <p className="whitespace-nowrap">Share this :</p>
            <img src="/single-blog-facebook.svg" alt="" />
            <img src="/single-blog-twitter.svg" alt="" />
            <img src="/single-blog-instragram.svg" alt="" />
            <img src="/single-blog-youtube.svg" alt="" />




          </div>

        </div>

             





      </div>


    </div>
  </>)
}