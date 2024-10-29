npx create-next-app nextjs-prisma-crud
 npm install prisma -D
  npx prisma init --datasource-provider sqlite
  npx prisma migrate dev --name init

1- borrar lo de page.js y colocar un HomePage
2- renombrar a page.jsx y layout.jsx
3- borrar en globals.css todo menos lo de tailwind y colocar un body
4- creo paginas: newPage, About y carpeta api con task y route con la ruta GET
5- Prisma (módulo) npm install prisma -D y npx prisma init --datasource-provider sqlite
6- crear model task en schema.prisma
7- npx prisma migrate dev --name init que crea la base de datos dev.db y demás
8- instalar extensión prisma viewer o npx prisma studio para ver la db
9- crear Rest API: GET POST en tasks y otra en [id] con GET PUT y DELETE
10- crear carpeta libs con prisma y exportar 
11- importar prisma en las paginas para relizar las peticiones
12- desde route.js de api/tasks hago los GET y POST de las tasks
13- desde route.js de api/task/[id] hago el GET de la task