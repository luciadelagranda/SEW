var programa = new Object();
programa.token = '14633526.f89ff53.838ca4fb599a41289de3c615b6003297'
programa.num_photos = 10;


programa.iniciar=function(){
    
    $('.p').removeAttr('hidden');
    $('.likes').removeAttr('hidden');
    $('.localizacion').removeAttr('hidden');
    $('.hash').removeAttr('hidden');
    $('footer').removeAttr('hidden');
    $('.button').attr('hidden', "");
    
    $.ajax({
	url: 'https://api.instagram.com/v1/users/14633526/media/recent',
	dataType: 'json',
	type: 'GET',
	data: {access_token: programa.token, count: programa.num_photos},
	success: function(data){
 		console.log(data);
        var foto = programa.getMaxLikes(data);
        $('h1').append(" @" + foto.user.username);
        $('.enlace').append(foto.caption.from.full_name);
        $('.enlace').attr('href',foto.link)
        $('.perfil').append('<img src="' +foto.user.profile_picture + '">');
        lat= foto.location.latitude;
        long= foto.location.longitude;
        $('.foto').append(
                '<li><img src="'+foto.images.standard_resolution.url+'"></li><li>Número de comentarios en la foto: ' + foto.comments.count + '</li>'
                + "<li>Número de likes en la foto: " + foto.likes.count +"</li>"
            );
        programa.iniciarMapa(foto.location.latitude,foto.location.longitude);
        $(".hashtag").append(" #" + foto.tags[0] );
        programa.getPhotoTag(foto.tags[0]);
		},
	error: function(data){
		console.log(data);
	}
});
}


programa.getPhotoTag=function(nombreTag){
$.ajax({
	url: "https://api.instagram.com/v1/tags/"+ nombreTag + "/media/recent",
	dataType: 'json',
	type: 'GET',
	data: {access_token: programa.token},
	success: function(data2){
 		console.log(data2);
        for( x in data2.data ){
        $('.fotoTags').append('<li><img src="'+data2.data[x].images.standard_resolution.url+'"></li>');}},
	error: function(data){
		console.log(data);
	}
});  
}



programa.getMaxLikes= function(data){
    var fotoMasLikes = data.data[0];
    var maxLikes= data.data[0].comments.count;
    
    for( x in data.data ){
        if(data.data[x].likes.count>maxLikes){
            fotoMasLikes = data.data[x];
            maxLikes = data.data[x].likes.count;
        }
}
    return fotoMasLikes;
}

programa.iniciarMapa=function(lat,long) {
        var uluru = {lat: lat, lng: long};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
