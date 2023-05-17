let sidebar = document.querySelector('.sidebar');
let menuIcon = document.querySelector('#menu-icon');
let main = document.querySelector('.main');

menuIcon.addEventListener('click',()=>{
  sidebar.classList.toggle('small-sidebar');
  main.classList.toggle('large-main');
});