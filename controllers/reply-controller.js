const { model } = require('mongoose');
const {Reply, Thought, User}= require('../models');

const replyController = {
    addReply ({params, body}, res) {
        Reply.findOneAndUpdate(
            {_id: params.replyId},
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
    removeReply({params}, res) {
        Reply.findOneAndUpdate(
            {_id:params.replyId},
            {$pull:{replies: {replyId: params.replyId}}},
            {new:true}
        )
        .then(dbUserData=> res.json(dbUserData))
        .catch(err=> res.json(err));
    },
}

module.exports= replyController;