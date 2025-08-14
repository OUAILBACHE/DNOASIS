document.addEventListener('DOMContentLoaded', function() {
  fetch("domain_data.json")
    .then(res => res.json())
    .then(data => {
      // Update table
      let tbody = document.querySelector("#domainsTable tbody");
      data.forEach(row => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${row["Domain"]}</td><td>${row["Buy Now Price"]}</td>`;
        tbody.appendChild(tr);
      });

      // Update DOM elements by data-domain
      data.forEach(entry => {
        const domainElem = document.querySelector(`[data-domain="${entry.Domain}"]`);
        if (domainElem) {
          // Update price
          const priceElem = domainElem.querySelector('.price-value');
          if (priceElem) priceElem.textContent = entry["Buy Now Price"];

          // Update min offer if exists
          if (entry.min_offer) {
            let minOfferElem = domainElem.querySelector('.min-offer-value');
            if (!minOfferElem) {
              // Create min offer element if it doesn't exist
              const p = document.createElement('p');
              p.innerHTML = `Min Offer: $<span class="min-offer-value">${entry.min_offer}</span>`;
              const optionsElem = domainElem.querySelector('.options');
              if (optionsElem) {
                domainElem.insertBefore(p, optionsElem);
              } else {
                domainElem.appendChild(p);
              }
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
