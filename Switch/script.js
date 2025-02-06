let diaSemana = parseInt(prompt("digite o número do dia da semana - 1 a 7"));
switch(diaSemana){
    
    case 1: 
    msg = "Segunda";
    break;

    case 2: 
    msg = "Terça";
    break;

    case 3: 
    msg = "Quarta";
    break;

    case 4: 
    msg = "Quinta";
    break;

    case 5: 
    msg = "Sexta";
    break;

    case 6: 
    msg = "Sabado";
    break;

    case 7: 
    msg = "Domingo";
    break;

    default:
    msg = "Dia invalido carambaaaaa";
    
}
console.log(diaSemana>=1 && diaSemana<=7 ? msg + "-feira" : "msg");