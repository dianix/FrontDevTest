$(document).ready(function () {
    $('select').material_select();

    $('.button-collapse').sideNav({
        menuWidth: 250, // ancho de sidebar
        edge: 'left', // sidebar aparece del lado izquierdo
        closeOnClick: true,
        draggable: true,
    });
    $('.modal').modal(); //para activar modales
});
