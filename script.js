<script>
fetch('domains.json') // Replace with the correct path
  .then(res => res.json())
  .then(data => {
    data.forEach(({ domain, price, min_offer }) => {
      const domEl = document.querySelector(`[data-domain="${domain}"]`);
      if (domEl) {
        if (price) domEl.querySelector('.price-value').textContent = price;
        if (min_offer) domEl.querySelector('.min-offer-value').textContent = min_offer;
      }
    });
  });
</script>
