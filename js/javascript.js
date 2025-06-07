
const toggle = document.getElementById('theme-toggle-checkbox');

toggle.addEventListener('change', function () {
  if (this.checked) {
    document.body.style.backgroundColor = '#F9E1B5'; 
  } else {
    document.body.style.backgroundColor = '#ba8150'; 
  }
});
