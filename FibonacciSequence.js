function fibonacciSequence(n) {
    // Inicializa a sequência de Fibonacci
    const fibSequence = [0, 1];

    // Gera a sequência de Fibonacci até o valor n
    while (true) {
        const nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        if (nextValue > n) {
            break;
        }
        fibSequence.push(nextValue);
    }

    return fibSequence;
}

function isInFibonacci(number) {
    const fibSequence = fibonacciSequence(number);
    return fibSequence.includes(number);
}

// Função principal
function main() {
    const num = parseInt(document.getElementById("numberInput").value);
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Limpa resultados anteriores

    if (!isNaN(num)) {
        const fibSequence = fibonacciSequence(num);

        if (isInFibonacci(num)) {
            resultContainer.innerHTML = `O número ${num} pertence à sequência de Fibonacci.`;
        } else {
            const nextFibonacci = fibSequence[(fibSequence.length - 1)]+fibSequence[(fibSequence.length - 2)];
            resultContainer.innerHTML = `
                <span class="warning">O número ${num} NÃO pertence à sequência de Fibonacci.</span><br>
                Sequência de Fibonacci até o número encontrado: ${fibSequence.join(', ')}<br>
                O próximo número da sequência é ${nextFibonacci} que é maior que ${num}
            `;
        }
    } else {
        resultContainer.innerHTML = "Por favor, insira um número válido.";
    }
}