const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { 
    useNewUrlParser: true 
    ,useCreateIndex: true
    ,useUnifiedTopology: true
    ,useFindAndModify: false
})



// const me = new User({
//     name: '    Cedric'
//     // ,age: '38'
//     ,email: 'cedric@gmaiL.COM'
// })

// me.save()
//     .then(()=>{
//         console.log(me)
//     }).catch((e)=>{
//         console.log(e.message)
//     })



// const task = new Task({
//     description: 'description1'
//     // ,completed: false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((e)=>{
//     console.log('Error! ', e.message)
// })
