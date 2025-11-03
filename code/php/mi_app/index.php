<?php
include 'includes/funciones.php';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mi App PHP</title>
  <link rel="stylesheet" href="public/style.css">
</head>
<body>
  <h1>Bienvenido a Mi App PHP</h1>
  <form action="procesar.php" method="POST">
    <label>Nombre:</label>
    <input type="text" name="nombre" required>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>
