const express = require('express');
const passport = require('passport');
const jwt = require('jwt-simple');
const router = express.Router();
const Organisation = require('../models/organisation');
const config = require('../config');

// Define your endpoints here
router.get('/', (req,res) => {
    Organisation.find().then(
        organisations => {
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

router.post('/',passport.authenticate('jwt', config.jwtSession), (req,res)=> {
    const {
        name,
        description,
        contact,
        address,
        country,
        city,
        category,
        needs,
        } = req.body;
    const ownerId = req.user ? req.user._id : null;

    const organisation = new Organisation({
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

    organisation.save()
    .then(org => res.json(org))
    .catch(err => next(err))
})
router.delete('/:id', (req,res, next) => {
    Organisation.findByIdAndRemove(req.params.id).then(
        () => {
            res.sendStatus(202)
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

    Organisation.findByIdAndUpdate(id, changes, { new: true }).then(org => {
        res.json(org);
    })
})
module.exports = router;
