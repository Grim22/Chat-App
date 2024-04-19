import { useContext, useEffect } from "react"
import { AuthContext } from "../AuthContext"
import { ChatContext } from "../ChatContext"
import { useRef } from "react"
import { serverTimestamp } from "firebase/firestore"


const Message = ({ message }) => {

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef()
  
  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message]);

  return (
    <div ref={ref} className={`message flex gap-5 px-3 chat ${message.senderId === currentUser.uid && "owner flex flex-row-reverse items-center justify-start"}`}>
        <div className="message-info flex  items-center">
            <img src={message.senderId === currentUser.uid 
                      ? currentUser.photoURL 
                      : data.user.photoURL} 
                      className="h-12 w-12 object-cover rounded-full"
                      />
        </div>
        <div className="message-content chat-bubble">
            <p className="text">{message.text}</p>
            {message.img && <img src={message.img} alt="" className="chat"/>}
        </div>
    </div>

   
    
  )
}

export default Message