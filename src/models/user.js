const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const schema = mongoose.Schema

const userSchema = new schema({
    name: {
        type: String
        ,required: true
        ,trim: true
    }
    ,age:{
        type: Number
        ,validate(value) {
            if(value < 0){
                throw new Error('Age must be a postive number')
            }
        }
        ,default: 0
    }
    ,email: {
        type: String
        ,required: true
        ,unique: true
        ,validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
        ,trim: true
        ,lowercase: true
    }
    ,password:{
        type: String
        ,required: true
        ,minlength: 7
    }
    ,tokens: [{
        token: {
            type: String
            ,required: true
        }
    }]
    ,avatar: {
        type: Buffer
        }
},
{
    timestamps: true,
})

userSchema.virtual('tasks', {
    ref: 'Task'
    ,localField: '_id'
    ,foreignField: 'owner'
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    return userObject
}


userSchema.methods.generateAutToken = async function () {
    const user = this

    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)//, {expiresIn: '30 minutes'})
    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}


// Checking if passwork is good
userSchema.statics.findByCredentials = async (email, password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error('User not found')

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error('Password not matching')

    return user
}

// Filling password with hash bcrypt when .save
userSchema.pre('save', async function (next) {
    const user = this
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 8)
    
    next()
})

// delete user when user is removed
userSchema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({owner: user._id})
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User