import { useContext, useState } from "react"
import { AuthContext } from "../AuthContext"
import { ChatContext } from "../ChatContext"
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../Firebase";
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);
    
    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const handleSend = async () => {

        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {

                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                        await updateDoc(doc (db, "chats", data.chatId),{
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            })
                        });
                    });
                    }
                );
    
        } else {
            await updateDoc(doc (db, "chats", data.chatId),{
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                })
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp()
        });

        await updateDoc(doc (db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("")
        setImg(null)
    };
    

  return (
    <div className="input bg-base-200 w-full flex items-center justify-between">
        <input type="text" 
                placeholder="Aa"
                value={text}
                onChange={e=>setText(e.target.value)}
                className="w-full"
                />
        <div className="send w-18 flex">
            <img src="" alt="" />
            <input type="file" 
                    id="file"
                    style={{display: "none"}}
                    onChange={e=>setImg(e.target.files[0])}
                    className="w-full"
                    />
            <label htmlFor="file" className="px-5" >
                <svg class="w-[29px] h-[29px] text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>    
                </svg>
            </label>
            <button onClick={handleSend} className="text-primary">Send</button>
        </div>
    </div>
  )
}

export default Input