
import ReactPlayer from "react-player"


export default function HomeActivtiesVideo(){


  return(<>


    <div className="flex flex-col mt-[4em] mb-[6.25em]">


      <div className="flex items-center justify-center border border-[#50B498] green">


        <ReactPlayer
          url={'https://www.youtube.com/watch?v=Bp-27oOhulg'}
          playing
          loop
          muted
        >


        </ReactPlayer>
            
            
            
      </div> 


    </div>
    
    
  </>)
}