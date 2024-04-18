import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "./Firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


function Register() {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
       const displayName = e.target[0].value
       const email = e.target[1].value
       const password = e.target[2].value
       const file = e.target[3].files[0];

    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);

        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
        (error) => {
            setErr(true);
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                await updateProfile(res.user,{
                    displayName,
                    photoURL: downloadURL,
                });
                await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: downloadURL,
                });
                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/home")

            });
        }
    );
    }catch(err){
        setErr(true)
    }
};

  return (
    <div className="form-container h-[100vh] flex items-center justify-center">
        <div className="form-wrapper flex flex-col items-center bg-base-300 p-12 gap-5 rounded-xl">
            <span className="logo text-3xl font-bold italic text-primary">CONVO</span>
            <span className="title text-xl ">Register</span>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="text" placeholder='display name' className="input"/>
                <input type="email" placeholder='email' className="input"/>
                <input type="password" placeholder='password' className="input"/>
                <input  style={{display: "none"}} type="file" id="file"/>
                <label htmlFor="file" className="flex items-center justify-around gap-5 cursor-pointer">
                    <p className="text-sm">Upload Image</p>
                    <svg class="w-[29px] h-[29px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>    
                    </svg>
                </label>
                <button className="btn btn-primary">Sign up</button>
                <div className="flex justify-center">
                    {err && <span>Something went wrong.</span>}
                </div>
            </form>
            <p>You do have an account? <Link to="/" className="text-primary">Login</Link></p>
        </div>
    </div>
  )
}

export default Register