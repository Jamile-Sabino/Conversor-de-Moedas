var valorDolarTexto = prompt("Qual o valor em dólar você quer converter? ")

var valorDolarNumero = parseFloat(valorDolarTexto)

var valorReal = valorDolarNumero * 5.50
var valorRealFixado = valorReal.toFixed(2)

alert("O valor em reais fica: " + valorRealFixado);
//'https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-1-conversor-de-moedas.png'