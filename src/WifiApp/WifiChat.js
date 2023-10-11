import { useEffect, useState } from "react";
import './wifiStyle.css'
function WifiChat(){
    const [chat, setChat] = useState([{message:'first'}])
    useEffect(()=>{
         logMovies()
    },[])
    const logMovies=async()=> {
        const response = await fetch("http://localhost:8080/get");
        const chatMsg = await response.json();
        console.log(chatMsg);
      setChat(chatMsg)
      }
    return(<div>
        WifiChat
        <br/>
        {chat && chat.map((c)=><div key={c.length}><div>{c.message.split('🗣')[1]}<blockquote>{c.message.split('🗣')[0]}</blockquote></div></div>)}

        <h2>Chat Messages</h2>

<div class="container">
  <p>Hello. How are you today?</p>
  <span class="time-right">11:00</span>
</div>

<div class="container darker">
  <p>Hey! I'm fine. Thanks for asking!</p>
  <span class="time-left">11:01</span>
</div>

    </div>)
}
export default WifiChat;
// 🗣 🫂 from Category People & ...