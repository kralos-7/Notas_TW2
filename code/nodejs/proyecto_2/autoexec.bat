@echo off

@echo Ejecutar el dockerfile ...

docker build -t mariadbserver .

@echo Creando contenedor ...

docker run --rm --name=mdbserver -d -p 3306:3306 mariadbserver