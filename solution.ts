const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  } else {
    return (value = !value);
  }
};

// console.log(formatValue("My nsame is Mofassel Hosain"));
// console.log(formatValue(6));
// console.log(formatValue(true));
const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
};

// console.log(getLength("Ami ajke onek tried"));
// console.log(getLength([10, 30]));
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string | number {
    return `Name: ${this.name},  Age : ${this.age}`;
  }
}

// let person1 = new Person("Mofassel", 20);
// console.log(person1.getDetails());
// let person2 = new Person("Ishaq", 26);
// console.log(person2.getDetails());

type TBooks = {
  title: string;
  rating: number;
};
const filterByRating = (books: TBooks[]) => {
  let filterByRa = books.filter((allRating) => {
    return allRating.rating >= 4;
  });
  return filterByRa;
};
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 1.0 },
];
// console.log(filterByRating(books));
type TUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (Users: TUser[]) => {
  let filterByAcU = Users.filter((UserAvtive) => {
    return UserAvtive.isActive === true;
  });
  return filterByAcU;
};
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
// console.log(filterActiveUsers(users));

interface Book {
  title: String;
  author: String;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (myBooks: Book) => {
  if (myBooks.isAvailable === true) {
    let myPBooks = {
      Title: myBooks.title,
      Author: myBooks.author,
      Published: myBooks.publishedYear,
      Available: "Yes",
    };
    return myPBooks;
  } else {
    let myPBooks = {
      Title: myBooks.title,
      Author: myBooks.author,
      Published: myBooks.publishedYear,
      Available: "No",
    };
    return myPBooks;
  }
};
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};
// console.log(printBookDetails(myBook));

const getUniqueValues = (...UniqueArr: number[][]) => {
  const UniqueArrAdded: number[] = ([] as number[]).concat(...UniqueArr);
  const UniqueArrSetupNumber: Set<number> = new Set(UniqueArrAdded);
  return Array.from(UniqueArrSetupNumber);
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// console.log(getUniqueValues(array1, array2));

type TProduct = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: TProduct[]) => {
  const total = products.reduce((acclt, curtPr) => {
    const { price, quantity, discount } = curtPr;
    let ProductTotalPrice = price * quantity;
    if (discount && discount > 0) {
      const ProductDis = ProductTotalPrice * (discount / 100);
      ProductTotalPrice -= ProductDis;
    }
    return acclt + ProductTotalPrice;
  }, 0);

  return total;
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));
