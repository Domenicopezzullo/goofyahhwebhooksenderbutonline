function sendMessage() {
    const webhookInput = document.getElementById('webhookInput');
    const messageInput = document.getElementById('messageInput');
  
    const webhookUrl = webhookInput.value.trim();
    const message = messageInput.value.trim();
  
    if (!webhookUrl || !message) {
      alert('Please enter both webhook URL and message.');
      return;
    }
  
    const requestData = {
      content: message,
    };
  
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      alert('Message sent successfully!');
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Error sending message. Please check your webhook URL and try again.');
    })
    .finally(() => {
      // Clear input fields after sending or encountering an error
      webhookInput.value = '';
      messageInput.value = '';
    });
  }
  