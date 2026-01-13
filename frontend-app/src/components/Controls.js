import { useState } from "react";

function Controls() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [mode, setMode] = useState("walk");

  return (
    <div>
      <input placeholder="From" value={from} onChange={e => setFrom(e.target.value)} />
      <input placeholder="To" value={to} onChange={e => setTo(e.target.value)} />

      <select value={mode} onChange={e => setMode(e.target.value)}>
        <option value="walk">Walk</option>
        <option value="bike">Bike</option>
        <option value="car">Car</option>
      </select>

      <button onClick={() => alert(`Finding safe route from ${from} to ${to} by ${mode}`)}>
        Find Safe Route
      </button>
    </div>
  );
}

export default Controls;
