const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) })
            return user;
        },

        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            return _.find(MovieList, { name: args.name })
        }
    },

    User: {
        favoriteMovies: () => {
            const favMovies = _.filter(MovieList, (movie) => movie.yearOfPublication > 2015 && movie.yearOfPublication < 2025);
            return favMovies;
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user)
            return user;
        },

        updateUserName: (parent, args) => {
            const { id, newUserName } = args.input;
            let updatedUser;
            UserList.forEach((user)=>{
                if(user.id==id){
                    user.userName = newUserName;
                    updatedUser = user;
                }
            });
            return updatedUser;
        },

        deleteUser: (parent, args) => {
            let id = args.input;
            id = Number(id)
            const user = _.find(UserList, { id });
            _.remove(UserList, (u) => u.id === id);
            return user;
        }
    }
};

module.exports = { resolvers }