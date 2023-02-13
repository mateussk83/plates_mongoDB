const mongoose = require('mongoose')

async function startDB() {
 await mongoose.connect('mongodb+srv://user_admin:admin@cluster0.dikpc3x.mongodb.net/test');
}

module.exports = startDB;