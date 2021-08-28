const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb+srv://bancoCurriculos:gGRjTqSp68KZ5ITa@gama.wejn0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}); 



app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.get('/', (req, res) => {
	res.send('Hello World!')
});
app.listen(process.env.PORT || 3000);
app.listen('3000', () => {
	console.log('rodando na porta 3000');
})