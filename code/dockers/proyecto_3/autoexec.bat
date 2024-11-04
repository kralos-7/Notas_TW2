@echo off

@echo Ejecutar el dockerfile ...

docker build -t mongoserver .

@echo Creando contenedor ...

docker run --rm --name=monguito -d -p 8083:27017 mongoserver