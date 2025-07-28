fetch('./domains.json')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    data.forEach(entry => {
      const domainElem = document.querySelector(`[data-domain="${entry.domain}"]`);
      if (domainElem) {
        const priceElem = domainElem.querySelector('.price-value');
        if (priceElem) {
          priceElem.textContent = entry.price;
        }
      }
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
