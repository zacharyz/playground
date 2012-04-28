$(document).ready(function(){
  $(".image").hover(
    function () {
      $(this).find("h2").stop().fadeIn('fast');
    }, 
    function () {
      $(this).find("h2").stop().fadeOut('fast');
    }
  );
  $(".image").each(function() {
    var apiKey = '99ec590d0a9937053b6aa5049ed35e51';
    var photoID = $(this).attr('id');
    var container= $(this);
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key='+apiKey+'&photo_id='+photoID+'&format=json&nojsoncallback=1',
      function(data){
        var photo = data.photo;
        var url = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret+'_b.'+photo.originalformat;
        container.append('<img class="center" src ='+url+'>');
        container.append("<h2><span>"+photo.title._content+"</span></h2>");
      });
   });

});

