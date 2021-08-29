const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
	profession: { type: String, unique: false, required: true },
	position: { type: String, unique: false, required: true },
	birth: { type: String, unique: false, required: false },
	gender: { type: String, unique: false, required: false },
	cep: { type: String, unique: false, required: true },
	address: { type: String, unique: false, required: true },
	number: { type: String, unique: false, required: true },
	district: { type: String, unique: false, required: true },
	city: { type: String, unique: false, required: true },
	phone1: { type: String, unique: false, required: false },
	phone2: { type: String, unique: false, required: false },
	cel: { type: String, unique: true, required: true },
	email: { type: String, unique: true, required: true },
	id: { type: String, unique: true, required: false },
	cpf: { type: String, unique: true, required: true },
	vehicle: { type: String, unique: false, required: false },
	license: { type: String, unique: false, required: false }
	    
}, {
	timestamps: true
});

module.exports = mongoose.model('candidates', CandidateSchema);