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

    function triggerHeartAnimation() {
  for (let i = 0; i < 5; i++) { // more hearts each time
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
      heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

      const heartIcon = document.createElement('span');
      heartIcon.textContent = '❤️';

      heart.appendChild(heartIcon);
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 200);
  }
}
