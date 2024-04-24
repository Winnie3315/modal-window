let ope = document.querySelector('.open-dialog');
let clos = document.querySelector('.close-dialog');
let sideDialog = document.querySelector('.side-dialog');
let btn = document.querySelector('.zayavka');
let fade = document.querySelector('.fade');
let x = document.querySelector('.x');

ope.onclick = () =>{
    sideDialog.classList.add('open');
}

clos.onclick = () =>{
    sideDialog.classList.remove('open');
}
  
btn.onclick = () => {
    fade.showModal();
}

x.onclick = () => {
    fade.close();
}