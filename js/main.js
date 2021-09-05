//Contador para Me Gusta
var contadorMeGusta = 0;
function cambiarMeGusta()
{
document.getElementById('contadorMeGusta').innerHTML = contadorMeGusta += 1;
}

//Contador para Compartir
var contadorCompartir = 0;
function cambiarCompartir()
{
document.getElementById('contadorCompartir').innerHTML = contadorCompartir += 1;
}

//Contador para Comentar
var contadorComentar = 0;
function cambiarComentar()
{
document.getElementById('contadorComentar').innerHTML = contadorComentar += 1;
}

function addItem(item){
   const itemHTML =
      '<br><br>\n' +
         '<div class="container">\n' +
            '<div class="row">\n' +
               '<div class="col-6" style="background-color: ; width:50%; height:100%">\n' +
                  '<img src="'+item.imagen +'" class="card-img-top" alt="image"; style="width:100%; height:100%">\n' +
               '</div>\n' +
               '<div class="col-6">\n' +
                  '<div class="row">\n' +
                     '<div class="col-2 publicacion_imagen" style="background-color:;">\n' +
                        '<img src="'+item.imagen_small +'" class="card-img-top" alt="image"; style="width:100%">' +
                     '</div>\n' +
                     '<div class="col-10" style="background-color;">\n' +
                        '<h5 class="publicacion_perfil">'+ item.perfil+'</h5> \n' +
                     '</div>\n' +
                     '<div class="col-12" style="background-color:;">\n' +
                        '<table class="tabla_contenido" style="height:140px; display: block; overflow-x:hidden;">\n' +
                           '<tr>\n' +
                           '<th>' + item.texto + '<h5 class="publicacion_hashtag"> Feeling: '+ item.hastag +'</h5>\n' + '</th>\n' +
                           '</tr>\n' +
                        '</table>\n' + 
                     '</div>\n' +   
                     '<div class="col-12" style="width: 100%;">\n' +
                     '</div>\n' +                   
                    
                      //Boton para agregar likes, aquì comienza       
                  
                  '<div class="col-4" style="width: 100%; background-color: ;">\n' +
                  '<button style="width:100%; border: none; background-color: white;" id="boton" onClick="cambiarMeGusta();"><img src="/resources/images/paw.png" class="card-img-top" alt="image"; style="width:80%"><div id="contadorMeGusta"></div>\n' +
                  '</button>\n'+
                  '</div>\n' +
                  //Aquì termina

                   //Boton para compartir, aquì comienza 
                  '<div class="col-4" style="width: 100%; background-color:;">\n' +
                  '<button style="width:100%; border: none; background-color: white; id="boton" onClick="cambiarCompartir();"> <img src="/resources/images/send.png" class="card-img-top" alt="image"; style="width: 80%"><div id="contadorCompartir"></div>\n' +
                  '</button>\n'+
                  '</div>\n' +
                  '<div class="col-4" style="width: 100%; background-color: ;">\n' +
                  //Aquì termina

                  //Boton para comentar, aquì comienza 
                  '<button style="width:100%; border: none; background-color: white; id="boton" onClick="cambiarComentar();"> <img src="/resources/images/chat_1.png" class="card-img-top" alt="image"; style="width:80%"><div id="contadorComentar">\n' +
                  //Aquì termina

                        '</button>\n'+
                     '</div>\n' +
                  '</div>\n' +
               '</div>\n' +
            '</div>\n' +
         '</div>'+
      '<br>\n';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'perfil':'Little_tiger',
   'like': 0,
   'chat': 0,
   'send': 0,
   'hastag':'#dissapointed',
   'imagen_small': '/resources/images/gatito_sm.png',
   'imagen':'/resources/images/gatito.png',
   'texto':'Oh my god Karen! I cant believe you are not going to give me the lasagna I asked you.'});

addItem({'perfil':'HenryDaFluff',
   'like': 0,
   'chat': 0,
   'send': 0,
   'hastag':'#brave #adventurous',
   'imagen_small': '/resources/images/perrito_sm.png',
   'imagen':'/resources/images/perrito.png',
   'texto':'Yesterday I went on a field trip with my humans. Almost caught a squirrel. This is not over Mr. Nuts'})

   addItem({'perfil':'Quack_quacker',
   'like': 0,
   'chat': 0,
   'send': 0,
   'hastag':'#joyful #relaxed',
   'imagen_small': '/resources/Pato/Mask Group.png',
   'imagen':'/resources/Pato/samuli-jokinen-yhywta2CzzI-unsplash.png',
   'texto':'After being in al the ponds of my city, I think this is my favorite. Next week I’ll come with some friends.'})

   addItem({'perfil':'ArtsyReptilian',
   'like': 0,
   'chat': 0,
   'send': 0,
   'hastag':'#wonderful #photogenic',
   'imagen_small': '/resources/lagartija/Mask Group.png',
   'imagen':'/resources/lagartija/mark-stoop-JAUFHzqZPd0-unsplash.png',
   'texto':'Today is the perfect day for a new profile arsy pic. I love how I look in this one.'})

   addItem({'perfil':'Little_teeth',
   'like': 0,
   'chat': 0,
   'send': 0,
   'hastag':'#hungry',
   'imagen_small': '/resources/hamster/Mask Group.png',
   'imagen':'/resources/hamster/jack-catalano-6aY_0S-epZQ-unsplash 2.png',
   'texto':'I’m very hungry at the moment, so please don’t say anything mean or I’ll get angry.'})

   addItem({'perfil':'Roni.Raccoony',
   'like': 0,
   'chat': 0,
   'send': 0,
   'hastag':'#desperate',
   'imagen_small': '/resources/Mapache/Mask Group.png',
   'imagen':'/resources/Mapache/quinten-de-graaf-Pa2xXa7tlFk-unsplash.png',
   'texto':'Where is the food? Has anyone got any food? My little paws need some food on them.'})

   addItem({'perfil':'_Pigly_',
   'like': 0,
   'chat': 0,
   'send': 0,
   'hastag':'#beachy',
   'imagen_small': '/resources/Cerdito/Mask Group.png',
   'imagen':'/resources/Cerdito/forest-simon-ZKbve9f7Mp4-unsplash.png',
   'texto':'Favorite day at the beach. I wish everyday could be like this.'})

   addItem({'perfil':'Ninja_Enzo',
   'like': 0,
   'chat': 0,
   'send': 0,
   'hastag':'#Ninja #Turtle',
   'imagen_small': '/resources/tortuga/Mask Group.png',
   'imagen':'/resources/tortuga/amber-kipp-6JZ09actp80-unsplash.png',
   'texto':'For the past few months I’ve been training to becom a ninja turtle. See you soon Splinter!'})
