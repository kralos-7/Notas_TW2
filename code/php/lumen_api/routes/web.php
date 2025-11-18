<?php
$router->get('/hola', function () {
    return response()->json(['mensaje' => 'Hola desde la API con Lumen']);
});

$router->get('/usuarios', 'UsuarioController@lista');
