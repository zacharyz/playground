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
    var apiKey = '844c54d33c43bdde4fa79ce68df6505d';
    var photoID = $(this).attr('id');
    var container= $(this);
    $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key='+apiKey+'&photo_id='+photoID+'&format=json&nojsoncallback=1',
      function(data){
        var photo = data.photo;
        var url = 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret+'_b.'+photo.originalformat;
        container.append('<img src ='+url+'>');
        container.append("<h2><span>"+photo.title._content+"</span></h2>");
       });
   });

});

