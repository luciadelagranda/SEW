var auxColor=0;

$(document).ready(function() {
$("#on").click(function(){
$("#Circulo").animate({left: "500px", height: "200px", width: "200px"},5000);
$("#Circulo2").animate({left: "500px", height: "200px", width: "200px"},10000);
});
$("#off").click(function(){
$("#Circulo").stop();
});
$("#off2").click(function(){
$("#Circulo2").stop();
});
$("#off3").click(function(){
$("*").stop();
});

$("#color").click(function(){
    if(auxColor==0){
    $("#Circulo").css("background", "#F291B5");
    $("#Circulo").css("border-color", "#40091D");
    $("#Circulo2").css("background", "#BACDEE");
    $("#Circulo2").css("border-color", "#8CB0EC");
    auxColor=1;
    }
    else{
    $("#Circulo2").css("background", "#FF622C");
    $("#Circulo2").css("border-color", "#2980b9");
    $("#Circulo").css("background", "#2980b9");
    $("#Circulo").css("border-color", "#FF622C");
    auxColor=0;
    }

});

});