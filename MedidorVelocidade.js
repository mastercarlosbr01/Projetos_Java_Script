function VerificarVelocidade (velocidade) 
{

    const máxima = 60;
    const kmPorPontos = 5;
    const limiteCarteira = 12;

    if (velocidade > máxima){
        var pontos = Math.floor((velocidade - máxima) / kmPorPontos);

        if (pontos >= limiteCarteira)
            return `Carteira Suspensa\nLimite atingido: ${velocidade}Km/h\nPontos: ${pontos}\nLimite de pontos: ${limiteCarteira}`
        if (pontos < limiteCarteira)
        {
            return `Limite: ${máxima}\nPontos: ${pontos}\nVelocidade: ${velocidade}`
        }
    }

    return `Velocidade: ${velocidade}Km/h`
}

console.log(VerificarVelocidade(120));