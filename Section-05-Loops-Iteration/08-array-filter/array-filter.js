const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 29, 50];
//3 ways of doing this:
//1st way:
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

//2nd way: shorter way than the 1st
const evenNums = numbers.filter((number) => number % 2 === 0);
console.log(evenNums);

//3rd way: complicated way
const arrEvenNumbers = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    arrEvenNumbers.push(number);
  }
});

console.log(arrEvenNumbers);

//getting only retail companies from the companies object

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//Get only retail companies

const retailCompanies = companies.filter((company) => {
  return company.category === 'Retail';
});

console.log(retailCompanies);

//Get companies that started in or after 1980 and ended in or before 2005

const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);

console.log(earlyCompanies);

//Get companies that lasted 10 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(longCompanies);
