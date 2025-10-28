const mongoose = require('mongoose');

let url = "https://localhost:8080/users"

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(() => {
    console.log("connection successful")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// User.find({age: {$gt: 47} })
// .then((res) => {
//     console.log(res[0].name);
// })

// User.findOne({age: { $gt: 47 } })
User.findOne({_id: '69008ec942fd4854768dc0ed'})
.then((res) => {
    console.log(res);
})

.catch((err) => {
    console.log(err);
});

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 100},
//     {name: "Skot", email: "skot@gmail.com", age: 102},
//     {name: "Vidyut", email: "vidyut@gmail.com", age: 120}
// ]).then((res) => {
//     console.log(res);
// });

// const user2 = new User({
//     name: "Shiva",
//     email: "shiva@shiva.com",
//     age: 10000,
// });

// user2
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });



