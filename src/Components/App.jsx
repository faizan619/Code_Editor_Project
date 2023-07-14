import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Screens/HomePage"
import Menu from "./Menu"
import ErrorPage from "./Screens/ErrorPage"



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
