import { NavLink } from "react-router-dom"


export default function HomePage() {
  return (
    <>
        <div className="mainContainer">
        <section className="section firstsection">
            <h1 className="title firstsectiontitle">Code Compiler</h1>
            <p className="firstSectionPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minus perferendis eum? Porro, eaque fugiat sunt error magnam molestiae doloremque praesentium enim quae amet ratione. Voluptas est repudiandae mollitia. Minima, nemo et aliquam reprehenderit libero, iste culpa facere nobis deleniti soluta perspiciatis atque voluptatum quasi magni amet eum. Enim ab, quae suscipit odio esse magnam doloribus est ducimus impedit a. Pariatur accusamus quos dolores possimus sunt in sed dignissimos quaerat atque commodi totam, perspiciatis, tempora doloremque iusto consequuntur? Totam, velit saepe provident obcaecati esse accusantium quos vitae asperiores deleniti alias voluptate nostrum libero minima laborum repellat odio fugit praesentium unde.</p>
            <button className="btn codeEditor"><NavLink className="linkNavFirstSection" to='codeeditor'>Code Editor</NavLink></button>
        </section>
        </div>
    </>
  )
}
