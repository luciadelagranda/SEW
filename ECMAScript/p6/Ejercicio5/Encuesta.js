"use strict";
class Fromulario{
    constructor(){
    }
    
    validar(){
        var numero;
        var letr;
        var letra;
        var expresion_regular_dni=/^\d{8}[a-zA-Z]$/;
       
        if(!document.f.terminos.checked){
           return false;
        }
        
        if(expresion_regular_dni.test(document.f.dni.value) == true){
            numero = document.f.dni.value.substr(0,document.f.dni.value.length-1);
            letr = document.f.dni.value.substr(document.f.dni.value.length-1,1);
            numero = numero % 23;
            letra='TRWAGMYFPDXBNJZSQVHLCKET';
            letra= letra.substring(numero,numero+1);
            if (letra!=letr.toUpperCase()) {
            alert('La letra del NIF no se corresponde');
            return false;
            }
        }else{
            alert('Dni no válido');
            return false;
        }
        
        return true;
    }
    
    enviar(){
        if(this.validar()){
            
            var listaFuncionalidad = document.getElementById("puntuacionFuncionalidad");
            
            var listaUsabilidad = document.getElementById("puntacionUsabilidad");
            
            var listaGeneral = document.getElementById("puntuacionGeneral");
            
            var funcionalidad= "%0A%0A--------FUNCIONALIDAD-------- " +  "%0APregunta 1: " + this.getRadioCheked(document.f.Fpregunta1) + "%0APregunta2: " + this.getRadioCheked(document.f.Fpregunta2) + "%0APregunta 3: " + this.getRadioCheked(document.f.Fpregunta3) +"%0AFuncionalidades a añadir: " + document.f.funcionalidadFalta.value + "%0ANotal funcionalidad: " + this.getValorSelecionadoLista(listaFuncionalidad);
            
            var usabilidad= "%0A%0A--------USABILIDAD-------- " +  "%0APregunta 1: " + this.getRadioCheked(document.f.Upregunta1) + "%0APregunta2: " + this.getRadioCheked(document.f.Upregunta2) + "%0APregunta 3: " + this.getRadioCheked(document.f.Upregunta3) +"%0ANotal usabilidad: " + this.getValorSelecionadoLista(listaUsabilidad);
            
            var general= "%0A%0A--------GENERAL-------- " + "%0AObservaciones " + document.f.observaciones.value +"%0ANotal general: " + this.getValorSelecionadoLista(listaGeneral);
            
            var media = eval(this.getValorSelecionadoLista(listaFuncionalidad)+ "+" +this.getValorSelecionadoLista(listaUsabilidad)+ "+" +this.getValorSelecionadoLista(listaGeneral))/3
            
            var notaMedia = "%0ANota media: " + media;
            
            
            var email = "%0A%0A--------DATOS--------" + "%0ADni: "+ document.f.dni.value + "%0ANombre: " + document.f.nombre.value + "%0AApellidos: " + document.f.apellidos.value + "%0AEmail: " + document.f.email.value + "%0AEdad: " + document.f.edad.value + "%0ASexo: " + this.getRadioCheked(document.f.sexo);
            
            
        window.open("mailto:luciadelagranda@gmail.com?subject=Respuestas&body=" + funcionalidad + usabilidad + general + notaMedia + email);
        }
    }
    
    
    getValorSelecionadoLista(lista){
        return lista.options[lista.selectedIndex].value;
    }
    
    getRadioCheked(lista){
        for(var i =0 ; i<lista.length; i++){
            if(lista[i].checked){
                return lista[i].value;
            }
        }
            
    }
    
    
    
    
}
var formulario = new Fromulario();