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

const waterMelon = new Fruit({
    name: "Watermelon",
    rating: 9,
    review: "very tasty"
});

waterMelon.save()
    .then(() => {
        console.log("Fruit saved successfully!");
    })
    .catch((err) => {
        console.error(err);
    });

