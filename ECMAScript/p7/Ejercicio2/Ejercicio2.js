var meteo = new Object();
meteo.apikey = "8f1d75ca331fafca90d768c790148ead";
meteo.ciudad = "Oviedo";
meteo.unidades = "&units=metric";
meteo.idioma = "&lang=es";
meteo.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo.ciudad + meteo.unidades + meteo.idioma + "&APPID=" + meteo.apikey;
meteo.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";


meteo.cargarDatos = 
function(){
    $.ajax({
        dataType: "json",
        url: meteo.url,
        method: 'GET',
        success: function(data){
            meteo.datos = data;
            meteo.verJSON();
            meteo.verDatos();            
        },
        error:function(){
            document.write(meteo.error);    
        }
    });
}

meteo.verJSON = function(){
    $('.h2-json').append("Datos en JSON desde <a href='http://openweathermap.org'>OpenWeatherMap</a>");
    $('.h2-json2').append("JSON");
    var str = JSON.stringify(meteo.datos, null, 2);
    $('.json').append(str);
    $('#cargarJSON').attr("disabled", true);
}

meteo.verDatos = function(){
    $('.h3').append("Datos");
    $('.datos').append("<li>Ciudad: " + meteo.datos.name + "</li>");
    $('.datos').append("<li>País: " + meteo.datos.sys.country + "</li>");
    $('.datos').append("<li>Latitud: " + meteo.datos.coord.lat + " grados</li>");
    $('.datos').append("<li>Longitud: " + meteo.datos.coord.lon + " grados</li>");
    $('.datos').append("<li>Temperatura: " + meteo.datos.main.temp + " grados Celsius</li>");
    $('.datos').append("<li>Temperatura máxima: " + meteo.datos.main.temp_max + " grados Celsius</li>");
    $('.datos').append("<li>Temperatura mínima: " + meteo.datos.main.temp_min + " grados Celsius</li>");
    $('.datos').append("<li>Presión: " + meteo.datos.main.pressure + " milímetros</li>");
    $('.datos').append("<li>Humedad: " + meteo.datos.main.humidity + "%</li>"); 
    $('.datos').append("<li>Amanece a las: " + new Date(meteo.datos.sys.sunrise *1000).toLocaleTimeString() + "</li>"); 
    $('.datos').append("<li>Oscurece a las: " + new Date(meteo.datos.sys.sunset *1000).toLocaleTimeString() + "</li>"); 
    $('.datos').append("<li>Dirección del viento: " + meteo.datos.wind.deg + "  grados</li>");
    $('.datos').append("<li>Velocidad del viento: " + meteo.datos.wind.speed + " metros/segundo</li>");
    $('.datos').append("<li>Hora de la medida: " + new Date(meteo.datos.dt *1000).toLocaleTimeString() + "</li>");
    $('.datos').append("<li>Fecha de la medida: " + new Date(meteo.datos.dt *1000).toLocaleDateString() + "</li>");
    $('.datos').append("<li>Descripción: " + meteo.datos.weather[0].description + "</li>");
    $('.datos').append("<li>Visibilidad: " + meteo.datos.visibility + " metros</li>");
    $('.datos').append("<li>Nubosidad: " + meteo.datos.clouds.all + " %</li>");
};
