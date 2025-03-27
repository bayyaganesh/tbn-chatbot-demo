
function sendMessage() {
  const input = document.getElementById("user-input");
  const log = document.getElementById("chat-log");
  const userText = input.value.trim();
  if (!userText) return;
  log.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
  input.value = "";

  // Simulated AI response
  let response = "Thanks for your question! We'll get back to you.";
  if (userText.toLowerCase().includes("join")) response = "You can join by attending one of our events!";
  if (userText.toLowerCase().includes("what is")) response = "TBN is a local business networking group based in Tucson.";

  log.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;
  log.scrollTop = log.scrollHeight;
}

function submitLead() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  fetch("https://YOUR-N8N-WEBHOOK-URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  }).then(res => {
    if (res.ok) {
      alert("Thanks! Your message has been sent.");
    } else {
      alert("Oops, something went wrong.");
    }
  });
}
