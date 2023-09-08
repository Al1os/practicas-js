vueltas = Math.floor(Math.random() * (11 - 5) + 5);
angulo = Math.floor(Math.random() * (360 - 0) + 0)
total = Math.floor(Math.random() * (360-0) + 0) * vueltas + angulo;
final = total % 360;
console.log("Angulo: "+ angulo + "\nNro aleatorio: " + total + "\n" + "nro angulo final: " + final + "\n");
