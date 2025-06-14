
const toggle = document.getElementById('theme-toggle-checkbox');

toggle.addEventListener('change', function () {
  if (this.checked) {
    document.body.style.backgroundColor = '#F9E1B5'; 
  } else {
    document.body.style.backgroundColor = '#ba8150'; 
  }
});
if (!sessionStorage.getItem("welcomeShown")) {
  document.body.classList.add('modal-open');
  document.getElementById('welcome').style.display = 'flex';
} else {
  document.getElementById('welcome').style.display = 'none';
}
js
Копіювати
Редагувати
function closeWelcome() {
  document.getElementById('welcome').style.display = 'none';
  document.body.classList.remove('modal-open');
  sessionStorage.setItem("welcomeShown", "true");
}