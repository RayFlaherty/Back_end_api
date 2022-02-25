const {Schema, model, Types} = require ('mongoose');

const dateFormat = require('../utils/dateformat');

const ThoughtSchema = new Schema(
    {
        writtenBy:{
            type: String,
            required: true,
            new: true
        
        },
        thoughtText:{
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:createdAtVal => dateFormat(createdAtVal)
        },
        reaction: [ 
            {
                type:Schema.Types.ObjectId,
                ref:'Reaction'
                }
        ]
    },
    {
        toJSON:{
            virtuals:true,
            getters: true
        },
        id:false
    }
);

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reaction.length;
})

const Thought = model ('Thought', ThoughtSchema);

module.exports= Thought;