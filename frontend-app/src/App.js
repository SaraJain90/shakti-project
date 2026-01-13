import Controls from "./components/Controls";
import MapView from "./components/MapView";
import Contacts from "./components/Contacts";
import Chatbot from "./components/Chatbot";
import SOSButton from "./components/SOSButton";

function App() {
  return (
    <div style={{ padding: "10px" }}>
      <h2>SHAKTI – Safe Navigation</h2>

      <Controls />
      <MapView />
      <Contacts />
      <Chatbot />
      <SOSButton />
    </div>
  );
}

export default App;
