import { useState } from "react";

function Chatbot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  return (
    <div>
      <h4>Safety Assistant</h4>
      <div style={{ height: "100px", border: "1px solid gray", overflowY: "scroll" }}>
        {chat.map((c, i) => <p key={i}>{c}</p>)}
      </div>

      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={() => {
        setChat([...chat, "You: " + msg, "Bot: Stay on well-lit roads."]);
        setMsg("");
      }}>
        Send
      </button>
    </div>
  );
}

export default Chatbot;
