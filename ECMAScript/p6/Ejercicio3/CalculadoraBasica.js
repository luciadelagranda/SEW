"use strict";
class Calculadora{
    constructor(){
        this.memoria=0;
    }
    calcular(){
        try{
        var str = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = eval(str);
        }catch(err){ 
        document.getElementById('pantalla').value = "ERROR";
        }
    }
    pintarValor(numero){
        var anterior = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = anterior.concat(numero);
    }
    limpiarPantalla(){
        document.getElementById('pantalla').value = null;
    }
    sumarMemoria(){
        this.numeroPantalla= parseInt(document.getElementById('pantalla').value);
        if(this.numeroPantalla>0 || this.numeroPantalla<0){
        this.memoria += this.numeroPantalla;
        }
    }
    mostrarMemoria(){
        document.getElementById('pantalla').value = this.memoria;
    }
    restarMemoria(){
        this.numeroPantalla= parseInt(document.getElementById('pantalla').value);
        if(this.numeroPantalla>0 || this.numeroPantalla<0){
        this.memoria -= this.numeroPantalla;
        }
    }
    limpiarMemoria(){
        this.memoria= 0;
    }
    
}
var calculadora = new Calculadora();