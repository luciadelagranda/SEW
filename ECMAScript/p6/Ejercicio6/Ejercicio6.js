"use strict";
class Juego {
    
    constructor (){
     this.startTime=new Date();
     this.endTime=new Date();
     this.startPressed=false;
     this.bgChangeStarted=false;
     this.maxWait=20;
     this.timerID;   
     this.randMULTIPLIER=0x015a4e35;
     this.randINCREMENT=1;
     this.today=new Date();
     this.randSeed=this.today.getSeconds();    
     this.ciculoColoreado=0;
    }

startTest()
{   
        this.circuloColoreado= Math.floor(Math.random()*(4 - 1))+ 1;
        if (document.getElementById){
            var circulo= "franja" + this.circuloColoreado;
	       document.getElementById(circulo).style.backgroundColor="pink";
        }
    
	this.bgChangeStarted=true;
	this.startTime=new Date();
    document.getElementById("aux").setAttribute("value", this.circuloColoreado);
}

 evaluar(responseTime)
{
	var responseString="";
	if (responseTime < 0.10)
		responseString="Super rápido!";
	if (responseTime >= 0.10 && responseTime < 0.20)
		responseString="No está nada mal!";
	if (responseTime >=0.20 && responseTime < 0.30)
		responseString="Hay que practicar más.";
	if (responseTime >=0.30 && responseTime < 0.60)
		responseString="Sigue intentandolo.";
	if (responseTime >=0.60 && responseTime < 1)
		responseString="Hay que mejorar esos reflejos.";
	if (responseTime >=1)
		responseString="Te has dormido?";

	return responseString;
}

stopTest(circuloPulsado)
{
	if(this.bgChangeStarted)
	{
        circuloPulsado = parseInt(circuloPulsado);
        if(circuloPulsado== document.getElementById("aux").getAttribute("value")){
		this.endTime=new Date();
		var responseTime=(this.endTime.getTime()-this.startTime.getTime())/1000;
        if (document.getElementById){
           var circulo= "franja" + this.circuloColoreado;
	       document.getElementById(circulo).style.backgroundColor="white";
        }
		alert("Tu tiempo de respuesta ha sido: " + responseTime + " segundos " + "\n" + this.evaluar(responseTime));
		this.startPressed=false;
		this.bgChangeStarted=false;
        }
        else{
            alert("Tienes que pulsar el circulo relleno");
            if (document.getElementById){
           var circulo= "franja" + this.circuloColoreado;
	       document.getElementById(circulo).style.backgroundColor="white";
        }
            this.startPressed=false;
		  this.bgChangeStarted=false;
        }

	}
	else
	{
		if (!this.startPressed)
		{
			alert("Presiona start para empezar el test.");
		}
		else
		{       
			clearTimeout(this.timerID);
			this.startPressed=false;             
			alert("Upsh has parado muy rápido!");
		}               
	}
}
    
randNumber()
{
	this.randSeed = (this.randMULTIPLIER * this.randSeed + this.randINCREMENT) % (1 << 31);
	return((this.randSeed >> 15) & 0x7fff) / 32767;
}

start()
{
	if(this.startPressed)
	{
		alert("Ya ha empezado!");
		return;
	}
	else
	{
		this.startPressed=true; 
		this.timerID=setTimeout('juego.startTest()', 6000*this.randNumber());
	}
}
}
var juego= new Juego();