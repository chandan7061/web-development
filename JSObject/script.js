let Fdata = [
  {
    name: "Amit Sharma",
    dob: "2002-05-14",
    phone: "9876543210",
    city: "Bhopal",
    profession: "Software Developer",
  },
  {
    name: "Priya Verma",
    dob: "2001-09-21",
    phone: "9123456780",
    city: "Indore",
    profession: "Graphic Designer",
  },
  {
    name: "Rahul Singh",
    dob: "2000-12-10",
    phone: "9988776655",
    city: "Delhi",
    profession: "Teacher",
  },
  {
    name: "Sneha Patel",
    dob: "2003-03-18",
    phone: "9012345678",
    city: "Mumbai",
    profession: "Doctor",
  },
  {
    name: "Vikas Gupta",
    dob: "1999-07-25",
    phone: "9090909090",
    city: "Pune",
    profession: "Engineer",
  },
];

// forEach loop
Fdata.forEach((element) => {});
console.log(Fdata);
console.log(Fdata[1]["name"]);

let Vikash = {
  name: "Vikas Gupta",
  dob: "1999-07-25",
  phone: "9090909090",
  city: "Pune",
  profession: "Engineer",
};

console.log(Object.keys(Vikash));
console.log(Object.values(Vikash));
console.log(Object.entries(Vikash));
