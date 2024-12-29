// Initialize Blood Pressure Chart
const ctx = document.getElementById('bloodPressureChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 130, 140, 150, 160, 140],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Diastolic',
        data: [80, 85, 90, 95, 78, 85],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  },
});

// Chat Functionality
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');
const chatSendBtn = document.getElementById('chat-send-btn');

chatSendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    addMessage(message, 'user');
    chatInput.value = '';

    // Simple Bot Response
    setTimeout(() => {
      const botMessage = 'How can I assist you?';
      addMessage(botMessage, 'bot');
    }, 500);
  }
});

function addMessage(text, sender) {
  const message = document.createElement('div');
  message.textContent = text;
  message.className = sender === 'user' ? 'user-message' : 'bot-message';
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}
