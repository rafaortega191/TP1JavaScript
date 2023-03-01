let num1 = window.parseInt(prompt("Primer Numero"));
let num2 = window.parseInt(prompt("Segundo Numero"));
let num3 = window.parseInt(prompt("Tercer Numero"));
let num4 = 0;
let num5 = 0;

if(num1 > num2){
    num4 = num1;
}else{
    num4 = num2;
}

if(num3 > num4){
    num5 = num3;
}else{
    num5 = num4;
}

document.write("El numero mayor es: "+num5);