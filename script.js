
function sendMessage() {
  var userInput = document.getElementById("userInput");
  var chatlog = document.getElementById("chatlog");

  var message = userInput.value;
  if (message.trim() !== "") {
    chatlog.innerHTML += "<div><b>You:</b> " + message + "</div>";
    let response = getBotResponse(message);
    chatlog.innerHTML += "<div><b>Bot:</b> " + response + "</div>";
    chatlog.scrollTop = chatlog.scrollHeight;
  }
  userInput.value = "";
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("hello")) return "Hi there!";
  if (input.includes("how are you")) return "I'm just a bot, but I'm good!";
  if (input.includes("bye")) return "Goodbye!";
  return "I don't understand that yet.";
}
