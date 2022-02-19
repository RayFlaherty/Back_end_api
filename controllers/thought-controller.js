const {Thought, User}= require('../models'); 
//const { db } = require('../models/user-models');

const thoughtController = {
    addThought({ params, body}, res){
        console.log(body);
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$push: {thoughts: _id}},
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

    addReply ({params, body}, res) {
        Thought.findOneAndUpdate(
            {_id: params.thoughId},
            {$push: {replies:body}},
            {new: true}
        )
        .then(dbUserData=> {
            if(!dbUserData) {
                res.status(404).json({message: 'No User found with this ID!'})
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
    removeReply({params}, res) {
        Thought.findOneAndUpdate(
            {_id:params.thoughtId},
            {$pull:{replies: {replyId: params.replyId}}},
            {new:true}
        )
        .then(dbUserData=> res.json(dbUserData))
        .catch(err=> res.json(err));
    },
};

module.exports= thoughtController;