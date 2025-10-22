const API_KEY = 'NxueYMHP5pJVc8vP4BcrVkGMHzhezeQZlxhjPO5PGRBjoxtMIefhCCAD';

fetch('https://api.pexels.com/v1/search?query=technology&per_page=1', {
  headers: { Authorization: API_KEY }
})
.then(res => res.json())
.then(data => {
  document.getElementById('backgroundImage').style.backgroundImage =
    `url(${data.photos[0].src.landscape})`;
});

function recommendProduct() {
  const query = document.getElementById('userQuery').value.toLowerCase();
  let recommendation = '';

  if (query.includes('ai')) {
    recommendation = 'Try Rabbit R1 or Humane AI Pin.';
  } else if (query.includes('quantum')) {
    recommendation = 'Explore IBM Quantum or D-Wave Leap.';
  } else if (query.includes('phone')) {
    recommendation = 'Check out Nothing Phone 2 or Pixel 8 Pro.';
  } else {
    recommendation = 'Explore our categories for trending tech.';
  }

  document.getElementById('productCard').innerText = recommendation;
}
