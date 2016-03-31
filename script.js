SC.initialize (
    {
    client_id: '74d351f3eade7d2af45e7ab779c2e38d'
    }
    );

$(document).ready(function(){
$( "#submit" ).click(function() {
    $("#list").empty();
  var x =  document.getElementById('valueA').value;
     var y =  document.getElementById('valueB').value;
    SC.get(
    '/tracks',{q: y, genre: x},
    function(tracks){
    for(var i=0; i< tracks.length; i++){
    var track = tracks[i];
    console.log(track.title);
        $("#list").append("<li>"+track.title+"</li>");
  
        }
      }
    );

});
});
