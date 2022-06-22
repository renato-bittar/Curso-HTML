// Coloca a data atual no site
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
// Troca o texto pela data atual coletada acima
document.getElementById("data").textContent = (dataAtual);

let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElement = document.getElementById('btcvalue');

console.log(ws);
ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    stockPriceElement.innerText = parseFloat(stockObject.p).toFixed(2);
}

var data = new FormData();
data.append("dinheiro", document.getElementById("valor").value);

console.log(data);