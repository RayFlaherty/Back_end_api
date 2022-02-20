
const {Reaction, Thought}= require('../models');

const reactionController = {
    addReaction({ params, body}, res){
        console.log(body);
        Reaction.create(body)
        .then(({_id}) => {
            return thought.findOneAndUpdate(
                {_id: params.thoughtId},
                {$push: {reaction: _id}},
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
    removeReaction({params}, res) {
        Reaction.findOneAndDelete({_id: params.replyId})
        .then(deletedReaction=> {
            if(!deletedReaction) {
                return res.status(400).json({message: "No thought with this Id"})
            }
            return Thought.findOneAndUpdate(
                {_id: params.thoughtId},
                {$pull: {reaction: params.reactionId}},
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
 
};

module.exports= reactionController;