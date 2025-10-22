const burger = document.getElementById('burger');
const bandeau = document.getElementById('bandeau');

burger.addEventListener('click', () => {
  bandeau.classList.toggle('active');
});
