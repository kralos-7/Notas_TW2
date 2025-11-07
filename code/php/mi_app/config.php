<?php
// =======================================
// Configuración general de la aplicación
// =======================================

// Mostrar errores (solo en desarrollo)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Zona horaria
date_default_timezone_set('America/Mexico_City');

// URL base (útil para enlaces o redirecciones)
define('BASE_URL', 'http://localhost/mi_app/');

// Directorios importantes
define('INCLUDES_PATH', __DIR__ . '/includes/');
define('PUBLIC_PATH', __DIR__ . '/public/');

// =======================================
// Configuración de base de datos
// =======================================
define('DB_HOST', 'localhost');
define('DB_NAME', 'nombre_base_datos');
define('DB_USER', 'usuario');
define('DB_PASS', 'contraseña');

// Conexión a la base de datos (opcional aquí o en otro archivo)
try {
    $conexion = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8",
        DB_USER,
        DB_PASS
    );
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error al conectar con la base de datos: " . $e->getMessage());
}

// =======================================
// Otras configuraciones opcionales
// =======================================

// Modo debug (útil si más adelante agregas logs o validaciones)
define('DEBUG_MODE', true);

// Configuración de sesiones
session_start();

// Idioma o formato de fecha
setlocale(LC_TIME, 'es_MX.UTF-8');

?>
