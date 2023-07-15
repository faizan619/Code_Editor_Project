import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Screens/HomePage"
import Menu from "./Menu"
import ErrorPage from "./Screens/ErrorPage"
import About from "./Screens/About"
import Contact from "./Screens/Contact"
import CodeEditor from "./Screens/CodeEditor"


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="codeeditor" element={<CodeEditor/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
