import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import { ChatContext } from "../ChatContext"


const Message = ({ message }) => {

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

console.log({message})
  return (
    <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
        <div className="message-info">
            <img src={message.senderId === currentUser.uid 
                      ? currentUser.photoURL 
                      : data.user.photoURL} alt="" />
            <span>Just now</span>
        </div>
        <div className="message-content">
            <p>{message.text}</p>
            {message.img && <img src={message.img} alt="" />}
        </div>
    </div>
  )
}

export default Message