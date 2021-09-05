//1.- Install npm install -y
//2.- Install mysql npm install mysql

//3.- Require MySQL
const mysql = require('mysql')


//4.-Declare Conection, you need these elements in order to get the right conection.
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Nam1Sush12609',
  database:'pawz_database'

})

//5.-Establish connection with a promise
connection.connect((err)=>{
  if(err) throw err
  console.log('la conexion funciona')
})

//Query to insert into database
const insert = "INSERT INTO usuario (IdUsuario,Nombre,Passwd,Correo,ImgPerfil,Ubicacion) VALUES (1000, 'Kenny','12345','kenny@pawz.com','https://media.discordapp.net/attachments/850032849310449726/857307995947532298/Mask_Group.png','Guadalajara')"
connection.query(insert, (err, rows) => {
  if(err) throw err
})


//Query to select and show from database
connection.query('SELECT * from usuario', (err,rows) =>{
if(err) throw err
console.log('Los datos de la tabla son estos:')
console.log(rows)
console.log('La cantidad de resultados es:')
console.log(rows.length)
const usuario1 = rows[0]
console.log(`El correo del usuario es ${usuario1.Correo}`)
})


connection.end()
