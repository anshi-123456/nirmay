// Simple chatbot behaviour
function sendMessage() {
  const input = document.getElementById('userInput');
  const chatWindow = document.getElementById('chatWindow');
  const text = input.value.trim();
  if (text === '') return;

  // User message
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.innerText = text;
  chatWindow.appendChild(userMsg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  input.value = '';

  // Simulate bot reply
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.innerText = 'Thank you! We will connect you to a doctor soon.';
    chatWindow.appendChild(botMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 500);
}

// Optionally get patient camera feed in the patient video box
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => {
    const patientVideo = document.getElementById('patientVideo');
    if (patientVideo) patientVideo.srcObject = stream;
  })
  .catch(err => console.log('Camera access denied:', err));
