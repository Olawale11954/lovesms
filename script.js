let messages = [];
    let compliments = [];
    let currentMessageIndex = 0;
    let currentComplimentIndex = 0;

    // Load messages.txt
    fetch('messages.txt')
      .then(response => response.text())
      .then(data => {
        messages = data.trim().split('\n').filter(line => line.trim() !== '');
        displayMessage();
      });

    // Load compliments.txt
    fetch('compliments.txt')
      .then(response => response.text())
      .then(data => {
        compliments = data.trim().split('\n').filter(line => line.trim() !== '');
        displayCompliment();
      });

    function displayMessage() {
      const messageElement = document.getElementById('message');
      messageElement.classList.remove('fade-in');
      void messageElement.offsetWidth; // restart animation
      if (messages.length > 0) {
        messageElement.textContent = messages[currentMessageIndex];
      } else {
        messageElement.textContent = "No messages available.";
      }
      messageElement.classList.add('fade-in');
    }

    function displayCompliment() {
      const complimentElement = document.getElementById('compliment');
      complimentElement.classList.remove('fade-in');
      void complimentElement.offsetWidth; // restart animation
      if (compliments.length > 0) {
        complimentElement.textContent = compliments[currentComplimentIndex];
        triggerHeartAnimation();
      } else {
        complimentElement.textContent = "No compliments available.";
      }
      complimentElement.classList.add('fade-in');
    }

    function nextMessage() {
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      displayMessage();
    }

    function nextCompliment() {
      currentComplimentIndex = (currentComplimentIndex + 1) % compliments.length;
      displayCompliment();
    }
// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change every 4 seconds
}

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);


    

