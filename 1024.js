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

console.log('Teste')
var input = 'teste'
var lines = input.split('\n')
console.log('Lines: ' + lines)