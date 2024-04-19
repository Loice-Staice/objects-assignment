//write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
    {name: 'Alice',age: 17},
    {name: 'Eunice',age: 22},
    {name: 'Charlie',age: 14},
    {name: 'Max',age: 19},
];
let adults = [];
people.forEach(i => {
  if (i.age >= 18) {
    adults.push(i.name);
  }
});

console.log(adults)

//2
function categories(products){
  let categorisedItems =Object.groupBy(products, product=>product.category)
console.log(categorisedItems);
}

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];



  //3
  const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  function averageScores(){
    const students = [
      { name: 'John', scores: [90, 80, 85] },
      { name: 'Jane', scores: [95, 92, 88] },
      { name: 'Jim', scores: [70, 80, 75] },
      { name: 'Jill', scores: [85, 90, 84] },
    ];
    let newArr = [];
    students.forEach(student => {
      let sum = student.scores.reduce((a,b) => a+b);
      const average = sum/student.scores.length;
      if(average >= 85){
        newArr.push(student.name)
      }
    });
    console.log(newArr);
    return newArr
  }
  averageScores();



  //4

  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
    age: function(){
      return (2024 - car.year);
    },
  };
  console.log(car.age());