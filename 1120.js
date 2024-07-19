let failDigit = 7; 
let contractValue =777;
let result = 0;

let index = contractValue.toString().split('').indexOf(failDigit.toString())

if(index < 0) {
    console.log(`Resposta: ${contractValue}`);
} else if(typeof contractValue === 'bigint') {
    let aux = contractValue.toString().split(''); 
    result = Number(aux.filter(el => el !== failDigit.toString()).join('')) 
    console.log(`Resposta: ${result}`);
} else {
    let aux = contractValue.toString().split('');
    aux.splice(index, 1);
    result = parseInt(aux.join(''))
    if(result.toString().includes(failDigit.toString())) {
        result = 1
    }
    console.log(`Resposta: ${result}`);
}
