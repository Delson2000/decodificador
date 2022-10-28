var forSubmit = document.querySelector("#formulario");
let textoEntrada = document.querySelector("#texto_inserido");
let textoSaida = document.querySelector("#saida_texto");
var saidaCaixa = document.querySelector("#caixa_saida");
var numero = document.querySelector('#inserir_num')
console.log(numero.value)
function t() {
    return (textoSaida.value = textoEntrada.value);
}
function valor1(valor) {
    if (valor === "Cifra de César") {
        document.querySelector(
            ".caixa_botoes"
        ).innerHTML =`<textarea name="" id="inserir_num" maxlength="3"></textarea>
            <button class="botoes" id="codificar" onclick="codificarCesar()">Codificar</button>
            <button class="botoes" id="decodificar" onclick="codificarCesarD()">Decoodificar</button>`;
    }
    if (valor === "Base64") {
        document.querySelector(".caixa_botoes").innerHTML = `
            <button class="botoes" id="codificar" onclick="base64()"  >Codificar</button>
            <button class="botoes" id="decodificar" onclick="base64D()">Decoodificar</button>
    `;
    }
}
function base64() {
    return (textoSaida.value = btoa(textoEntrada.value));
}
function base64D() {
    return (textoEntrada.value = atob(textoSaida.value));
}


function cifraDeCesar(str, num) {
    num = num % 26
    var fraseMin = str.toLowerCase();
    console.log(fraseMin)
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var novaFrase = '';

    for (var i = 0; i < fraseMin.length; i++) {
        var letra = fraseMin[i];
        if(letra === ' ' ){
            novaFrase +=letra;
            continue
        }

        if (alfabeto.includes(letra) === false ) {
            novaFrase += letra
            continue
        }
        var letraIndice = alfabeto.indexOf(letra)
        var novoIndice = letraIndice +num
        if(novoIndice < 0){
            novoIndice =  novoIndice*(-1)
        }
        if(novoIndice >25){
            novoIndice = novoIndice - 26
        }
        if(str[i] ===str[i].toUpperCase()){
            novaFrase +=alfabeto[novoIndice].toUpperCase();
        }
        else novaFrase += alfabeto[novoIndice]
    }
    return novaFrase
}

function cifraDeCesarD(str, num) {
    num = num % 26
    var fraseMin = str.toLowerCase();
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var novaFrase = '';

    for (var i = 0; i < fraseMin.length; i++) {
        var letra = fraseMin[i];
        if(letra === ' ' ){
            novaFrase +=letra;
            continue
        }

        if (alfabeto.includes(letra) === false ) {
            novaFrase += letra
            continue
        }
        var letraIndice = alfabeto.indexOf(letra)
        var novoIndice = letraIndice -num
        if(novoIndice < 0){
            novoIndice =  novoIndice*(-1)
        }
        if(novoIndice >25){
            novoIndice = novoIndice + 26
        }
        if(str[i] ===str[i].toUpperCase()){
            novaFrase +=alfabeto[novoIndice].toUpperCase();
        }
        else novaFrase += alfabeto[novoIndice]
    }
    return novaFrase
}

function codificarCesar(){
    var textocodificado = cifraDeCesar(textoEntrada.value, numero.value)
    return (textoSaida.value = textocodificado)
}
function codificarCesarD(){
    var textocodificado = cifraDeCesarD(textoSaida.value, numero.value)
    return (textoEntrada.value = textocodificado)
}


