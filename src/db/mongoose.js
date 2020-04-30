const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { 
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
