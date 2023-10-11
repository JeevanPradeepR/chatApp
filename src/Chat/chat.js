import {useEffect, useState} from 'react';

function Chat(){
    const [chat,setChat] = useState([])
    const [typeChat, setTypeChat] = useState("")
    const [person, setPerson] = useState('')

    const getAllMessage=async()=>{
        const response = await fetch("https://chat-using-jsonserver.onrender.com/chats")
        const msgs = await response.json()
        setChat(msgs)
    }

    const postChat = async () =>{
        await fetch("https://chat-using-jsonserver.onrender.com/chats",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },body: JSON.stringify({name: person, message: typeChat})
        });
        getAllMessage()
    }

    useEffect(()=>{
        setTimeout(getAllMessage, 3000);
    })

    return(<div>
        Within Chat <br/>
        <input placeholder='type your name' onChange={e=>setPerson(e.target.value)}></input>
        <input placeholder='type your message' onChange={e=>setTypeChat(e.target.value)}></input>
        <button onClick={postChat}>Send</button>
        {chat.map((m)=>(<li>{m.message}&nbsp;&nbsp; -<b>{m.name}</b></li>))}
    </div>)
}
export default Chat;