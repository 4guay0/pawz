function login(){
    //Obtener datos ingresados
    let user = document.getElementById("TextUser").value;
    let pass = document.getElementById("TextPass").value;

    //Variable para determinar si el login es aceptable
    var log = false;

    //Obteniendo los registros de localStorage
    /*var arrayOpte = JSON.parse(localStorage.getItem("arrayUser"));
    var arrayPwd = JSON.parse(localStorage.getItem("arrayPass"));*/

    const url = 'http://localhost:8085/demo/all_usuarios'

    var userreg;
    var passreg;
    
        fetch(url,{method: "GET"})
    .then(response => response.json())
    .then(data => {
        //resolve(data ? JSON.parse(data) : {})
        for(var i = 0;i<data.length;i++){
      userreg = data[i].nombre;
      passreg = data[i].passwd;
      if(userreg == user && passreg == pass){
        localStorage.setItem("Usuario",user);
        localStorage.setItem("Passwd",pass);
        log = true;
        location.href="../pawz/private/index.html";
      }
    }
    if(log != true){
    alert("Usuario y/o contraseña incorrectos");
    }
    })
    .catch(err=>console.log(err));

    /*for(var i=0;i<arrayOpte.length;i++){
        //console.log(arrayOpte[i]);
        //Comprobar datos ingresados con los registros
        if(arrayOpte[i] == user && arrayPwd[i] == pass){
            localStorage.setItem("Usuario",arrayOpte[i]);
            localStorage.setItem("Passwd",arrayPwd[i]);
            log = true;
            location.href="/private/index.html";
        }
    }
    if(log != true){
        alert("Usuario y/o contraseña incorrectos");
    }*/
}

    

//Asignar datos de usuario a la NavBar
function sessionInit(){
    document.getElementById("profileName").innerHTML = '<img src="/resources/vaca/Mask Group.png" style="width: 15%;"> '+ localStorage.getItem("Usuario");
}

//Función para las partes compartidas entre público y privado para definir Navbar a mostrar
function sessionInitPublic(){
    //Evitar que se muestren errores en caso de algún fallo
    try{
    let user = localStorage.getItem("Usuario");
    let pass = localStorage.getItem("Passwd");
    console.log(localStorage.getItem("Usuario"));

    if(localStorage.getItem("Usuario") != null && localStorage.getItem("Usuario") != ""){
       document.getElementById("navbarLogout").style.display = "none";
       document.getElementById("profileName").innerHTML = '<img src="/resources/vaca/Mask Group.png" style="width: 15%;"> '+ localStorage.getItem("Usuario");
    }
    else{
        document.getElementById("navbarLogin").style.display = "none";
    }
    }
    catch(error){
        document.getElementById("navbarLogin").style.display = "none";
        console.log(error);
    }    
}

//Desconectar el usuario
function logout(){
    localStorage.setItem("Usuario", "");
    localStorage.setItem("Passwd", "");
    location.href="../pawz/index.html";
}


//Código prototipo
/*
var arrayUser = ["David", "Yukie", "Kenny"];
var arrayPass = ["1234", "5678", "9012"];

//Set array
localStorage.setItem("arrayUser", JSON.stringify(arrayUser));
localStorage.setItem("arrayPass", JSON.stringify(arrayPass));

var arrayOpte = JSON.parse(localStorage.getItem("arrayUser"));

console.log(arrayOpte);

arrayOpte.push("Juan");
console.log(arrayOpte);
localStorage.setItem("arrayUser", JSON.stringify(arrayOpte));

 /*if((user == "Tadeo" || user == "David" || user == "Diego" || user == "Kenny" || user == "Lizbeth" || user == "Yukie") && pass == "123"){
        localStorage.setItem("Usuario",user);
        localStorage.setItem("Passwd",pass);
        //alert("login");
        location.href="/private/index.html";
    }
    else{
        alert("Usuario y contraseña incorrectos");
    }*/