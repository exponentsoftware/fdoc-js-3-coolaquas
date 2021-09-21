// 1.A.Write a function called convertArrayToObject which can convert the array to a structured object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
const convertArrayToObject = (arr) => {
  let temp = [];
  arr.forEach((element) => {
    let tempObj = {};
    tempObj.name = element[0];
    tempObj.skills = element[1];
    tempObj.scores = element[2];
    temp.push(tempObj);
  });

  return temp;
};
// console.log(convertArrayToObject(students));

//1.B)Copy the student object to newStudent without mutating the original object. In the new object add the following
const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
const cloneObject = (ob) => {
  const temp = { ...ob };
  temp.skills.frontEnd.push({ skill: "BootStrap", level: 8 });
  temp.skills.backEnd.push({ skill: "Express", level: 9 });
  temp.skills.dataBase.push({ skill: "SQL", level: 8 });
  temp.skills.dataScience.push("SQL");
  return temp;
};
// console.log(JSON.stringify(cloneObject(student2), null, 2));

//1.B.a)Find the length of student object keys
const findKey = (ob) => console.log(Object.keys(ob).length);
findKey(student2);

//1.B.b)Find the length of the student object values
const findValue = (ob) => console.log(Object.values(ob).length);
findValue(student2);

//1.B.c)Find the length of skills object keys
findKey(student2.skills);

//1.B.d)check if the student object has graphicDesign property
const findProperty = (ob, propName) =>
  console.log(
    ob.hasOwnProperty(propName) || ob.skills.hasOwnProperty(propName)
  );

findProperty(student2, "graphicDesign");

//1.B.e)Iterate the keys of the student object
const keyIteration = (ob) => Object.keys(ob)?.map((elem) => console.log(elem));
keyIteration(student2);

//2.)
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

//2.a.a)Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = (ob) => {
  let isUserExists = users.some((usr) => usr.email === ob.email);
  if (isUserExists) return "User already exists";
  else {
    users.push(ob);
    return "New user created";
  }
};
// console.log(
//   signUp({
//     _id: "ab12ex",
//     username: "Alex",
//     email: "alex@alex.com",
//     password: "123123",
//     createdAt: "17/05/2019 9:00 AM",
//     isLoggedIn: false,
//   })
// );

//2.a.b)Create a function called ***signIn*** which allows user to sign in to the application.
const signIn = (ob) => {
  let isUserExists = users.some(
    (usr) =>
      usr.email === ob.email &&
      usr.password === ob.password &&
      usr.username === ob.username
  );
  if (!isUserExists)
    return "Please check username,email,password and try again.";
  else {
    return "Successfully Sign in";
  }
};
console.log(
  signIn({
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
  })
);

//2.b.a) Create a function called ***rateProduct*** which rates the product
const totalrateProduct = () =>
  products.map((prod) =>
    console.log({
      Name: prod.name,
      rate:
        prod.ratings.length === 0
          ? 0
          : prod.ratings.reduce((prev, cur) => prev + cur.rate, 0),
    })
  );
totalrateProduct();

//2.b.b) Create a function called ***averageRating*** which calculate the average rating of a product
const avaragerateofProduct = (prodName) => {
  let indexOfTheProduct = products.findIndex((prod) => prod.name === prodName);
  if (indexOfTheProduct === -1)
    return console.log("No product available with the same name.");
  else {
    return console.log(
      `Avarage rating of ${prodName} is ${
        products[indexOfTheProduct].ratings.length === 0
          ? 0
          : products[indexOfTheProduct].ratings.reduce(
              (prev, cur) => prev + cur.rate,
              0
            ) / products[indexOfTheProduct].ratings.length
      }`
    );
  }
};
avaragerateofProduct("mobile phone");

//2.c) Create a function called ***likeProduct***. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (prodName, userId) => {
  let indexOfTheProduct = products.findIndex((prod) => prod.name === prodName);
  if (indexOfTheProduct === -1)
    return console.log("No product available with the same name.");
  else {
    indexOfTheUser = products[indexOfTheProduct].likes.findIndex(
      (usrID) => usrID === userId
    );
    if (indexOfTheUser === -1) products[indexOfTheProduct].likes.push(userId);
    else products[indexOfTheProduct].likes.splice(indexOfTheUser, 1);
  }
};
likeProduct("TV", "fg12cy");
console.log(products);
