const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
	email: { type: String, unique: true, required: true },
	gender: { type: String, unique: false, required: true },
	cep: { type: String, unique: false, required: true }
    // colocar todos os campos que aparecem no formulário
}, {
	timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);