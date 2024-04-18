
import { useContext, useState } from 'react'
import { collection, query, where, getDoc, setDoc, serverTimestamp, doc, updateDoc, getDocs} from "firebase/firestore";
import { db } from '../Firebase'
import { AuthContext } from '../AuthContext'

function Search() {

    const [username,setUsername] = useState("")
    const [user,setUser] = useState (null)
    const [err,setErr] = useState(false)

    const {currentUser} = useContext(AuthContext)

    const handleSearch = async () => {
        const q= query(collection(db, "users"),
        where("displayName", "==", username)
        );

        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            setUser(doc.data())
            });
        }catch(err){
            setErr(true);
        }
       
    };

    const handleKey = (e) => {
            handleSearch();
    };

    const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid 
        ? currentUser.uid + user.uid 
        : user.uid + currentUser.uid;
        try{
            const res = await getDoc(doc (db, "chats", combinedId));

            if(!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc (db, "chats", combinedId), { messages: [] });

                //create user chats
                await updateDoc(doc (db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });

                await updateDoc(doc (db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
            }
        } catch (err) {}
       setUser(null)
       setUsername("")
    };

  return (
    <div className="search-bar-container h-auto flex flex-col p-5 border-b-2 border-base-100">
        <input onKeyUp={handleKey} 
                onChange={e=>setUsername(e.target.value)} 
                type="text" 
                placeholder='Find a user' 
                value={username}
                className='input input-md h-10 input-bordered w-full'/>
        {err && <span>User not found!</span>}
        {user && <div onClick={handleSelect} className="profile-container flex pt-5 items-center">
                    <div className="avatar-container mr-5">
                        <img src={user.photoURL} className='h-12 w-12 object-cover rounded-full' />
                    </div>
                    <div className="name-container">
                        <span className='text-primary text-lg font-semibold w-full flex justify-start '>{user.displayName}</span>
                    </div>
                </div>}
    </div>
  )
}

export default Search