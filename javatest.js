document.addEventListener('DOMContentLoaded', function() {
  const collapses = document.querySelectorAll('.collapse[data-transition-duration]');
  
  collapses.forEach(collapse => {
    const duration = collapse.getAttribute('data-transition-duration');
    collapse.style.setProperty('--collapse-transition-duration', duration);
  });
});