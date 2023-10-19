const W_a = {
    name: "Peso del aire",
    simbol: "W_a",
    value: 0
}
const γ_w = {
    name: "Peso unitario del agua",
    simbol: "γ_w",
    values: [
        {
            value: 62.4,
            units: "lb/ft³"
        },
        {
            value: 1000,
            units: "kgf/m³"
        }
    ]
}
const V_w = {
    name: "Volumen del agua",
    simbol: "V_w",
    values: [
        {
            value: 0,
            units: "ft³"
        },
        {
            value: 0,
            units: "m³"
        }
    ]
}
const W_w = {
    name: "Peso del agua",
    simbol: "W_w",
    values: [
        {
            units: "kgf",
            value: γ_w.values[0].value * V_w.values[0].value
        }
    ]
}



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Volumen de agua`, volumen => {
    V_w.values[0].value = volumen;
    console.log(`Volumen: ${volumen} ${V_w.values[0].units}! Peso unitario: ${γ_w.values[0].value} ${γ_w.values[0].units}! Peso: ${W_w.values[0].value} ${W_w.values[0].units}!`);
    readline.close();
  });