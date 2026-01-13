function SOSButton() {
  return (
    <button
      onClick={() => alert("🚨 SOS Sent to Emergency Contacts")}
      style={{ background: "red", color: "white", padding: "10px" }}
    >
      SOS
    </button>
  );
}

export default SOSButton;
