function verifyNetwork(connection){
	if(connection){
		//stuff
		return true;
	}
}

function checkUserStatus(){
	if(verifyNetwork){
		if (user.logged){
			//trae el evento actual y siguiente en relacion con el horario
			refreshPrincipalEvent();
		}else{
			log_in();
		}
	}
}

function refreshPrincipalEvent(){
	
}



function log_in(){
	if(verifyNetwork){
		//Escribe en la base un nuevo usuario
		user.login();
	}
}
function refreshNews(conexion){

	if(verifyNetwork){
		//connect to database.
		loadWall();
		receiveNotifications();
	}else{
		//show the data existing before
		alertNoConnection();
	}
}
function loadWall(){
	
}

function receiveNotifications(){
	
}

function publishContent(){
	var action = //takePicture(); takeVideo();
	if(verifyNetwork){
		//send data to server
		sendNotification(action, username);
	}else{
		alert('your conotent will be published when connection is restored')
	}
}

function sendNotification(action, username){

}

function alertNoConnection(){
	alert('connection is missed');
}