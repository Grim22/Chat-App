import Input from "./Input";
import { ChatContext } from "../ChatContext"
import { useContext } from "react";
import Messages from "./Messages";


function Chat() {

    const { data } = useContext(ChatContext);

  return (
    <div className="chat flex flex-col p-0  z-10">
        <div className="chat-nav w-full h-[10vh] p-5 lg:h-[10vh] bg-base-200 flex flex-row items-center">
            <div className="name-container w-2/6 text-primary text-xl font-semibold">
                <span>{data.user.displayName}</span> 
            </div>
            <ul className="buttons-container w-4/6 flex items-center justify-end">
                <li><label htmlFor="my-drawer-2" className="btn btn-primary btn-sm drawer-button lg:hidden">Contact List</label></li>
            </ul>
        </div>
        <div className="chat-body w-full h-[80vh] lg:h-[72vh] overflow-y-scroll">
           <Messages/>
        </div>
        <div className="chat-input w-full h-[10vh] lg:h-[10vh] flex items-center px-2">
            <Input/>
        </div>
    </div>
  )
}

export default Chat