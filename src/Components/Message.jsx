import { useContext, useEffect } from "react"
import { AuthContext } from "../AuthContext"
import { ChatContext } from "../ChatContext"
import { useRef } from "react"


const Message = ({ message }) => {

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef()
  
  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message]);

  return (
    <div className={`message px-3 ${message.senderId === currentUser.uid && "owner"}`}>
        <div className="message-info flex items-center">
            <img src={message.senderId === currentUser.uid 
                      ? currentUser.photoURL 
                      : data.user.photoURL} 
                      className="h-12 w-12 object-cover rounded-full"
                      />
            <span className="p-3">Just now</span>
        </div>
        <div className="message-content py-5">
            <p className="chat chat-bubble">{message.text}</p>
            {message.img && <img src={message.img} alt="" />}
        </div>
    </div>
  )
}

export default Message