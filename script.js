let option;

do {
    console.log("\nMENU INTERATIVO");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");
    console.log("4. Opção 4");
    console.log("5. Encerrar");

    // Simula a entrada do usuário (substitua por prompt para entrada real)
    option = prompt("Escolha uma opção (1-5): ");

    if (option === '1') {
        console.log("Você escolheu a Opção 1");
    } else if (option === '2') {
        console.log("Você escolheu a Opção 2");
    } else if (option === '3') {
        console.log("Você escolheu a Opção 3");
    } else if (option === '4') {
        console.log("Você escolheu a Opção 4");
    } else if (option === '5') {
        console.log("Encerrando o sistema...");
    } else {
        console.log("Opção inválida. Tente novamente.");
    }

} while (option !== '5');