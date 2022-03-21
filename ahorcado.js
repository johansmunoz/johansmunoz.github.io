//Se creo la lista de campeones para el juego
var campeonesLol = window.sessionStorage;
campeonesLol=["GAREN", "SHYVANA", "MORGANA", "LUX", "GNAR", "ILLAOI", "VARUS", "TRISTANA", "MISS FORTUNE", "TRUNDLE"];

////////////////////////////////////////////////////////////
//funcion que se encargara de seleccionar del array, el campeon demanera aleatoria
/*Función para agregar palabra al juego*/
function agregarPalabra(){
    var nuevaPalabra=document.getElementById("input-nueva-palabra").value;//se obtendra del cuadro de texto de la página de inicio la nueva palabra ingresada por el usuairo
    nuevaPalabra=nuevaPalabra.toUpperCase();
    campeonesLol.push(nuevaPalabra);//se se ingresa la nueva ppalabra a la lista creada originalmente
    localStorage.setItem("nombres", JSON.stringify(campeonesLol));//mediante el local storage se conservaran las palabras ingresadas por el usuario, así recargue la página
    //se esta asigando una llave ''nombres'', a toda la lista llamada campeonesLol, el stringify se encarga de convertirla a string.
}

var campeonesTotales= localStorage.getItem("nombres");//El listado con las nuevas palabras se asigna esta nueva variable

//Funcion encargada de convertir el JSON en una lista manejable que se pueda operar
function obtener_localStorage()
{
    campeonesTotales = JSON.parse(localStorage.getItem("nombres"));
    console.log(campeonesTotales);
}

obtener_localStorage();

function seleccionAleatoria(){
    var campeonAleatorio=campeonesTotales[Math.floor(Math.random()*campeonesTotales.length)];
    return campeonAleatorio;   
}
//se crea variable donde aparecera el nombre del campeon separando cada letra
var campeonSeleccionado = seleccionAleatoria();
console.log(campeonSeleccionado);
campeonSeleccionado = campeonSeleccionado.split("");//separa cada letra del nombre del campeon, el objetivo es poder contar las letras e identificarlas
////////////////////////////////////////////////////////////
//Función de campeonesTotales para agregar un nurvo elemento al html
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

var conteo = campeonSeleccionado.length;//variable para conocer cantidad de letras
//sirve para varias funciones
////////////////////////////////////////////////////////////
//Función para crear los inputs que recibiran los intentos del usuario
function crearInputs(){

    //if(intentos>0){
        for(i=0;i<conteo;i++){
            var input=document.createElement("input");
            input.setAttribute("id",i);//se encarga de colocar un indentificador independiente a cada input
            input.setAttribute("type", "text");//se encarga de definir el tipo de input
            input.setAttribute("class","inputs");//Se crea el atributo clase y el nombre para poder aplicar css
            var currentDiv4=document.getElementById("div1");//identificador div en html
            currentDiv4.appendChild(input);//agregar contenido (en este caso el input)
            document.body.insertBefore(input, currentDiv4);//ubicacion exacta dle input a agregar
        }
    //}
    /*if(intentos<=0){
        currentDiv4.removeChild(input);
    }*/
}

crearInputs();

////////////////////////////////////////////////////////////
//input que se encargara de recibir los intentos del usuario,
//para posteriormente ser comparado en la letrasAdivinadas
function inputIntentos(){
    var input=document.createElement("input");
    input.setAttribute("id", 30);//id que nombra al input que recibe los intetos del usario
    input.setAttribute("type","text");
    var currentPrueba=document.getElementById("div2");
    currentPrueba.appendChild(input);
    document.body.insertBefore(input, currentPrueba);
}
inputIntentos();

//funcion para probar la obtencion de la letra según la tecla oprimida

window.addEventListener("keypress", letrasAdivinadas);
////////////////////////////////////////////////////////////
function letrasAdivinadas(event){
    var letra=event.key;
    letra=letra.toUpperCase();//------------------------------
    console.log(letra);
    
    var intentoRecibido = document.getElementById(30).value;//se esta tomando el valor donde el usuario ingresa el intento
    letrasIntento =intentoRecibido.split("");//el valr recoelctado se separa en elementos y se guarda en esta variable
    //Ese ciclo se encarga de colocar la letra adivinada en el input correspondiente, usando la palabra y su cantidad de letras
    for(i=0;i<=conteo+1;i++){
        if(campeonSeleccionado[i]==letra){
            document.getElementById(i).value=letra;
        }
        /*if(i==conteo){
            var nuevaDiv=document.createElement("div");
            
            nuevaDiv.setAttribute("class","errores");
            //nuevaDiv.setAttribute("type","text");
            var nuevoContenido =document.createTextNode(letra);
            
            nuevaDiv.appendChild(nuevoContenido);
            
            var currentDiv = document.getElementById("despues");
            document.body.insertBefore(nuevaDiv, currentDiv);
            //break;
        }*/
        /*if(letra!=campeonSeleccionado[i]){
            if(i==conteo){
                var nuevaDiv=document.createElement("div");
                //darle contenido
                nuevaDiv.setAttribute("class","errores");
                nuevaDiv.setAttribute("type","text");
                var nuevoContenido =document.createTextNode(letra);
                //agregue el nodo de texto al div recien creado
                nuevaDiv.appendChild(nuevoContenido);
                //Añade el elemento creado y su contenido al DOM
                var currentDiv = document.getElementById("despues");
                document.body.insertBefore(nuevaDiv, currentDiv);
                break;
            }
        }*/
    }
}

//La siguiente funcion se encargara de corroborar si la letra ingresada coincide con las del nombre del campeon
//y descontar el número de intentos disponibles si es el caso
window.addEventListener("keypress", intentos);

var intentos = 3;
////////////////////////////////////////////////////////////
var a=0;
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
            
            var nuevaDiv=document.createElement("div");
            
            nuevaDiv.setAttribute("class","errores");
            nuevaDiv.setAttribute("id",a);
            nuevaDiv.setAttribute("type","text");
            var nuevoContenido =document.createTextNode(letra);
            
            nuevaDiv.appendChild(nuevoContenido);
            
            var currentDiv = document.getElementById("errores");
            document.body.insertBefore(nuevaDiv, currentDiv);
            a=a+1;
            console.log(a);    
        }
        if(intentos==2){
            falla1();
        }
        if(intentos==1){
            falla2();
        }
        if(intentos ==0){
            alert("Intentos agotados");
            falla3(); 
            location.reload();
        }
    }
        console.log(valor);
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