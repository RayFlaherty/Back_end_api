// const res = require('express/lib/response');
const { User } = require ('../models');
// const { db } = require('../models/thought-model');

const userController= {
    getAllUsers(req, res){
        User.find({})
        .populate({
            path:'thought',    
            populate: {path: 'reaction'},
            select:'-__v',
            strictPopulate: false
        })
        .select('-__v')
        .sort({_id:-1})
        .then(dbUserData=> res.json(dbUserData))
        .catch(err=> {
            console.log(err);
            res.sendStatus(400);
        })
        
    
      
    },

    getUserById({params}, res) {
        User.findOne({_id: params.id})
            .populate({
                path: 'thought',
                select:'-__v',
                strictPopulate: false
            })
            .select('-__v')
            .then(dbUserData=> {
                console.log(dbUserData)
                if(!dbUserData){
                    res.status(404).json({message: `No User with this ID!`});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err=> {
                console.log(err);
                res.status(400).json(err);
            });
    },
    postNewUser({body}, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err=>res.json(err));
    },

    putNewUser({params, body}, res) {
        User.findOneAndUpdate({_id: params.id}, body, {new:true, runValidators:true})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(400).json({message:'No User found with this Id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
            
    },

    deleteUser({ params}, res){
        User.findOneAndDelete({_id: params.id})
        .then(dbUserData=> res.json(dbUserData))
        .catch(err => res.json(err));
    }
};

module.exports= userController