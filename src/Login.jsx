import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

function Login() {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
     const email = e.target[0].value
     const password = e.target[1].value

    try{
       await signInWithEmailAndPassword(auth, email, password)
       navigate("/home")
    }catch(err){
        setErr(true)
    }
  };

  return (
    <div className="form-container h-[100vh] flex items-center justify-center">
        <div className="form-wrapper flex flex-col items-center bg-base-300 p-12 gap-5 rounded-xl">
            <span className="logo text-3xl font-bold italic text-primary">CONVO</span>
            <span className="title text-xl ">Login</span>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-5">
                <input type="email" placeholder='email' className="input"/>
                <input type="password" placeholder='password' className="input"/>
                <button className="btn btn-primary">Sign in</button>
                <div className="flex justify-center">
                    {err && <span>Something went wrong.</span>}
                </div>
            </form>
            <p>Don't have an account? <Link to ="/register" className="text-primary">Sign up</Link></p>
        </div>
    </div>
  )
}

export default Login