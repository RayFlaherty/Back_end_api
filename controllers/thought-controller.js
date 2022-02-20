const {Thought, User}= require('../models'); 
//const { db } = require('../models/user-models');

const thoughtController = {
    addThought({ params, body}, res){
        console.log(body);
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$push: {thought: _id}},
                {new: true}
            );
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No User found with this Id!'})
                return;
            }
            res.json(dbUserData);
        })
        .catch(err=> res.json(err));
    },
    removeThought({params}, res) {
        Thought.findOneAndDelete({_id: params.thoughtId})
        .then(deletedThought=> {
            if(!deletedThought) {
                return res.status(400).json({message: "No thought with this Id"})
            }
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$pull: {thoughts: params.thoughtId}},
                {new: true}
            );
        })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message:"No User Found with this Id!"})
                return;
            }
            res.json(dbUserData)
        })
        .catch(err=> res.json(err));
    },
    putThought({params, body}, res) {
        Thought.findOneAndUpdate({_id: params.thoughtId}, body, { new: true, runValidators:true })
            .then(dbUserData=> {
                if(!dbUserData){
                    res.status(404).json({ message: 'No Thought found with this Id'})
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    }
 
};

module.exports= thoughtController;