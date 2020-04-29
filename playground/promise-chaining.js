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

// const updateAgeAndCount = async(id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })
//     return count
// }

// updateAgeAndCount('5ea6efc5aff11f1c0d067572', 2).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log('error!', e)
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount('5ea6f2ab47f0981c6f48b5e4', false).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log('error!', e)
})