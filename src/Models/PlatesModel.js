const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId

const PlatesSchema = new Schema({
 id: ObjectId,
 nome: String,
 secao: Array
})

const platesModel = mongoose.model('plates', PlatesSchema)

module.exports = platesModel;
