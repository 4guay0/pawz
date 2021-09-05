/* Funcion para detectar los datos que se enviaran por correo y a su vez envia el correo */
function enviarCorreo() {
  /* Se toman los datos que se enviaran por correo */
  let name = document.getElementsByTagName("input")[0].value;
  let email = document.getElementsByTagName("input")[1].value;
  let pNumber = document.getElementsByTagName("input")[2].value;
  let mess = document.getElementsByTagName("input")[3].value;
  
  /* Este objeto contien los datos que se enviaran a la API de EmalJs para darle el formato correspondiente al correo que nos llegara */
  let data = {
    name: name,
    email: email,
    message: mess,
  };
  
  /* Esta funcion es propia de la API que se esta usando para el envio del corro, el formato para la funcion es:
  emaijs.send(IdAPI, IdPlantillaAPI, DatosAEnviar, IdUsuario) */
  emailjs.send("pawMessage","template_yy4zfvf", data, "user_2wDdPWJ65gWxxaA6ZWMLm")
    /* Si la funcion anteriro se cumple se mostrara una alerta para notificar que el correo se envio de forma correcta */
    .then(function(response) {
      if(response.text === 'OK'){
        alert('El correo se ha enviado de forma exitosa');
      }
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    /* Si la funcion no se cumple se mostrara una alerta para notificar que ocurrio un problema al enviar el correo */
    }, function(err) {
      alert('Ocurrió un problema al enviar el correo');
      console.log("FAILED. error=", err);
    });
}
