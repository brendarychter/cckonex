$(document).ready(function(){
    $.ajax({
        url: "listaeventos.php",
        type: "GET",
        dataType : "json",
    }).done(function( resultados ) {
        resultados = formatDateAndTime();
        var next_event = getNextEvent(0);
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
        function selectEventById(code){
            next_event = resultados[code];
            setDetailEvent(next_event);
        }
        
        function getNextEvent(num){
            next = resultados[num];
            var minDate = (new Date(resultados[num].date_time)).getTime();

            for (var n = 1; n < resultados.length; n++){
                var date = new Date(resultados[n].date_time);
                var dm = date.getTime();
                if (dm < minDate){
                    next = resultados[n];
                    minDate = dm;
                }
            }
            setFirstInfoNextEvent(next);
            return next;
        }

        function getEventList(){
            for (var i = 0; i < resultados.length; i++){
                var obj = resultados[i];
                
                $("#lista").append("<a href='#page-3' class='click-list event-title-detail' event-number='"+ obj.id_event+"'><div id=event-"+obj.id_event+"><div class='hour'>"+ obj.hour+"</div>"+obj.event_name+"</div></a>")
                
                /*$.each(resultados[i], function(i, campo){
                    $("#lista").append("<p>" + campo + " </p>");
                });*/
            }            
        }
        function setFirstInfoNextEvent(next_event){
            //Current information
            $('.day_next_event').append(next_event.day + '-' + next_event.month);
            //$('.show-next-event').attr('event-id', next_event.id_event);
            $('.hour_next_event').append(next_event.hour);
            $('.on-scene').append(next_event.event_name);
            $('.events-billboard').css('background-image', 'url(http://i.imgur.com/' + next_event.photo + ')');
        }

        $('.show-next-event').on('click', function(){
            setDetailEvent(next_event);
        })

        function setDetailEvent(next_event){
            //Detail information
            $('.event-title-detail').append(next_event.event_name);
            $('#date-time-detail').append(next_event.day + '-' + next_event.month + '   ' + next_event.hour);
            $('#location-detail').append(next_event.location);
            $('#price-detail').append(next_event.price);
            $('#principal-description-detail').append(next_event.description);
            $('#sub-description-detail').append(next_event.sub_description);
            $('.detail-tickets').css('background-image', 'url(http://i.imgur.com/' + next_event.photo + ')');
        }

        $('.click-list').on('click', function(){
            selectEventById(parseInt($(this).attr('event-number')));
        });
        
        function setCheckoutEvent(next_event){
            $('#title-checkout').append(next_event.event_name);
            $('#hour-checkout').append(next_event.day + '-' + next_event.month + '   ' + next_event.hour);
            $('#location-checkout').append(next_event.location);
            $('#price-checkout').append(next_event.price);
        }
        //Checkout information
        $('#buy_tickets').on('click', function(){
            setCheckoutEvent(next_event);
        })
    })

});