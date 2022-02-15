const {Schema, model} = require ('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new User(
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
        thoughts:[
            {
            type:Schema.Types.ObjectId,
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

userSchema.plugin(uniqueValidator);

const User = model ('User', UserSchema);

module.exports = User;

