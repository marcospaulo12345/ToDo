const taskModel = require('../model/taskModel');
const { response } = require('express');

class taskController {
    async create(req, res) {
        const task = new taskModel(req.body);

        await task
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
    async update(req, res) {
        await taskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error =>{
                return res.status(500).json(error);
            });



    }
    async all(req, res) {
        await taskModel.find({ macaddress: {'$in': req.body.macaddress} })
            .sort('when')
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error =>{
                return res.status(500).json(error);
            });
    }
}

module.exports = new taskController();