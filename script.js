document.addEventListener('DOMContentLoaded',function(){
    const botonBarra = document.querySelector('.Barra_Boton');
    const barraLateral= document.querySelector('.barra_lateral');
    botonBarra.addEventListener('click',function(){
    
    //Cambios el valor de la propiedad left de la barra lateral para mostrar/ocultar la barra
    if(barraLateral.style.left=='0px' || barraLateral.style.left === '')
    {
    barraLateral.style.left= '-250px';
}else{
    barraLateral.style.left='0px';
}
    });
});
// Obtener el elemento de audio
var musica = document.getElementById("musica");

// Bajar el volumen a la mitad (0.5)
musica.volume = 0.5;

