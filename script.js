let messages = [];

fetch('messages.txt')
  .then(response => response.text())
  .then(data => {
    messages = data.split('\n').map(line => {
      return line.trim() === "Click here ❤️" 
        ? { text: line.trim(), side: "left", isHeart: true }
        : { text: line.trim(), side: "left" };
    });
  })
  .catch(error => console.error('Error loading messages:', error));



let index = 0;

function showMessage() {
    if (index >= messages.length) return;

    const msgData = messages[index];
    const msg = document.createElement("div");
    msg.classList.add("message", msgData.side);

    msg.innerHTML = `<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>`;
    document.getElementById("messages").appendChild(msg);

    const typingTime = Math.max(1000, msgData.text.length * 80);

    setTimeout(() => {
        msg.innerHTML = msgData.text;

        if (msgData.isHeart) {
            msg.classList.add("clickable-heart");
            msg.addEventListener("click", () => {
                msg.innerHTML = "You’ve captured my heart completely ❤️";
                msg.style.fontWeight = "bold";
                msg.style.fontSize = "1.3em";
                msg.classList.remove("clickable-heart");
            });
            document.getElementById("nextBtn").style.display = "none"; // hide button at the end
        }

    }, typingTime);

    index++;
}

// Event listener for Next button
document.getElementById("nextBtn").addEventListener("click", showMessage);

// Show the first message on page load
window.onload = showMessage;

