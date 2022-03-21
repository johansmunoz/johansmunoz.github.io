function intento1(){
    var canvas = document.querySelector("canvas");
    
    if(canvas.getContext){
        var pincel = canvas.getContext("2d");
        pincel.beginPath();
        pincel.fillStyle="grey"
        pincel.fillRect(0,0,1000,500);
        pincel.fillStyle="black";
        pincel.moveTo(20,480);
        pincel.lineTo(20,50);//poste principal
        pincel.lineTo(400,50);//parte superior
        pincel.lineTo(400,100);//Cuerda
        pincel.moveTo(440,140);//fin_cuerda
        
        var prueba = 10;

        pincel.stroke();
    
    }
}

var intentoNumero1 = intento1;

//intento1();

function intento2(){
    var canvas = document.querySelector("canvas");

    if(canvas.getContext){

        var pincel = canvas.getContext("2d");
        pincel.beginPath();

        pincel.arc(400,140,40,0,Math.PI*2,true);//Circulo-cara
        pincel.moveTo(400,180);//inicio_cuello
        pincel.lineTo(400,230);//fin_cuello
        pincel.lineTo(350,200);//Brazo1_izquierdo
        pincel.moveTo(400,230);//inicio_brazo2
        pincel.lineTo(450,200);//Brazo2_derecho
        pincel.moveTo(400,230);//fin cuello

        pincel.stroke();
    }
}

//intento2();

function intento3(){
    var canvas = document.querySelector("canvas");
    if(canvas.getContext){
        var pincel = canvas.getContext("2d");

        pincel.beginPath();
        pincel.moveTo(400,230);
        pincel.lineTo(400,350);//cuerpo
        pincel.lineTo(350,400);//pierna1_izquierda
        pincel.moveTo(400,350);//entrepierna
        pincel.lineTo(450,400);//pierna2_derecha

        pincel.stroke();
    }
}

//intento3();

//export class intentoNumero1{};