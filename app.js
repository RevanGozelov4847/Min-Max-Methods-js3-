function displayResults(sum, average, min, max, mostRepeated, leastRepeated) {
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = ""; 
    resultsDiv.innerHTML += `<p>Sum: ${sum}</p>`;
    resultsDiv.innerHTML += `<p>Average: ${average}</p>`;
    resultsDiv.innerHTML += `<p>Min: ${min}</p>`;
    resultsDiv.innerHTML += `<p>Max: ${max}</p>`;
    resultsDiv.innerHTML += `<p>Most repeated element: ${mostRepeated[0]} with frequency: ${mostRepeated[1]}</p>`;
    resultsDiv.innerHTML += `<p>Least repeated element: ${leastRepeated[0]} with frequency: ${leastRepeated[1]}</p>`;
}

function analyzeArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
        console.error("Invalid input. Please provide a non-empty array of integers.");
        return;
    }

    const sum = array.reduce((acc, val) => acc + val, 0);
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    const frequencyMap = new Map();
    array.forEach(num => frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1));

    const mostRepeated = [...frequencyMap.entries()].reduce((a, e) => e[1] > a[1] ? e : a);
    const leastRepeated = [...frequencyMap.entries()].reduce((a, e) => e[1] < a[1] ? e : a);

    displayResults(sum, average, min, max, mostRepeated, leastRepeated);
}

function analyzeInput() {
    const inputArrayString = document.getElementById("inputArray").value;
    const inputArray = inputArrayString.split(',').map(num => parseInt(num.trim(), 10));

    analyzeArray(inputArray);
}
