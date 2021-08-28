const Candidate = require('../models/Candidate');

module.exports = {
	async register(req, res) {
		
            const { name, email, gender, cep } = req.body;

            const newCandidate = new Candidate();

            newCandidate.name = name;
            newCandidate.email = email;
            newCandidate.gender = gender;
            newCandidate.cep = cep;

            newCandidate.save((err, savedCandidate) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('A requisição não funcionou');
                }
        
                return res.status(200).send(savedCandidate);
            });
	    },


};