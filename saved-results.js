// Function to save the result
function saveResult() {
  const resultMessage = document.getElementById('resultMessage').textContent;
  
  // Save the result to local storage
  localStorage.setItem('userResult', resultMessage);
  
  // You can also send the result to a server using fetch() here.
  // Replace 'your-server-url' with the actual URL of your server.
  fetch('https://script.google.com/macros/s/AKfycbxovh7e9DWH25qsjiVmEtH6_aCO-5ZHgFVOcan-YB1weUnvk0HNFlmhxx5IzCirgCPW8g/exec', {
    method: 'POST',
    body: JSON.stringify({ result: resultMessage }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.text())
  .then(data => {
    console.log('Result saved:', data);
  })
  .catch(error => {
    console.error('Error saving result:', error);
  });
}
