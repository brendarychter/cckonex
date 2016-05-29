$(document).ready(function(){
    $.getJSON("listaeventos.php", function(resultados){
        
    	for (var i = 0; i < resultados.length; i++){
    		var obj = resultados[i];
            
    		//console.log(obj.date_time.getHours());
    		$("#lista").append("<div id=event-"+obj.id_event+">"+obj.event_name+"</div>")
            
            /*$.each(resultados[i], function(i, campo){
                $("#lista").append("<p>" + campo + " </p>");
            });*/
    	}
        var next_event = resultados[0];
        var minDate = (new Date(resultados[0].date_time)).getTime();
            console.log(minDate);
        for (var n = 1; n < resultados.length; n++){
            var dm = (new Date(resultados[n].date_time)).getTime();
            console.log(dm);
            if (dm < minDate){
                next_event = resultados[n];
                minDate = dm;
            }
        }

        $('.hour_next_event').append(next_event.date_time)
        $('.events-billboard').css('background-image', 'url(' + imageUrl + ')');
        console.log(minDate)
        console.log(next_event)
    });
});