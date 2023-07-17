// const socketRef = useRef(null);
// useEffect(()=>{
  //   const init = async ()=>{
    //     socketRef.current = await initSocket();
    //     socketRef.current.emit('join');
    //   }
    //   init();
    // },[])
    
    // eslint-disable-next-line no-unused-vars
    // import { useRef } from "react"
    // import { useEffect } from "react";
    // import { initSocket } from "../../../socket";
import { useState } from "react"
import Clients from "./Clients"
import EditorPage from "./EditorPage"


export default function Editor() {
  
  const [clients,setclients] = useState([
    {socketId:1,user:'Faizan B'},
    {socketId:1,user:'Aneeza A'},
    {socketId:1,user:'Salman S'},
    {socketId:1,user:'Maroof A'},
  ])

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/hacker.jpeg" alt="Logo" />
          </div>
          <h2>Connected...</h2>
          <div className="clientsList">
            {clients.map((client)=>{return(
              <Clients 
                  key={client.socketId} 
                  username={client.user} 
                />
              )})}
          </div>
        </div>
        <button className="btn copyBtn">COPY ROOM ID</button>
        <button className="btn leaveBtn">LEAVE</button>
      </div>
      <div className="editor">
              <EditorPage/>
      </div>
    </div>
  )
}
