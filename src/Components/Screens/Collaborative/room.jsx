import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";


export default function Room() {

    const navigate = useNavigate();
    const [roomId,setRoomId] = useState('');
    const [username,setusername] = useState('')

    const createNewRoom = (e)=>{
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id)
        // console.log(id)
        toast.success('Created a new room')
    }

    const joinRoom = ()=>{
        if(!roomId || !username){
            toast.error('Room ID & UserName is Required')
            return;
        }
        //Redirect
        navigate(`/editor/${roomId}`,{
            state: {
                // userName : username
                username,
            }
        })
    }

  return (
    <>
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="/hacker.jpeg" alt="Logo" />
                <h4 className="mainLabel">Paste Invitation Room Id</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="ROOM ID" onChange={(e)=>setRoomId(e.target.value)} value={roomId} />
                    <input type="text" className="inputBox" placeholder="USERNAME" onChange={(e)=>setusername(e.target.value)} value={username} />
                    <button className="btn joinBtn" onClick={joinRoom}>JOIN</button>
                    <span className="createInfo">
                        If You dont have an invite then create &nbsp;
                        <a onClick={createNewRoom} href="" className="createNewBtn">NEW ROOM</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>Build with 💛 &nbsp; By <a href="">Faizan Alam</a></h4>
            </footer>
        </div>
    </>
  )
}
