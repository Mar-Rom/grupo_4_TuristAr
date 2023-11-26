window.onload = function(){
    const menu = document.querySelector('.burger-menu');
    const usuario = document.querySelector('.usuario');

    usuario.addEventListener('click', (e) => {
        menu.classList.toggle('deslizar');
        e.stopImmediatePropagation();
    });
    document.addEventListener('click', (e) => {
        if(e.target !== usuario){
            menu.classList.remove('deslizar')
        }
    })
}