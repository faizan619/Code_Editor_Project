import { NavLink } from "react-router-dom"


export default function Menu() {
  return (
    <>
        <div className="header">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1678434763328-a20bae5940a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" height="60rem" width="100%" alt="alternative image" />
            </div>
            <ol>
                <li><NavLink className="linkNav" to="/">Home</NavLink></li>
                <li><NavLink className="linkNav" to="/about">About</NavLink></li>
                <li><NavLink className="linkNav" to="/contact">Contact</NavLink></li>
            </ol>
        </div>
        
    </>
  )
}
