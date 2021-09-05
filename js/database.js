var bandera = true;
 
const mysql = require('mysql');

   const connection = mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'poke195',
      database:'pawz_database'
   })
 
   connection.connect((err)=>{
      if(err) throw err
      console.log('la conexion funciona')
   })
 
   /* 
   console.log("Selecciona una de las opciones: \n1. Consultar BD \n2. Editar dato \n3. Agregar dato \n4. Borrar dato \n5. Salir");
   */

 do{
   
   let opcion = 1;
   
   //let opcion = prompt("Selecciona una de las opciones: \n1. Consultar BD \n2. Editar dato \n3. Agregar dato \n4. Borrar dato \n5. Salir");
   switch(opcion){
      case 1:
         connection.query('SELECT * from usuario', (err,rows) =>{
            if(err) throw err
            console.log('Los datos de la tabla son estos:')
            console.log(rows)
         })
      break;
      case 2:
         connection.query("UPDATE usuario SET Nombre = 'juan Perez' WHERE Nombre = 'Kenny'", (err,rows) =>{
            if(err) throw err
            console.log('Los datos de la tabla son estos:')
            console.log(rows)
         }); 
      break;
      case 3:
         connection.query("INSERT INTO usuario (IdUsuario, Nombre, Passwd, Correo, ImgPerfil, Ubicacion) VALUES (2, 'David', 'passpaws', 'dac@gmail.com', 'foto', 'Zapopan')", (err,rows) =>{
            if(err) throw err
            console.log('Los datos de la tabla son estos:')
            console.log(rows)
         }); 
      break;
      case 4:
         connection.query("DELETE FROM usuario WHERE Nombre = 'David'", (err,rows) =>{
            if(err) throw err
            console.log('Los datos de la tabla son estos:')
            console.log(rows)
         }); 
      break;
      case 5:
         bandera = false;      
         connection.end();
      break;         
      default:
      break;
   }
   
   bandera = false;
 }while(bandera)

 connection.end()
 