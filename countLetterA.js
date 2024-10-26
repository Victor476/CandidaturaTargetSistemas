function countLetterA(str) {
    // Converte a string para minúsculas e conta as ocorrências da letra 'a'
    const lowerCaseStr = str.toLowerCase();
    const count = (lowerCaseStr.match(/a/g) || []).length;
    return count;
}

// Função principal
function main() {
    const inputStr = document.getElementById("stringInput").value;
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Limpa resultados anteriores

    if (inputStr) {
        const count = countLetterA(inputStr);
        
        if (count > 0) {
            resultContainer.innerHTML = `A letra 'a' (ou 'A') aparece ${count} vez(es) na string.`;
        } else {
            resultContainer.innerHTML = "A letra 'a' (ou 'A') não aparece na string.";
        }
    } else {
        resultContainer.innerHTML = "Por favor, insira uma string válida.";
    }
}