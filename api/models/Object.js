const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectSchema = new Schema({
    id: String,
    title: String,
    desc: String,
    body: String,
 });

module.exports = mongoose.model('Objects', objectSchema);