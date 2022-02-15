const {Schema, model, Types, trusted} = require ('mongoose');
const dateformat = require('../utils/dateformat');
const dateFormat = require('../utils/dateformat');

const thoughtSchema = new Schema(
    {
        thoughtId:{
            type: Schema.Types.ObjectId,
            default: ()=> new Types.ObjectId()
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
        reaction: []
    },
    {
        toJSON:{
            getters: true
        }
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reaction.length;
})

const Thought = model ('Thought', thoughtSchema);

module.exports= Thought;