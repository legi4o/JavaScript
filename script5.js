let numeros = [1,2,3,4,5,6,7,8,9];

let soma = numeros.reduce(function(total,numero){
return total + numero;
},0);

console.log(soma);