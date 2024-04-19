import { useEffect } from "react";
import { useState, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { AuthContext } from '../AuthContext'
import { ChatContext } from "../ChatContext";

function Chats() {

    const [chats,setChats] = useState([])

    const {currentUser} = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)

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


    const handleSelect = (u) => {
        dispatch({type: "CHANGE_USER", payload: u})
    }

  return (
    <div className="chats">
        <label htmlFor="my-drawer-2" className="drawer-button">
            {Object.entries(chats).map((chat) => (
                <div onClick={()=>handleSelect(chat[1].userInfo)} 
                    key={chat[0]}
                    className="profile-container h-24 flex p-5 items-center hover:bg-base-300 cursor-pointer">
                    <div className="avatar-container mr-5">
                        <img src={chat[1].userInfo.photoURL} className='h-12 w-12 object-cover rounded-full' />
                    </div>
                    <div className="name-container flex flex-col">
                        <span className='text-primary text-lg font-semibold w-full flex justify-start '>{chat[1].userInfo.displayName}</span>
                        <p className="">{chat[1].lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </label>
    </div>
  )
}

export default Chats