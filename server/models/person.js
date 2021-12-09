const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: { type: String }
}, { timestamps: true })
const Person = mongoose.model('Person', PersonSchema);

module.exports = {
    Person: Person,
}

// Use native promises
mongoose.Promise = global.Promise;