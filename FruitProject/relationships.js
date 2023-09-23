const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });


//Designing Fruit DB schema with validating data

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

const pineApple = new Fruit({

    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
});

pineApple.save();


//Designing Peoples DB schema
const peopleSchema = new mongoose.Schema({

    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const People = mongoose.model("Peoples", peopleSchema);

const people = new People({

    name: "Ayush",
    age: 21,
    favouriteFruit: pineApple
});

people.save();
