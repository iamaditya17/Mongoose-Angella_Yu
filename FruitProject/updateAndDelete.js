const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });


//Designing schema with validating data

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);


//UPDATE

// Fruit.updateOne({ _id: "650d5dd20183674be6448790" }, { name: "Peach" })
//     .then(() => {
//         console.log("Successfully Updated!!");
//     })
    
//     .catch((err) => {
//         console.log(err);
//     })

//DELETE

Fruit.deleteOne({ _id: "650d4f79006f2f565d3564c3" })
    .then(() => {
        console.log("Successfully deleted!!");
    })
    
    .catch((err) => {
        console.log(err);
    })