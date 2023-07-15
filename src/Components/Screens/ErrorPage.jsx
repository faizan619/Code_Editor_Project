// import { gsap } from "gsap"
import { useNavigate } from "react-router-dom"


export default function ErrorPage() {
  const previous = useNavigate();

  return (
    <>
      <div className="errorContainer">
        <div className="errorPage">
          <div id="faizanAstro" className="astronauth"><img className="astronauthImg" src="/astronaut2.png" alt="astronauth"/></div>
          {/* <div className="astronauth1"><img className="astronauthImg1" src="/astronaut2.png" alt="astronauth"/></div> */}
          <div className="ErrorContent">
            <h1 className="pnf3">404</h1>
            <h1 className="pnf"><span className="pnf2">Page Not Found.</span> <br/><span className="autro"> The Astronaut is Trapped in Space</span></h1>
            <button onClick={()=>{
              previous(-1)
            }}>Go Back</button>
          </div>
        </div>
      </div>
    </>
  )
}