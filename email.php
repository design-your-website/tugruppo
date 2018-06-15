<?php
$destino = "thomascaycedo19@outlook.com";
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nEmail: ". $correo . "\nDireccion: ". $direccion . "\nTelefono: ". $telefono . "\nMensaje: " . $mensaje;
mail($destino,"Contacto",$contenido);
echo "<script type=''>
alert('Se ha enviado el formulario de forma correcta');
</script>"; 
?>
