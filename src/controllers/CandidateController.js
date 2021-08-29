const Candidate = require('../models/Candidate');

module.exports = {
	async register(req, res) {
		
            const { name, profession, position, birth, gender, cep, address, number, district, city,
                    phone1, phone2, cel, email, id, cpf, vehicle, license } = req.body;

            const newCandidate = new Candidate();

            newCandidate.name = name;
            newCandidate.profession = profession;
            newCandidate.position = position;
            newCandidate.birth = birth;
            newCandidate.gender = gender;
            newCandidate.cep = cep;
            newCandidate.address = address;
            newCandidate.number = number;
            newCandidate.district = district;
            newCandidate.city = city
            newCandidate.phone1 = phone1;
            newCandidate.phone2 = phone2;
            newCandidate.cel = cel;
            newCandidate.email = email;
            newCandidate.id = id;
            newCandidate.cpf = cpf;
            newCandidate.vehicle = vehicle;
            newCandidate.license = license;

            newCandidate.save((err, savedCandidate) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('A requisição não funcionou');
                }
        
                return res.status(200).send(savedCandidate);
            });
	    },


};