/*(navigator.onLine) ? console.log("hay señal") : console.log("no hay") pantalla de no hay conexion y de intentar nuevamente;*/
//Guardar en localstorage el login así no se tiene que volver a loggear. 
//si no hay un id en el localstorage, mostrar la pantalla de login (ni bien empieza a usar la app y cuando cierra sesión)
//si hay algo en localstorage, si hay internet y si no hay internet. (refresco o no)
//http://docs.phonegap.com/en/1.0.0/phonegap_events_events.md.html
//document.addEventListener("deviceready", yourCallbackFunction, false);

/*window.addEventListener("load", onDeviceReady, true);
function onDeviceReady() {

    console.log('hola')
    $.getJSON("http://localhost/testing/web/listaproductos.php").done(mostrarProductos);
}*/
$(document).ready(function(){
    //Ejecutar sólo cuando se loggea
    //Redirect del login y signin solo cuando onsuccess
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

        function orderByDay(){
            resultados.sort(function(a,b){
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return new Date(a.date_time) - new Date(b.date_time);
            });
            return resultados;
        }
        function getEventList(){
            resultados = orderByDay();
            for (var i = 0; i < resultados.length; i++){
                var obj = resultados[i];
                var color;
                if (i % 2 == 0){
                    color = "#DDDDDD";
                }else{
                    color = "#C3C2C1";
                }
                $("#lista").append("<a href='#page-3' class='click-list' event-number='"+ i+"'><div class='container' style=background-color:"+color+" ><div class='hour' id=event-"+i+">"+ obj.day+'-'+obj.month + '</br>' + obj.hour+ "</div><span>"+obj.event_name+"</span></div></a>")
                
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
            console.log(parseInt($(this).attr('event-number')));
            //$('#lista').empty();
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

        function setThanksEvent(next_event){
            $('#title-thanks').append(next_event.event_name);
            $('#hour-thanks').append(next_event.day + '-' + next_event.month + '   ' + next_event.hour);
            $('#location-thanks').append(next_event.location);
            $('#price-thanks').append(next_event.price);
        }

        $('#thanks-redirect').on('click', function(){
            setThanksEvent(next_event);
            next_event = {};
            var info = $('input[name=access-radio]:checked', '#purchase-ticket-form').val(); 
            showThanksInformation(info);
        })

        function showThanksInformation(data){
            console.log(data)
            if (data == "acceder"){
                console.log("qr");
                $('#description-thanks').text("¡Presentá este código y accedé directamente al evento sin hacer fila!");
                //con información del recital y del usuario, por ahora es un número random
                $('#qrcode').qrcode(Math.random().toString());
                $('#qrcode').show();
            }else{
                //data == "retirar"
                console.log("mapa");
            }
        }
    })

});