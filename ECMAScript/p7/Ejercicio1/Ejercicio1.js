"use strict";
class Objeto {
    constructor () {
        this.auxColor=0;
    }
    mostrar(elemento){
        $(elemento).show();
    }
    ocultar(elemento){
        $(elemento).hide();
    }
    añadir(elemento){
        $(elemento).append(" . nuevo elemento añadido ");
    }
    eliminar(elemento){
        $(elemento).remove();
    }
    
    recorrerDOM(){
        $("*", document.body).each(function() {
         var etiquetaPadre = $("*", document.body).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("Etiqueta padre:<" + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName + "> valor :" ));
        });
        
    }
    
    
    cambiarColor(){
        $("*",document.body).each((function(){
    if(this.auxColor==0){
    $("*").css("color", "#F291B5");
    this.auxColor=1;
    }
    else{
    $("*").css("color", "darkgrey");
    this.auxColor=0;
    }

}));
    }
}
                           
var objeto = new Objeto();