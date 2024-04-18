import { useEffect } from "react";
import { useState, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { AuthContext } from '../AuthContext'

function Chats() {

    const [chats,setChats] = useState([])

    const {currentUser} = useContext(AuthContext)

    useEffect(() =>{
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });
    
            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats()
    }, [currentUser.uid]);

  return (
    <div className="chats">
        {Object.entries(chats)?.map((chat) => (

        <div key={chat[0]}className="profile-container h-24 flex p-5 items-center">
            <div className="avatar-container mr-5">
                <img src={chat[1].userInfo.photoURL} className='h-12 w-12 object-cover rounded-full' />
            </div>
            <div className="name-container flex flex-col">
                <span className='text-primary text-lg font-semibold w-full flex justify-start '>{chat[1].userInfo.displayName}</span>
                <p className="">{chat[1].userInfo.lastMessage?.text}</p>
            </div>
        </div>
                    
            // <div key={chat[0]} className="user-chat">
            //     <img src={chat[1].userInfo.photoURL} alt="" />
            //     <div className="user-chat-info">
            //         <span>{chat[1].userInfo.displayName}</span>
            //         <p>{chat[1].userInfo.lastMessage?.text}</p>
            //     </div>
            // </div>
        ))}
    </div>
  )
}

export default Chats