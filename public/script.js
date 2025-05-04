// script.js

// The generateToken function
function generateToken() {
    const payload = { user: 'john_doe' }; // Example payload (can be dynamic)
  
    fetch('/generate-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      const token = data.token;
      console.log('Generated JWT:', token); // Log token to console
  
      // Display the token on the page
      const tokenElement = document.createElement('p');
      tokenElement.textContent = `Generated JWT: ${token}`;
      document.body.appendChild(tokenElement);
      
      // Optionally, save to localStorage
      localStorage.setItem('jwt', token);
    })
    .catch(err => {
      console.error('Error generating token:', err);
    });
  }
  
  // Ensure the function is globally accessible
  window.generateToken = generateToken;
  