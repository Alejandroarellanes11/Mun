function mostrarPergamino() {
    var pergamino = document.getElementById('pergamino');
    var abrirPergamino = document.getElementById('abrirPergamino');

    // Si el pergamino está cerrado, lo abrimos y cambiamos el texto del enlace
    if (pergamino.style.display === "none" || pergamino.style.display === "") {
        pergamino.style.display = "block";
        pergamino.classList.add("mostrar");
        abrirPergamino.innerHTML = "Cerrar el pergamino";
    } 
    // Si el pergamino está abierto, lo cerramos
    else {
        pergamino.style.display = "none";
        abrirPergamino.innerHTML = "Abrir el pergamino";
    }
}