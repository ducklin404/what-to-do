document.getElementById('getActivityBtn').addEventListener('click', async () => {
  const res = await fetch('/api');
  const data = await res.json();
  const mainText = document.getElementById('main-text');


  mainText.textContent = JSON.stringify(data, null, 2);
});