/* 

Exercício 1024. 

Tabela ASCII 
//https://sweet.ua.pt/miguelmoreira/HardWare_sites/hardware4.htm 

Primeiramente, cada letra maiúscula ou minúscula deve ser deslocada três posições para a direita, 
de acordo com a tabela ASCII: a letra 'a' deve se tornar a letra 'd', a letra 'y' deve se tornar 
o caractere '|' e assim por diante. Em segundo lugar, cada linha deve ser invertida. Após serem 
revertidos, todos os caracteres da metade em diante (truncados)  devem ser movidos uma posição
para a esquerda em ASCII. Neste caso, 'b' torna-se 'a' e 'a' torna-se '`'.


Por exemplo, se a palavra resultante da primeira parte for “tesla”, as letras “sla” deverão 
ser movidas uma posição para a esquerda.  Porém, se a palavra resultante da primeira parte for
"t#$A", as letras "$A" deverão ser deslocadas.



*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const prompt = () => lines.shift();

const casos = parseInt(prompt());
for (let i = 0; i < casos; i++) {
  let msg = prompt();
  let cdg = [];
  let ecrpt = "";

  // Primeiro passo: incrementar 3 nas letras maiúsculas e minúsculas
  for (let char of msg) {
    let charCode = char.charCodeAt(0);
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      charCode += 3;
    }
    cdg.push(charCode);
  }

  // Segundo passo: inverter o array
  cdg.reverse();

  // Terceiro passo: decrementa 1 dos caracteres da metade em diante
  for (let j = Math.floor(cdg.length / 2); j < cdg.length; j++) {
    cdg[j] -= 1;
  }

  // Construir a mensagem criptografada
  ecrpt = cdg.map(code => String.fromCharCode(code)).join('');

  console.log(ecrpt);
}





