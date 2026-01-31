const number = [1, 2, 3];
const newNumbers = [...number, 4, 5, 6];
console.log(newNumbers);

function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply(1, 2, 3,4,5));