# exam_tomanji
## Primeros pasos...

Los pasos para ejecutar este repositorio son:
1. Clonar el repositorio en su computadora.
2. Ejecutar el comando npm install para tener las dependencias.
3. Tener su dispositivo o emulador listo.
4. En la raíz de la carpeta ejecutar npx react-native run-android


## Las vistas son:
- PlayersScreen: Pantalla inicial donde se podrán agregar jugadores a un evento.
- HistoryEventsScreen: Pantalla donde se muestran los eventos creados.
- HistoryPlayersScreen: Pantalla con los datos del evento (nombre, foto, jugadores, fecha).
- ResumeEventScreen: Pantalla del evento almacenado donde se podrá modificar a un jugador o agregar uno nuevo.


## El estado de la aplicación:
El estado de la aplicación se maneja con Context Api de react. 
<https://reactjs.org/docs/context.html>

## Para almacenar los datos:
Se implementó Firebase para guardar los datos e imágenes de la aplicación. <https://rnfirebase.io/>
