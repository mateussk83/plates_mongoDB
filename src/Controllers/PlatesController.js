const PlatesModel = require("../Models/PlatesModel")

class PlatesController {
 async store(req, res) {
  const createdPlate = await PlatesModel.create(req.body)

  return res.status(200).json(createdPlate);
 }

 async index() {}

 async show() {}

 async update() {}

 async destroy() {}
}

module.exports = new PlatesController();