const { Router } = require('express');
const PlatesController = require('./Controllers/PlatesController');



const routes = Router();

routes.get('/health', (req, res) =>{
 return res.status(200).json({message: "Server is on..."})
})

routes.post('/plates', PlatesController.store)

module.exports = routes;