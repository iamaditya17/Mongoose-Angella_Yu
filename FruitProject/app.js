const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true }); //fruitsDB is the name of the DB


//creating a schema to desing/model the Database
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

//use the schema to create a mongoose model

const Fruit = mongoose.model("Fruit", fruitSchema);
// mongoose.model() will take 2 parameters , 1st one is the name of the collections & 2nd one is the name of the schema

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Great fruit"
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 5,
    review: "Jelly fruit"
});

const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "Sweet fruit"
});

const mango = new Fruit({
    name: "Mango",
    rating: 10,
    review: "Over Sweet fruit"
});

//when we want to store multiple data objects

// Fruit.insertMany([kiwi,banana,mango])
//     .then(() => {
//         console.log("All the fruits are saved successfully!");
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// Save the fruit object to the database(when we have only one data object to store)

/*fruit.save()
    .then(() => {
        console.log("Fruit saved successfully!");
    })
    .catch((err) => {
        console.error(err);
    });

*/

Fruit.find({}, 'name')   //only finding the name of the fruits
    .then((fruits) => {

        console.log(fruits);
        
    })
    .catch((err) => {
        console.error(err);
    });

// or

Fruit.find()
    .then((fruits) => {

       // mongoose.connection.close();   --> used to close the connection

        fruits.forEach((fruit) => {
            console.log(fruit.name);
        })
    })
    .catch((err) => {
        console.error(err);
    });


// People DB

const peopleSchema = new mongoose.Schema({

    name: String,
    age: Number
});

const People = mongoose.model("Peoples", peopleSchema);

const people = new People({

    name: "Aditya",
    age: 21
});

people.save();



