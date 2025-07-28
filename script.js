<script>
fetch('domains.json')
  .then(res => res.json())
  .then(domains => {
    domains.forEach(domainData => {
      const domainDiv = document.querySelector(`.domain[data-domain="${domainData.domain}"]`);
      if (domainDiv) {
        // Update the price
        domainDiv.querySelector('.price-value').textContent = domainData.price;

        // Update the link dynamically
        const link = domainDiv.querySelector('a');
        link.href = `https://${domainData.domain}`;
        link.textContent = domainData.domain;
      }
    });
  })
  .catch(err => console.error('Failed to load domains.json:', err));
</script>
