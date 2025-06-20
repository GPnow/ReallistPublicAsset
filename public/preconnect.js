import subDomains from "../src/helpers/subdomains";

function addPreconnectLinks() {
    const head = document.head;
    subDomains.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = '';
      head.appendChild(link);
    });
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addPreconnectLinks);
  