let UserList = [
    {
        id: 1,
        name: "John",
        userName: "john123",
        age: 28,
        nationality: "USA",
        friends: [
            {
                id: 2,
                name: "Emma",
                userName: "emma_w",
                age: 24,
                nationality: "UK",
                friends: null
            },
            {
                id: 3,
                name: "Raj",
                userName: "raj_dev",
                age: 30,
                nationality: "INDIA",
                friends: null
            },
        ]
    },
    {
        id: 2,
        name: "Emma",
        userName: "emma_w",
        age: 24,
        nationality: "UK",
        friends: null
    },
    {
        id: 3,
        name: "Raj",
        userName: "raj_dev",
        age: 30,
        nationality: "INDIA",
        friends: null
    },
    {
        id: 4,
        name: "Carlos",
        userName: "carlos7",
        age: 27,
        nationality: "SPAIN",
        friends: null
    },
    {
        id: 5,
        name: "Yuki",
        userName: "yuki_88",
        age: 22,
        nationality: "JAPAN",
        friends: null
    }
];


const MovieList = [
  {
    id: "1",
    name: "Inception",
    yearOfPublication: 2010,
    isInTheaters: false
  },
  {
    id: "2",
    name: "Interstellar",
    yearOfPublication: 2014,
    isInTheaters: false
  },
  {
    id: "3",
    name: "Avatar: The Way of Water",
    yearOfPublication: 2022,
    isInTheaters: false
  },
  {
    id: "4",
    name: "Dune",
    yearOfPublication: 2021,
    isInTheaters: false
  },
  {
    id: "5",
    name: "Oppenheimer",
    yearOfPublication: 2023,
    isInTheaters: false
  }
];

module.exports = { UserList, MovieList }