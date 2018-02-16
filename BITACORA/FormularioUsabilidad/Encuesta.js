"use strict";
class Fromulario{
    constructor(){
    }
    
    enviar(){
        
            var listaUsabilidad = document.getElementById("puntacionUsabilidad");
            
            var usabilidad= "%0A%0A--------USABILIDAD-------- " +"%0ANotal usabilidad: " + this.getValorSelecionadoLista(listaUsabilidad) + "%0AAspecto a mejorar: " + document.getElementById("mejoras").value;
            
            var email = "%0A%0A--------DATOS--------" + "%0ANombre: " + document.f.nombre.value + "%0AApellidos: " + document.f.apellidos.value + "%0AEmail: " + document.f.email.value + "%0AEdad: " + document.f.edad.value;
            
            
        window.open("mailto:luciadelagranda@gmail.com?subject=Respuestas&body=" + usabilidad + email);
    }
    
    
    getValorSelecionadoLista(lista){
        return lista.options[lista.selectedIndex].value;
    }
    
}
var formulario = new Fromulario();