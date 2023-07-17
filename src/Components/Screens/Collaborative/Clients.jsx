// import Avatar from "react-avatar"


// eslint-disable-next-line react/prop-types
export default function Clients({username}) {


  return (
    <div className="client">
            {/* <Avatar name={username} size={50} round="14px" /> */}
            <span name="userName">{username}</span>
    </div>
  )
} 
