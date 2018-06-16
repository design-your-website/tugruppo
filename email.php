<?php
$destino = "gerencia@tugruppo.com";
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
$calendario = $_POST["calendario"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nEmail: ". $email . "\nDireccion: ". $direccion . "\nTelefono: ". $telefono . "\nFecha: ". $calendario. "\nMensaje: " . $mensaje;
mail($destino,"Contacto",$contenido);
header("Location: http://tugruppo.com/formulario_enviado.html");
?> 
