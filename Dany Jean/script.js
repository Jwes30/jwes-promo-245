let menu = document.getElementById('menuNav-1');
let ouvri = document.getElementById('ouvri');
let femen = document.getElementById('femenBtn');

ouvri.onclick = openNav;
femen.onclick = closeNav;

function openNav(){
  menu.classList.add('active');
}

function closeNav(){
  menu.classList.remove('active');
}