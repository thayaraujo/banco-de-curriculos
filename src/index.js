const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://bancoCurriculos:SxrqJBiPtKPI2pyI@cluster0.wejn0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	userNewUrlParser: true,
	useCreateInder: true
}); 

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);