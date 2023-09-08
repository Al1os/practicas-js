today = new Date();
now = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

total = Math.floor(Math.random() * (60*10 - 60*5) + 60*5);
console.log("hora inicial: " + now + "\nValor aleatorio generado en minutos: " + total);

today.setHours(today.getHours() + total / 60);
today.setMinutes(today.getMinutes() + total % 60);
then = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

console.log("hora final: " + then);