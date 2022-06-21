const pessoa = {
    nome: "Carlos",
    Idade: 30,
    Relacionamento: "Namorando"
}

// console.log(pessoa.nome)


const now = moment(new Date()); // Data de hoje
const past = moment("2014-07-07"); // Outra data no passado
const duration = moment.duration(now.diff(past));

// Mostra a diferença em dias
const days = duration.asDays();