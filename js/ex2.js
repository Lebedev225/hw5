const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const aSolution = numbers.filter(x => x%2 != 0)
const bSolution = numbers.filter(x => x%2 == 0 || x%5 == 0)
const cSolution = numbers.filter(x => x%3 == 0).map(x => x**2)
const dSolution = numbers.filter(x => x%5 == 0).map(x => x**2).reduce((acc, value) => acc + value, 0)




console.log(aSolution)
console.log(bSolution)
console.log(cSolution)
console.log(dSolution)

