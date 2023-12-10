window.onload = function(){
    const menu = document.querySelector('.burger-menu-user');
    const usuario = document.querySelector('.usuario');
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const sectionMainHome = document.querySelector('.sec-carr')

    /* usuario.addEventListener('click', (e) => {
        menu.classList.toggle('deslizar');
        e.stopImmediatePropagation();
    });
    document.addEventListener('click', (e) => {
        if(e.target !== usuario){
            menu.classList.remove('deslizar')
        }
    }) */

    const menuHome = document.querySelector('.nav');

    usuario.addEventListener('click', (e) => {
        menuHome.classList.toggle('deslizar');
        body.classList.toggle('no-scroll');
        main.classList.toggle('filter');
        if(sectionMainHome){
            sectionMainHome.classList.toggle('filter')
        }
        e.stopImmediatePropagation();
    });
    document.addEventListener('click', (e) => {
        if(e.target !== usuario){
            menuHome.classList.remove('deslizar');
        }
    })
}