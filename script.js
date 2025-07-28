document.addEventListener('DOMContentLoaded', function() {
  fetch('domains.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      data.forEach(entry => {
        const domainElem = document.querySelector(`[data-domain="${entry.domain}"]`);
        if (domainElem) {
          // Update price
          const priceElem = domainElem.querySelector('.price-value');
          if (priceElem) priceElem.textContent = entry.price;
          
          // Update min offer if exists
          if (entry.min_offer) {
            let minOfferElem = domainElem.querySelector('.min-offer-value');
            if (!minOfferElem) {
              // Create min offer element if it doesn't exist
              const p = document.createElement('p');
              p.innerHTML = `Min Offer: $<span class="min-offer-value">${entry.min_offer}</span>`;
              domainElem.insertBefore(p, domainElem.querySelector('.options'));
            } else {
              minOfferElem.textContent = entry.min_offer;
            }
          }
        }
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
});
