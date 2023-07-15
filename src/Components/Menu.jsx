import { NavLink } from "react-router-dom"


export default function Menu() {
  return (
    <>
        <div className="header">
            <div className="image">
                <img src="/hacker.jpeg" height="60rem" width="100%" alt="alternative image" />
            </div>
            <ol className="listNav">
                <li><NavLink className="linkNav" to="/">Home</NavLink></li>
                <li><NavLink className="linkNav" to="/about">About</NavLink></li>
                <li><NavLink className="linkNav" to="/contact">Contact</NavLink></li>
            </ol>
            <div className="btngrpHeader">
              <button><NavLink to='codeeditor'>Started</NavLink></button>
            </div>
        </div>
        
    </>
  )
}
