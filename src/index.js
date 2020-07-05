function sendMessage() {
  const msg = document.getElementById("chatInput").value
  addMessage(`You: ${msg}`)
  document.getElementById("chatInput").value = ""
}

function addMessage(message) {
  const newMsg = document.createElement("p")
  newMsg.innerText = message
  const messages = document.getElementById("messages")
  messages.appendChild(newMsg)
}
