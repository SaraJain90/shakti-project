import { useState } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");

  return (
    <div>
      <h4>Favourite Contacts</h4>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => { setContacts([...contacts, name]); setName(""); }}>
        Add
      </button>

      <ul>
        {contacts.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  );
}

export default Contacts;
