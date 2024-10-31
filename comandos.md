Aplicación CRUD con Prisma
i- npx create-next-app nextjs-prisma-crud (usar Eslint en la instalación darle "y")
 ii- npm install prisma -D
  iii- npx prisma init --datasource-provider sqlite
  iv- npx prisma migrate dev --name init

1- borrar lo de page.js y colocar un HomePage
2- renombrar a page.jsx y colocar Tasks (Tareas). Renombrar a layout.jsx
3- borrar en globals.css todo menos lo de tailwind y colocar un body para bg oscuro
4- creo carpeta new con page.jsx con el con el componente newPage(formulario de tareas), carpeta bout con page.jsx. Crear rutas de BE: carpeta api con carpeta tasks y route.js con la ruta GET que tiene un Nextresponse: puerto3000/api/tasks muestra la respuesta del NextResponse
5- Añado Prisma (orm módulo) npm install prisma -D y npx prisma init --datasource-provider sqlite (para no instalar una base de datos se pone sqlite). Se crea sola la carpeta prima y un .env (variable de entorno). Agregar la extensión de prisma en VSC.
6- crear model task {id title description createdAt} en schema.prisma que está dentro de carpeta prisma. Se descrie que tipo de dato recibirá cada parámetro de la tarea.
7- npx prisma migrate dev --name init que crea la base de datos dev.db es donde se guardaran los datosy un módulo de npm. Carpeta migrations: donde están todas las modificaciones que necesita el proyecto, trasnforma lo de prisma a SQL. 
8- instalar extensión SQLite viewer para ver la tabla de tareas. o npx prisma studio para ver la db. Se puede ver en otra consola la db con prisma studio
9- crear Rest API de BE: en route.js dentro de carpetas api/tasks: funciones GET y POST y otra en api/tasks/[id] con exportación de funciones GET PUT y DELETE (por cada id de tarea)
10- crear archivo de comunicación: crear carpeta libs con prisma.js donte importo de @prisma/client {PrismaClient} que se instancia y se exporta como la constante prisma. Esto permite la conexión con la db 
11- importar prisma en los route.js de api/tasks y api/tasks/[id] para relizar las peticiones. Por ejemplo: en GET de tasks se pide asincronamente findMany() para ver todas las tasks y se pueden ver los arreglos de tareas en el navegador al ir a 3000/api/tasks. En POST hay que hacer una request body y pasar el objeto a json, se crea con .create() y se setea que queremos poner en cada parámetro (id description). Se prueban con Thunder. Se agregarán los datos en ls db (ver en prisma). en tasks/[id] hay que usar el params.id para las peticiones ya que se maneja individualmente, pra GET (findeUnique()). Con DELETE es muy similar. Pero con delete() por lo que hay que poner un try catch para capturar el error con un NextResponse. En PUT hay que pasar el objeto requestbody a json. const data y se usa update y se le pasa data para que actualice con lo que tiene.

FE
en el componente cliente page.jsx de la carpeta app creo un formulario para crear y actualizar tareas. 
Se coloca un onSubmit con un prevent default en el formulario que tomará lo de e.target.algo.value de los imputs
se hace una petición fetch api/tasks con método POST con un body y un headers que luego se guarda en una const data como json para colocarla en las tareas junto a las que ya estaban por lo que se importa router desde next/navigation y se hace el router.push('/')
Fuera de la app/page.jsx que es un componente BE? hacemos el listado de tareas tomando las de la db. Se usa prisma para acceder y se hace un mapeo donde se van colocando las diferentes características de la tarea en elementos html, luego se separa en un componente FE (TaskCard)donde se pasa task por props para luego exportarla a app/page.jsx para que quede mas ordendado.
Se hace un router en TaskCard para que vaya a la tarjeta con el id de la misma por lo que se debe crear una carpta/tasks/edit/[id] con page.jsx donde importo NewPage de /new/page.jsx para poder tener el form para editar. Desde /new solo creo.


 