const express = require('express');
const passport = require('passport');
const generateId = require("uuid/v4");
const jwt = require('jwt-simple');
const router = express.Router();
const Organisation = require('../models/organisation');
const config = require('../config');

// Define your endpoints here
router.get('/', (req,res) => {
    Organisation.find().then(
        organisations => {
            console.log(organisations)
            res.json(organisations) 
    }).catch(err => next(err))
})

// Define your endpoints here
router.get('/:id', (req,res, next) => {
    Organisation.findById(req.params.id).then(
        organisation => {
            res.json(organisation) 
    }).catch(err => next(err))
}),

router.post('/', (req,res)=> {
    const id = generateId();
    const {  name,
        description,
        contact,
        address,
        country,
        city,
        category,
        needs,
        } = req.body;
    // const ownerId = req.user ? req.user._id : null;
    const ownerId = "59f1b03405e40067a6966d4f"; // TODO: change

    const organisation = new Organisation({
        id,
        name,
        description,
        contact,
        address,
        country,
        city,
        category,
        needs,
        ownerId
    });



    organisation.save((err) => {
        if(err) {
            res.json(err);
            return;
        }

        res.json({
            id: organisation._id,
            name: organisation.name,
            description:organisation.name,
            contact:organisation.contact,
            address: organisation.address,
            country: organisation.country,
            city: organisation.city,
            category: organisation.category,
            needs: organisation.needs,
            ownerId,

        })
    })
})
router.delete('/:id', (req,res, next) => {
    Organisation.findByIdAndRemove(req.params.id).then(
        organisation => {
            res.json(organisation) 
    }).catch(err => next(err))
}),


router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const {name,
        description,
        contact,
        address,
        country,
        city,
        category,
        needs,
        } = req.body;
        const changes = {name,
            description,
            contact,
            address,
            country,
            city,
            category,
            needs} 
        
        Object.keys(changes).forEach(key => {
            if (!changes[key]) {delete changes[key]}
        })
console.log(changes);

    Organisation.findByIdAndUpdate(id, changes).then(() => {
        res.json("edited");
    })
})
module.exports = router;
