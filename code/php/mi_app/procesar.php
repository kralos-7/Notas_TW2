<?php
include 'includes/funciones.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = limpiarDato($_POST['nombre']);
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Resultado</title>
</head>
<body>
  <h2>Hola <?php echo $nombre; ?>!</h2>
  <a href="index.php">Regresar</a>
</body>
</html>
