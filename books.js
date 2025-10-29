const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection successful")
})
.catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  //this work as NOT NULL
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
     genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("69024206dfac8e762f2e9e1f", {price: -500})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties);
});

// let book1 = new Book({
//     title: "Matematics",
//     // author: "RD Sharma",
//     price: 500,
//     category: "fiction",
//     genre: ["comic", "superheroes", "fiction"],
// }); 
// book1.save().then(res => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });