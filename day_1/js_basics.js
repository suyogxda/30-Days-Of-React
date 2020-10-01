// Exercise level 1

// These two arrays were given in the repo

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1. Declare an empty array
let emptyArray = Array();

// 2. Declare an array with more than 5 number of elements
let arrayOfLengthFive = Array(5).fill("FCK");

// 3. Find the length of your array
let emptyArrayLength = arrayOfLengthFive.length;
console.log(emptyArrayLength);

// 4. Get the first item, the middle item and the last item of the array
let firstItemOfArray = arrayOfLengthFive[0];
let middleItemOfArray = arrayOfLengthFive[2];
let lastItemOfArray = arrayOfLengthFive[emptyArrayLength - 1];
console.log(firstItemOfArray, middleItemOfArray, lastItemOfArray);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let arrayOfDifferentTypes = [
  0,
  1.2,
  "FCK",
  true,
  undefined,
  "Array's length needs to be greater than 5. So, this is where I pop in",
];
let arrayOfDifferentTypesLength = arrayOfDifferentTypes.length;
console.log("Array of different types' legth: ", arrayOfDifferentTypesLength);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log("Number of companies in array is ", itCompanies.length);
// 9. Print the first company, middle and last company
console.log(
  itCompanies[0],
  itCompanies[parseInt(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

// 10. Print out each company
for (let i = 0; i < itCompanies.length; ++i) {
  console.log(itCompanies[i]);
}

// 11. C11hange each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  let capitalized = itCompanies[i].toUpperCase();
  console.log(capitalized);
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let firstFiveElements = itCompanies.slice(0, itCompanies.length - 1).toString();
let sentenceFromArray =
  firstFiveElements +
  " and " +
  itCompanies[itCompanies.length - 1] +
  "are big IT companies.";
console.log(sentenceFromArray);

// FCK, every other exercises are basic exercise, which you can complete if you have programming knowledge along with basic JS SyntaxError. So, I'm going to skip it

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// 14. Filter out companies which have more than one 'o' without the filter method

// 15. Sort the array using sort() method

// 16. Reverse the array using reverse() method

// 17. Slice out the first 3 companies from the array

// 18. Slice out the last 3 companies from the array

// 19. Slice out the middle IT company or companies from the array

// 20. Remove the first IT company from the array

// 21. Remove the middle IT company or companies from the array

// 22. Remove the last IT company from the array

// 23. Remove all IT companies
