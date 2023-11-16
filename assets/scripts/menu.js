function abrirMenu() {
    let menu = document.getElementById("menu");
    if(menu.style.display === 'none') {
        menu.style.display = 'block';
        document.getElementById("menu__icone").style.marginLeft = '45%';
    } else {
        menu.style.display = 'none';
        document.getElementById("menu__icone").style.marginLeft = '1%';
    }
}