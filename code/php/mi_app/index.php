<?php
require_once 'config.php';
require_once INCLUDES_PATH . 'funciones.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi App PHP</title>
  <link rel="stylesheet" href="public/style.css">
</head>
<body>
  <h1>Bienvenido a Mi App PHP</h1>

  <form action="procesar.php" method="POST">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <button type="submit">Enviar</button>
  </form>

  <script src="public/script.js"></script>
</body>
</html>
