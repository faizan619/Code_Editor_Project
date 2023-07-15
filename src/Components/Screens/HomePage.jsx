import { NavLink } from "react-router-dom"


export default function HomePage() {
  return (
    <>
        <div className="mainContainer">
        <section className="section firstsection">
            <h1 className="title firstsectiontitle">Code Compiler</h1>
            <p className="firstSectionPara">A code editor website built with React that allows programmers to write code in JavaScript, C++, and Python. The website also supports collaboration, so programmers can work together on code projects online. The website is hosted on GitHub Pages.

            The code editor is highly customizable, so you can change the look and feel to match your preferences. The website is optimized for performance, so you can code without any lag. The code editor is backed by a large community of developers, so you can get help if you need it.</p>
            <button className="btn codeEditor"><NavLink className="linkNavFirstSection" to='codeeditor'>Code Editor</NavLink></button>
        </section>
        </div>
    </>
  )
}
