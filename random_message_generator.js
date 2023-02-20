let career = [
  "doctor",
  "writer",
  "cloud engineer",
  "cybersecurity analyst",
  "care worker",
  "support worker",
  "project manager",
  "data analyst",
  "web developer",
];
let years = [5, 6, 7, 8, 9, 10, 11, 12, 13, 15];

let randomNumber = Math.floor(Math.random() * career.length);
career = career[randomNumber];
randomNumber = Math.floor(Math.random() * years.length);
years = years[randomNumber];

const message = `You will be a ${career} in ${years} years`;
console.log(message);
