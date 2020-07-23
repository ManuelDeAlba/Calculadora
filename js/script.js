const resultado = document.querySelector('#resultado');

function agregar(n){
	if(resultado.innerText == "NaN" || resultado.innerText == "0"){
		borrar();
	}
	if(resultado.innerText.length == 0){
		if(n != "+" && n != "/" && n != "x"){
			resultado.innerHTML = resultado.innerHTML + n;
		}
	} else {
		resultado.innerHTML = resultado.innerHTML + n;
	}
}

function calcular(){
	let operacion = resultado.innerHTML;
	let suma = operacion.indexOf("+");
	let resta = operacion.indexOf("-");
	let multiplicacion = operacion.indexOf("x");
	let division = operacion.indexOf("/");
	if(suma != -1){
		let arr = operacion.split("+");
		let res = parseFloat(arr[0]) + parseFloat(arr[1]);
		resultado.innerHTML = res;
	} else if(resta != -1){
		if(resta == 0){
			let num = "";
			for(var i=1;i<operacion.length;i++){
				num += operacion[i];
			}
			let arr = num.split("-");
			if(arr.length > 1){
				let res = -parseFloat(arr[0]) - parseFloat(arr[1]);
				resultado.innerHTML = res;
			}
		} else {
			let arr = operacion.split("-");
			let res = parseFloat(arr[0]) - parseFloat(arr[1]);
			resultado.innerHTML = res;
		}
	} else if(multiplicacion != -1){
		let arr = operacion.split("x");
		let res = parseFloat(arr[0]) * parseFloat(arr[1]);
		resultado.innerHTML = res;
	} else if(division != -1){
		let arr = operacion.split("/");
		let res = parseFloat(arr[0]) / parseFloat(arr[1]);
		resultado.innerHTML = res;
	}
}

function borrar(){
	resultado.innerHTML = "";
}

function atras(){
	if(resultado.innerText == "NaN"){
		borrar();
	} else {
		let res = "";
		for(var i=0;i<resultado.innerText.length-1;i++){
			res += resultado.innerText[i];
		}
		resultado.innerText = res;
	}
}

document.querySelector('#n1').addEventListener('click',()=>{agregar('1')});
document.querySelector('#n2').addEventListener('click',()=>{agregar('2')});
document.querySelector('#n3').addEventListener('click',()=>{agregar('3')});
document.querySelector('#n4').addEventListener('click',()=>{agregar('4')});
document.querySelector('#n5').addEventListener('click',()=>{agregar('5')});
document.querySelector('#n6').addEventListener('click',()=>{agregar('6')});
document.querySelector('#n7').addEventListener('click',()=>{agregar('7')});
document.querySelector('#n8').addEventListener('click',()=>{agregar('8')});
document.querySelector('#n9').addEventListener('click',()=>{agregar('9')});
document.querySelector('#n0').addEventListener('click',()=>{agregar('0')});
document.querySelector('#o1').addEventListener('click',()=>{agregar('+')});
document.querySelector('#o2').addEventListener('click',()=>{agregar('-')});
document.querySelector('#o3').addEventListener('click',()=>{agregar('x')});
document.querySelector('#o4').addEventListener('click',()=>{agregar('/')});
document.querySelector('#punto').addEventListener('click',()=>{agregar('.')});
document.querySelector('#igual').addEventListener('click', calcular);
document.querySelector('#c').addEventListener('click', borrar);
document.querySelector('#atras').addEventListener('click', atras);

function iluminar(elem){
    elem.classList.add('iluminado');
    setTimeout(()=>{
        elem.classList.remove('iluminado');
    },100)
}

const caracteresPermitidos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "/"];
const id = ["n1","n2","n3","n4","n5","n6","n7","n8","n9","n0","punto","o1","o2","o4"];
document.addEventListener('keydown', e => {
	if(e.key == "*"){
		agregar("x");
		iluminar(document.querySelector('#o3'));
	} else if(e.key == "Enter"){
		calcular();
		iluminar(document.querySelector('#igual'));
	} else if(e.key == "c"){
		borrar();
		iluminar(document.querySelector('#c'));
	} else if(e.key == "Backspace"){
		atras();
		iluminar(document.querySelector('#atras'));
	} else {
		for(let i=0;i<caracteresPermitidos.length;i++){
			if(e.key == caracteresPermitidos[i]){
				agregar(e.key);
				iluminar(document.querySelector(`#${id[i]}`))
			}
		}
	}
})