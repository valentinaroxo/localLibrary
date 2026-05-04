const mongoose = require("mongoose")

const Schema = mongoose.Schema

const GameSchema = new Schema({
    name: {type: String, required: true},
    developer: {type: String},
    genre: {type: String}
})

GameSchema.virtual("url").get(function(){
    return `catalog/game/${this._id}`
})

module.exports = ["Games", GameSchema]