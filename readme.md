# Prueba técnica
Adjunto encontrarás un archivo llamado students.json, este archivo contiene una estructura básica e intuitiva que servirá para hacer lo necesario en el desarrollo de la prueba.

## Consideraciones
1. El archivo students.json adjunto debe ser devuelto como resultado de una petición a un servicio local hecho con node.js, este podría ser en express.js o el de su preferencia.
2. Luego de tener listo el servicio, este deberá ser consumido desde una aplicación realizada en Angular 6+, la estructura del proyecto quedará a su gusto.
3. La aplicación en Angular deberá renderizar solo los objetos que contengan el campo active = true, los demás deberán ser omitidos.
4. El color de la letra del registro será determinado por el campo color de cada objeto, es decir, si el registro en la posición 0 tiene al atributo color en black, la letra de ese registro deberá mostrarse negra, o verde si el atributo es green.
5. Cada objeto tiene un atributo grades, este debe ser desplegado en una especie de detalle para cada registro, es decir, en la visualización inicial esta información de las notas no se debe mostrar; sólo se mostrará hasta que se aplique un clic sobre el registro, adicional las notas que estén por debajo de 3.0 deben ser mostrados en rojo, las que estén entre 3.0 y 3.9 en amarillo y por encima de 4.0 o igual deben mostrarse en verde.
6. La aplicación realizada en angular, deberá agregar una columna adicional que se llame promedio, esta será el promedio del atributo grades de cada objeto y aplica el mismo tema de visualización del punto anterior en cuanto a los colores.

## Notas
Extras:
1. La arquitectura de la aplicación en su conjunto se dejará a disposición del evaluado.
2. Puede utilizar CSS o SASS para el tema de los efectos visuales (SASS dará puntos extras).
3. Se debe poner mucho énfasis en la modularización del código.
4. Se pone especial cuidado a la documentación del código y declaración de variables en inglés.
5. Un plus son las pruebas unitarias del código (solo se deben hacer a las funciones relevantes de la aplicación)
6. A partir de la fecha de entrega de este test se tiene 2 días exactos para su culminación, una vez cumplido el tiempo se debe enviar el test a correo: 