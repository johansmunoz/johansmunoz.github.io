//Se creo la lista de campeones para el juego
var campeonesLol; /*= window.sessionStorage;*/
campeonesLol=["GAREN", "SHYVANA", "MORGANA", "LUX", "GNAR", "ILLAOI", "VARUS", "TRISTANA", "MISS FORTUNE", "TRUNDLE"];
var palabras = campeonesLol.length;
console.log(palabras);


/*Función para agregar palabra al juego*/
function agregarPalabra(){
    var nuevaPalabra=document.getElementById("input-nueva-palabra").value;//se obtendra del cuadro de texto de la página de inicio la nueva palabra ingresada por el usuairo
    nuevaPalabra=nuevaPalabra.toUpperCase();
        alert("PALABRA AGREGADA")
        campeonesLol.push(nuevaPalabra);

    /*var nuevaPalabra=document.getElementById("input-nueva-palabra").value;//se obtendra del cuadro de texto de la página de inicio la nueva palabra ingresada por el usuairo
    nuevaPalabra=nuevaPalabra.toUpperCase();
    //Se creo ciclo para que pueda revisar palabra por palabra si ya existe o no
    for(var i = 0;i<=palabras;i++){
        if(nuevaPalabra==campeonesLol[i]){
            alert("Esta palabra ya existe");
            break;
        }
        if(i==palabras){
            campeonesLol.push(nuevaPalabra);//se se ingresa la nueva ppalabra a la lista creada originalmente
            //localStorage.setItem("nombres", JSON.stringify(campeonesLol));//mediante el local storage se conservaran las palabras ingresadas por el usuario, así recargue la página
            //se esta asigando una llave ''nombres'', a toda la lista llamada campeonesLol, el stringify se encarga de convertirla a string.
        }
    }*/
    console.log(nuevaPalabra);
}
console.log(campeonesLol);


//var campeonesTotales= localStorage.getItem("nombres");//El listado con las nuevas palabras se asigna esta nueva variable
//Funcion encargada de convertir el JSON en una lista manejable que se pueda operar
/*function obtener_localStorage()
{
    campeonesTotales = JSON.parse(localStorage.getItem("nombres"));
    console.log(campeonesTotales);
}
obtener_localStorage();*/


//funcion que se encargara de seleccionar del array, el campeon demanera aleatoria
function seleccionAleatoria(){
    //if(campeonesTotales!=null){
    var campeonAleatorio=campeonesLol[Math.floor(Math.random()*campeonesLol.length)];
    return campeonAleatorio;   
}
//}

//se crea variable donde aparecera el nombre del campeon separando cada letra
var campeonSeleccionado = seleccionAleatoria();
console.log(campeonSeleccionado);
//separa cada letra del nombre del campeon, el objetivo es poder contar las letras e identificarlas
campeonSeleccionado = campeonSeleccionado.split("");


//Función de campeonesTotales para adicionar un nuevo elemento al html
function nuevosElementos(){
    //crear elemento div
    var nuevaDiv=document.createElement("div");
    //darle contenido
    var nuevoContenido =document.createTextNode("Aquí aparecen las letras acertadas:");
    //agregue el nodo de texto al div recien creado
    nuevaDiv.appendChild(nuevoContenido);
    //Añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(nuevaDiv, currentDiv);
}
nuevosElementos();

console.log(campeonSeleccionado);

var conteo = campeonSeleccionado.length;//variable para conocer cantidad de letras - sirve para varias funciones
////////////////////////////////////////////////////////////
//Función para crear los inputs que recibiran las letras adividanas

function crearInputs(){

    for(i=0;i<conteo;i++){
        var input=document.createElement("input");
        input.setAttribute("id",i);//se encarga de colocar un indentificador independiente a cada input
        input.setAttribute("type", "text");//se encarga de definir el tipo de input
        input.setAttribute("class","inputs");//Se crea el atributo clase y el nombre para poder aplicar css
        var currentDiv4=document.getElementById("div1");//identificador div en html
        currentDiv4.appendChild(input);//agregar contenido (en este caso el input)
        document.body.insertBefore(input, currentDiv4);//ubicacion exacta dle input a agregar
    }
}

crearInputs();


//input que se encargara de recibir los intentos del usuario,
//para posteriormente ser comparado en la letrasAdivinadas
function inputIntentos(){
    var inputIntentos=document.createElement("input");
    inputIntentos.setAttribute("id", 30);//id que nombra al input que recibe los intetos del usario
    inputIntentos.setAttribute("type","text");
    var currentPrueba=document.getElementById("div2");
    currentPrueba.appendChild(inputIntentos);
    document.body.insertBefore(inputIntentos, currentPrueba);
}
inputIntentos();


//Funciones que crean los input donde se alojaran las letras erroneas

function inputFallas(){
    var inputLetrasErradas=document.createElement("input");
    inputLetrasErradas.setAttribute("id",50);//se encarga de colocar un indentificador independiente a cada input
    inputLetrasErradas.setAttribute("type", "text");//se encarga de definir el tipo de input
    inputLetrasErradas.setAttribute("class","errores");//Se crea el atributo clase y el nombre para poder aplicar css
    var currentDiv4=document.getElementById("canvas");//identificador div en html
    currentDiv4.appendChild(inputLetrasErradas);//agregar contenido (en este caso el input)
    document.body.insertBefore(inputLetrasErradas, currentDiv4);//ubicacion exacta dle input a agregar
    }
