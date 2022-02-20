const {Schema, model, Types} = require ('mongoose');

const dateFormat = require ('../utils/dateformat')

const ReplySchema = new Schema (
    {
        replyBy:{
            type: String,
            required: true,
            new : true
        },
        replyText: {
            type:String,
            required:true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:createdAtVal => dateFormat(createdAtVal)
        },
        toJson: {
            getters:true
        }
    }
);

ReplySchema.virtual('reactionCount').get(function(){
    return this.reaction.length;
})

const Reply = model('Reaction',ReplySchema)

module.exports= Reply;