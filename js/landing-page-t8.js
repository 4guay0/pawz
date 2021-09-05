//Validar los datos del formulario de register
function validarDatos(){
   let userName = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   let passwordVrf = document.getElementById("passwordVrf").value;
   
   if(password === passwordVrf){
      document.location.href = '/pawz/private/index.html';
      console.log("Deberia ir a inicio");
   }
   else{
      alert("Las contraseñas no coinciden, por favor verifique los datos");
   }
}