inputFallas();

function inputFallas2(){
    var inputLetrasErradas2=document.createElement("input");
    inputLetrasErradas2.setAttribute("id",51);//se encarga de colocar un indentificador independiente a cada input
    inputLetrasErradas2.setAttribute("type", "text");//se encarga de definir el tipo de input
    inputLetrasErradas2.setAttribute("class","errores2");//Se crea el atributo clase y el nombre para poder aplicar css
    var currentDiv4=document.getElementById("canvas");//identificador div en html
    currentDiv4.appendChild(inputLetrasErradas2);//agregar contenido (en este caso el input)
    document.body.insertBefore(inputLetrasErradas2, currentDiv4);//ubicacion exacta dle input a agregar
    }
inputFallas2();

function inputFallas3(){
    var inputLetrasErradas3=document.createElement("input");
    inputLetrasErradas3.setAttribute("id",52);//se encarga de colocar un indentificador independiente a cada input
    inputLetrasErradas3.setAttribute("type", "text");//se encarga de definir el tipo de input
    inputLetrasErradas3.setAttribute("class","errores3");//Se crea el atributo clase y el nombre para poder aplicar css
    var currentDiv4=document.getElementById("canvas");//identificador div en html
    currentDiv4.appendChild(inputLetrasErradas3);//agregar contenido (en este caso el input)
    document.body.insertBefore(inputLetrasErradas3, currentDiv4);//ubicacion exacta dle input a agregar
    }
inputFallas3();

function letraErronea(event){
    var letraErronea=event.key;
    letraErronea=letraErronea.toUpperCase();
    console.log(letraErronea);

    document.getElementById(50).value=letraErronea;
}

function letraErronea2(event){
    var letraErronea=event.key;
    letraErronea=letraErronea.toUpperCase();

    document.getElementById(51).value=letraErronea;
}

function letraErronea3(event){
    var letraErronea=event.key;
    letraErronea=letraErronea.toUpperCase();

    document.getElementById(52).value=letraErronea;
}


//funcion para probar la obtencion de la letra según la tecla oprimida

window.addEventListener("keypress", letrasAdivinadas);

function letrasAdivinadas(event){
    var letra=event.key;
    letra=letra.toUpperCase();//------------------------------
    console.log(letra);
    
    //Ese ciclo se encarga de colocar la letra adivinada en el input correspondiente, usando la palabra y su cantidad de letras
    
    for(i=0;i<=conteo+1;i++){
        if(campeonSeleccionado[i]==letra){
            document.getElementById(i).value=letra;
        }
    }
}


//La siguiente funcion se encargara de corroborar si la letra ingresada coincide con las del nombre del campeon
//y descontar el número de intentos disponibles si es el caso
window.addEventListener("keypress", intentos);

var intentos = 4;

function intentos(event){
    var letra=event.key;
    letra=letra.toUpperCase();
    

    var valor=event.keyCode;
    valor = String.fromCodePoint(valor);
    valor = valor.toUpperCase();

    for(var t=0;t<=conteo;t++){
        if(campeonSeleccionado[t]==valor){
        break;
        }    
        if(t==conteo){ 				
            intentos = intentos-1;
            alert("Letra erronea, intentos restantes: "+intentos);
        
            console.log(intentos)
            if(intentos==3){
                falla1();
                var contar = 0;
                for(var i=0;i<=conteo;i++){
            
                    if(campeonSeleccionado[i]==letra){
                        break;
                    }
                    contar=contar+1;
                    console.log(contar);
                    if(contar==conteo){
                        
                        if(campeonSeleccionado[i]!=letra){
                            letraErronea(event);
                        }
                        break;
                        }
                    }
            }
            if(intentos==2){
                falla2();
                var contar = 0;
                for(var i=0;i<=conteo;i++){
            
                    if(campeonSeleccionado[i]==letra){
                        break;
                    }
                    contar=contar+1;
                    console.log(contar);
                    if(contar==conteo){
                        
                        if(campeonSeleccionado[i]!=letra){
                            letraErronea2(event);
                        }
                        break;
                        }
                    }
            }
            if(intentos ==1){

                falla3();
                var contar = 0;
                for(var i=0;i<=conteo;i++){
            
                    if(campeonSeleccionado[i]==letra){
                        break;
                    }
                    contar=contar+1;
                    console.log(contar);
                    if(contar==conteo){
                        
                        if(campeonSeleccionado[i]!=letra){
                            letraErronea3(event);
                        }
                        break;
                        }
                    }
            }
            if(intentos ==0){
                alert("Intentos agotados");
                falla3(); 
                location.reload();
            }
    }
}    
}

// Las siguientes funciones se encarga de importar cada uno de los graficos a dibujar
// en caso de que el jugador ingrese las letras erroneas.
function falla1(){
    intentoNumero1();
    }
    function falla2(){
        intento2();
    }
    function falla3(){
        intento3();
    }