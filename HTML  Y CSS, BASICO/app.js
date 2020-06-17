document.write("<h1>Hola Mundo</hy1>");

//Funciones

function saludar(name){
    console.log("Hola "+ name);
}

saludar("carlos");
saludar("Marcos");
saludar("Felipa");





//Bucles
let contador=50;

while(contador>0){
    console.log("Hola Mundo");
    contador = contador - 1;
    contador--;                                 //Aqui resto uno
}

let names= ["Carlos","Marcos","Juan","Maria"];

for(let i=0; i < names.length; i++){
    console.log("Hola: " + names[i]);
}





//Condicionales o Control de Flujo

let calificacion=" "
let nota=15;

if(nota<=50){
   calificacion="D";
}

else if (nota<=79){
    calificacion="C";
}

else if (nota<=89){
    calificacion="B";
}

else if (nota<=100){
    calificacion="A";
}

switch(calificacion){
    case "D" : console.log("Te quemaste");break;

    case "C" : console.log("Sacaste una C");break;

    case "B" : console.log("Sacaste una B");break;

    case "A" : console.log("Sacaste una A");break;

    default: console.log("Nota Invalida");break;
}


let contra = "123";
let imput = "1233";

let entrar = contra == imput;

if (entrar == true){
    console.log("Contraseña Corrrecta");
}
else {
    console.log("Contraseña Incorrecta");
}




//Tipos de Operadores

let numeroUno=10;
let numeroDos=20;

let suma = numeroUno + numeroDos;
let resta = numeroDos - numeroUno;
let multi = numeroUno * numeroDos;

let mayor= numeroUno < numeroDos;





//Tipos de Datos

var stri="Hola mundo";  //String

var numero=432;         //Numero

var flotante=432.23;    //Float

var boleano=true;       //Boolean

const PI=3.1415;        //Si usamos const no puede cambiar el valor

lista=[32,23,23]    //Array

ok={                //object
    "user": "carlos",
    "score": 100,
    "horas": 14,
    "profesional": true
}