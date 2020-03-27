const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

//Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

//Session Ong
routes.post('/session', SessionController.store);

//Incident
routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.store);
routes.delete('/incident/:id', IncidentController.delete);

//Profile Ong
routes.get('/profile', ProfileController.index);

module.exports = routes;
