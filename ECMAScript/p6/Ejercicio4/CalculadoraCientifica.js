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

"use strict";
class CalculadoraCientifica extends Calculadora{
    constructor(){
        super();
    }
    
    guardarMemoria(){ 
        this.numeroPantalla= parseInt(document.getElementById('pantalla').value);
        if(this.numeroPantalla>=0){
        this.memoria = this.numeroPantalla;
        }
    }
    
    calcularSeno(){
        var anterior = parseInt(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = Math.sin(anterior);
    }
    
    calcularCoseno(){
        var anterior = parseInt(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = Math.cos(anterior);
    }
    
    calcularTangente(){
        var anterior = parseInt(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = Math.tan(anterior);
    }
    calcularPotenciaDos(){
        var anterior = parseInt(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = Math.pow(anterior,2);
    }
    
    calcularRaiz(){
        var anterior = parseInt(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = Math.sqrt(anterior);
    }
    
    calcularLog(){
        var anterior = parseInt(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = Math.log(anterior);
        
    }
    
    pintarPi(){
        var anterior = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = anterior.concat(Math.PI);
    }
    
    calcularFactorial(){
        try{
        var total= 1;
        var anterior = parseInt(document.getElementById('pantalla').value);
        if(anterior>=0){
        for(var i=1 ; i<=anterior; i++){
            total= total*i;
        }
        document.getElementById('pantalla').value = total;
        }else
            throw new Error();
        }catch(Err){
            document.getElementById('pantalla').value = "ERROR";
        }
        
    }
    
    cambioSigno(){
         var anterior = document.getElementById('pantalla').value;
         document.getElementById('pantalla').value = eval(anterior)*-1;
    }
    
}
var calculadora = new CalculadoraCientifica();