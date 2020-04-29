require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')


//5ea6d6c80823b81967968532

// User.findByIdAndUpdate('5ea6d6c80823b81967968532', { age: 0 }).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 0})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

//5ea6d6c80823b81967968532

Task.findByIdAndDelete('5ea6d80e11df4b199fecc442').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})