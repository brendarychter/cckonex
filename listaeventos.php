<?php
	//database connection
	if( $link = mysqli_connect("localhost", "root", "", "Knx")){
		$consulta = "SELECT * FROM Eventos";	
		$response = mysqli_query($link, $consulta);
		//Converting data to json format
		$matriz = array();
		while($obj = mysqli_fetch_object($response)){
			$matriz[] = array('ID' => $obj->id_event, 'P' => utf8_encode($obj->event_name));
		}
		$datos = json_encode(array_values($matriz));
		echo /*"items".*/$datos;
	}else{
		echo("no se conecto");
	}
?>