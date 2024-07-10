document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  fetch('https://script.google.com/macros/s/AKfycbyeDL5drikLxZTiQOyofijg6r_KiivPD6xA_7cFkAWEXLugucN85rbBK11QocWnGCxK/exec', {
    method: 'POST',
    body: JSON.stringify({ action: 'register', email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
  })
  .catch(error => console.error('Error:', error));
});

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  fetch('https://script.google.com/macros/s/AKfycbyeDL5drikLxZTiQOyofijg6r_KiivPD6xA_7cFkAWEXLugucN85rbBK11QocWnGCxK/exec', {
    method: 'POST',
    body: JSON.stringify({ action: 'login', email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      // Redirect to profile page or set session
      alert(data.message);
    } else {
      alert(data.message);
    }
  })
  .catch(error => console.error('Error:', error));
});
