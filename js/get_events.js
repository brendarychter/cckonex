$(document).ready(function(){
    $.getJSON("listaeventos.php", function(resultados){
        
        resultados = formatDateAndTime();
        var next_event = getNextEvent();
        console.log(next_event.hour)
        getEventList();

        function formatDateAndTime(){
        var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            for (var n = 0; n < resultados.length; n++){
                var date = new Date(resultados[n].date_time);
                var dm = date.getTime();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var day = date.getDate() + 1;
                var month = months[date.getMonth()];

                if (minutes < 10)
                minutes = "0" + minutes

                resultados[n].hour = hours+':'+minutes;
                resultados[n].month = month;
                resultados[n].day = day;
            }  
            return resultados;          
        }

        function getNextEvent(){
            var next_event = resultados[0];
            var minDate = (new Date(resultados[0].date_time)).getTime();

            for (var n = 1; n < resultados.length; n++){
                var date = new Date(resultados[n].date_time);
                var dm = date.getTime();
                if (dm < minDate){
                    next_event = resultados[n];
                    minDate = dm;
                }
            }
            return next_event;
        }

        function getEventList(){
            for (var i = 0; i < resultados.length; i++){
                var obj = resultados[i];
                
                //console.log(obj.date_time.getHours());
                $("#lista").append("<div id=event-"+obj.id_event+"><a href='' class='show-next-event'><div class='hour'>"+ obj.hour+"</div>"+obj.event_name+"</a></div>")
                
                /*$.each(resultados[i], function(i, campo){
                    $("#lista").append("<p>" + campo + " </p>");
                });*/
            }            
        }

        //Current information
        $('.day_next_event').append(next_event.day + '-' + next_event.month);
        $('.hour_next_event').append(next_event.hour);
        $('.on-scene').append(next_event.event_name);
        $('.events-billboard').css('background-image', 'url(http://i.imgur.com/' + next_event.photo + ')');

        $('.show-next-event').on('click', function(){
            //Detail information
            $('#event-title-detail').append(next_event.event_name);
            $('#date-time-detail').append(next_event.day + '-' + next_event.month + '   ' + next_event.hour);
            $('#location-detail').append(next_event.location);
            $('#price-detail').append(next_event.price);
            $('#principal-description-detail').append(next_event.description);
            $('#sub-description-detail').append(next_event.sub_description);
            $('.detail-tickets').css('background-image', 'url(http://i.imgur.com/' + next_event.photo + ')');
        })

        //Checkout information
        $('#buy_tickets').on('click', function(){
            $('#title-checkout').append(next_event.event_name);
            $('#hour-checkout').append(next_event.day + '-' + next_event.month + '   ' + next_event.hour);
            $('#location-checkout').append(next_event.location);
            $('#price-checkout').append(next_event.price);
        })

        //Thanks information
        $('#buy-ticket-checkout').on('click', function(){
            $('#title-thanks').append(next_event.event_name);
            $('#hour-thanks').append(next_event.day + '-' + next_event.month + '   ' + next_event.hour);
            $('#location-thanks').append(next_event.location);
            $('#price-thanks').append(next_event.price);
        })
    });
});