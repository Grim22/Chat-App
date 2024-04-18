

function Chat() {
  return (
    <div className="chat flex flex-col p-0  z-10">
        <div className="chat-nav w-full h-[10vh] p-5 lg:h-[10vh] bg-base-200 flex flex-row items-center">
            <div className="name-container w-2/6 text-primary text-xl font-semibold">
                Jane 
            </div>
            <ul className="buttons-container w-4/6 flex items-center justify-end">
                <li className="px-4">button</li>
                <li><label htmlFor="my-drawer-2" className="btn btn-primary btn-sm drawer-button lg:hidden">Contact List</label></li>
            </ul>
        </div>
        <div className="chat-body w-full h-[80vh] lg:h-[72vh] overflow-y-scroll">
            <div className="chat chat-start ">
                <div className="chat-bubble ">It's over Anakin, <br/>I have the high ground.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble">You underestimate my power!</div>
            </div>
        </div>
        <div className="chat-input h-[10vh] lg:h-[10vh] flex items-center px-2">
            <div className="input-container grow pr-2">
                <input type="text" placeholder="Aa" className="input input-bordered input-xl w-full grow" /> 
            </div>
            <div className="buttons-container">
                <div className="send">
                    <label className="btn btn-primary">
                        SEnd
                    </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat