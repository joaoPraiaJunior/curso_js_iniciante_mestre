//Date

const data = new Date();
console.log(data);
console.log(data.getDay()); //Dia da semana segunda = 1 o domingo começa com 0
console.log(data.getDate()); //Dia do mês
console.log(data.getMonth() + 1); //Mês
console.log(data.getTime()); //Timestamp
console.log(data.getFullYear()); //Ano
console.log(data.getHours()); //Hora
console.log(data.getUTCHours()); //Hora universal

//toString()

console.log(data.toString()); //Retorna uma string
console.log(data.toISOString()); //Retorna a hora e data como string formato ISO
console.log(data.toLocaleString()); //Retorna a data e hora lo
console.log(data.toLocaleDateString()); //Retorna data local em string
console.log(data.toLocaleTimeString()); //Retorna a hora em formato local
console.log(data.toUTCString()); //Reorna data universal

console.log(
  data.toLocaleString("pt-BR", {
    month: "long",
    weekday: "long",
    day: "numeric",
    year: "numeric",
  })
); //pode passar parâmetros
