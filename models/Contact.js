const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    fullName: String,
    institution: String,
    email: String,
    phone: String,
})

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;