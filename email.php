<?php
$destino = "thomascaycedo19@outlook.com";
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nEmail: ". $email . "\nDireccion: ". $direccion . "\nTelefono: ". $telefono . "\nMensaje: " . $mensaje;
mail($destino,"Contacto",$contenido);
header("Location: http://tugruppo.com/formulario_enviado.html");
?> 
