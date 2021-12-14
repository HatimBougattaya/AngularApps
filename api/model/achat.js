let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AchatSchema = Schema({
    id: Number,
    produit: String,
    magasin: String,
    dateAchat: Date,
    dateValidation: Date,
    valid: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Achat', AchatSchema);
