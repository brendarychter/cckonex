<?php
	//database connection
	//("mysql.hostinger.com.ar", "u341454716_knx", "982451n-", "u341454716_knx")
	if( $link = mysqli_connect("localhost", "root", "", "Knx")){
		$consulta = "INSERT INTO usuarios (username, pass, mail) VALUES ('1', '2', '3')";
	}else{
		echo("no se conecto");
	}
?>