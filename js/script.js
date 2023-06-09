<script>
    window.addEventListener('DOMContentLoaded', () => {
      const textContainer = document.getElementById('text-container');
      const mainText = document.getElementById('main-text');

      fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => {
          mainText.textContent = data['activity'];
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  </script>