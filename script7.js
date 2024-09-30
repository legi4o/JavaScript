function todosSaoPares(array){
    return array.every(function(numero){
        return numero % 2 === 0;
    });
}

let numeros = [2,4,6,8];

console.log(todosSaoPares(numeros));

numeros = [2,4,5,8];

console.log(todosSaoPares(numeros));