import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Screens/HomePage"
// import Menu from "./Menu"
import ErrorPage from "./Screens/ErrorPage"
import About from "./Screens/About"
import Contact from "./Screens/Contact"
import CodeEditor from "./Screens/CodeEditor"
import Editor from "./Screens/Collaborative/Editor"
import Room from "./Screens/Collaborative/room"
import { Toaster } from "react-hot-toast"

export default function App() {
  return (
    <>
    <div>
      <Toaster position="top-right" toastOptions={{
        success:{
          theme:{
            primary:'#4aed88'
          }
        }
      }}></Toaster>
    </div>
    <BrowserRouter>
    {/* <Menu/> */}
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="codeeditor" element={<CodeEditor/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      <Route path="room" element={<Room/>}></Route>
      <Route path="/editor/:roomId" element={<Editor/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
