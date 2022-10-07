//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions
// const people = studentList.filter(person => person.lastName.startsWith("C") == true)
// console.log(people)
// // const scores = people => people.map(student => student.scores)
// const average = people.reduce((sum, value) => sum + value.scores, 0)
// const min = people.reduce(acc,value) => 
// console.log(average)
// const scores = studen





const filter = (array, funct) => array.filter(funct);
// const peopleWithC = studentList.filter(person => person.lastName.startsWith("C") == true)
const peopleWithC = person => person.lastName.startsWith("C") == true

const peopleWithC2 = filter(studentList, peopleWithC)
// const average = array => array.reduce(((sum, value) => sum + value, 0) / array.length)

const scores = peopleWithC2 => peopleWithC2.map(student => student.scores)
console.log(peopleWithC2)
console.log(scores(peopleWithC2))
const min = scores => Math.min(scores)
console.log(min(scores(peopleWithC2)))


// console.log(average(scores(studentList)))
// const min = 
// const max = 
//Declare cLastNameResults.  Use functions and map a new array of objects

//Output
// console.log(cLastNameResults);
// console.log(average(scores(studentList)))


// const students = [
//     {
//       name: "Anna",
//       sex: "f",
//       grades: [4.5, 3.5, 4]
//     },
//     {
//       name: "Dennis",
//       sex: "m",
//       country: "Germany",
//       grades: [5, 1.5, 4]
//     },
//     {
//       name: "Martha",
//       sex: "f",
//       grades: [5, 4, 2.5, 3]
//     },
//     {
//       name: "Brock",
//       sex: "m",
//       grades: [4, 3, 2]
//     }
//   ];
//   // Compute female student results
//   const femaleStudentsResults = [];
//   for (const student of students) {
//     if (student.sex === "f") {
//       let gradesSum = 0;
//       for (const grade of student.grades) {
//         gradesSum += grade;
//       }
//       const averageGrade = gradesSum / student.grades.length;
//       femaleStudentsResults.push({
//         name: student.name,
//         avgGrade: averageGrade
//       });
//     }
//   }
//   console.log(femaleStudentsResults);