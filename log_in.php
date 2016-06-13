<?php
	//database connection
	//("mysql.hostinger.com.ar", "u341454716_knx", "982451n-", "u341454716_knx")
	//http://soyautodidacta.com/2013/03/insertar-datos-en-mysql-con-php-usando-ajax-para-evitar-recargar-la-pagina/
	//http://www.giantflyingsaucer.com/blog/?p=2574
	if( $link = mysqli_connect("localhost", "root", "", "Knx")){
		$consulta = "SELECT username, pass, FROM usuarios WHERE username = '1', pass = '2'";
	}else{
		echo("no se conecto");
	}
?>