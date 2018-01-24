const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/product", { useMongoClient : true });

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name : String,
    category : String,
    price : String,
    color : String,
    size: String,
    picture : String
});

const item = mongoose.model("product", itemSchema);

module.exports = item;