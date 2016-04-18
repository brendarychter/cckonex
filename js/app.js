(navigator.onLine) ? console.log("hay señal") : console.log("no hay");
localStorage.setItem("nombre", "Brenda");


$(document).on("mobileinit", function () {
    $.mobile.ignoreContentEnabled=true;
    $('#search-info').bind( "click", function(event, ui) {
  		alert('hl')
	});

});