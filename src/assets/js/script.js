$(document).ready(function (){
    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
        // if( $("#menu").hasClass("menu-ativo")){
        //     $("#menu").removeClass("menu-ativo")
        // }else {
        //     $("#menu").addClass("menu-ativo")
        // }
    }) 
})

function mostrarMenu () {
    let menu = document.getElementById("menu")
   
    if (getComputedStyle (menu).display == 'none') {
        menu.style.display = 'flex';

    } else {
        menu.style.display = 'none';
    }

}

function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").Value

    alert (email)
    console.log(email)
}
