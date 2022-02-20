const {Schema, model, Types} = require ('mongoose');

const dateFormat = require ('../utils/dateformat')

const ReactionSchema = new Schema (
    {
        reactionBy:{
            type: String,
            required: true,
            new : true
        },
        reactionText: {
            type:String,
            required:true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:createdAtVal => dateFormat(createdAtVal)
        }
    },
     {   
         toJson: {
            getters:true
        }

    }
    
);

ReactionSchema.virtual('reactionCount').get(function(){
    return this.reaction.length;
})

const Reaction = model('Reaction',ReactionSchema)

module.exports= Reaction;