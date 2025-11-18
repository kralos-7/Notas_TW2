<?php
namespace App\Http\Controllers;

class UsuarioController {
    public function lista() {
        return [
            ['id'=>1, 'nombre'=>'Carlos'],
            ['id'=>2, 'nombre'=>'Ana']
        ];
    }
}
