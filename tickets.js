// Variables globales

var tickets = {
contadorAdultos: 0,
contadorMenores: 0,
costoAdulto: 180,
costoMenor: 80,
costoTotalAdulto:0,
costoTotalMenor:0,
}

function imprimirTicket() {
  tickets.contadorAdultos = document.getElementById("pasajero").value;
  tickets.contadorMenores = document.getElementById("pasajeroN").value;
  adultos=parseFloat( document.getElementById("pasajero").value);
  menores = parseFloat( document.getElementById("pasajeroN").value);

  tickets.costoTotalAdulto=parseFloat(tickets.costoAdulto)*parseFloat(adultos);
  tickets.costoTotalMenor=parseFloat(tickets.costoMenor)*parseFloat(menores);
  var total=tickets.costoTotalAdulto+tickets.costoTotalMenor;

  localStorage.setItem('contadorMenores',JSON.stringify(tickets.contadorMenores));
  localStorage.setItem('contadorAdultos',JSON.stringify(tickets.contadorAdultos));
  localStorage.setItem('costoAdultos',JSON.stringify(tickets.costoTotalAdulto));
  localStorage.setItem('costoMenores',JSON.stringify(tickets.costoTotalMenor));
  localStorage.setItem('total',JSON.stringify(total));
  actualizarListaTickets();
}


// function actualizarListaTickets() {
//   var lista = document.getElementById("listaTickets");
//   lista.innerHTML = "";
//   for (var i = 0; i < tickets.length; i++) {
//     var li = document.createElement("li");
//     li.innerHTML = "<b>Número de Pasajero:</b> " + tickets[i].pasajero + ", <b>Edad:</b> " + tickets[i].edad + ", <b>Costo:</b> $" + tickets[i].costo;
//     lista.appendChild(li);
//   }
  

//   localStorage.setItem('tickets', JSON.stringify(tickets));
// }



let generarTicket2=function(){
  let pasajero

console.table(JSON.stringify(tickets));
window.open("impresion.html",width="500px",height="800px");
}
