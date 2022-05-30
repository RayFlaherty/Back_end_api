const {Schema, model} = require ('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema(
    {
        userName:{
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        thought:[
            {
            type:Schema.Types.ObjectId,
            ref:'Thought'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },

        // preventing virturals from creating duplicate ids
        id:false
    }
)

UserSchema.plugin(uniqueValidator);

UserSchema.virtual('thoughtCount').get(function(){
    return this.thought.length
})

const User = model ('User', UserSchema);

module.exports = User;

