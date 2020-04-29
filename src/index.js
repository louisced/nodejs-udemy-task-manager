const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//Maintenance function
// app.use((req, res, next) => {
//     res.status(503).send('Under maintenance. Check back soon !')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server started on port ' + port)
})


// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5ea897a6d4a4ee376af7e12d')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5ea8979ad4a4ee376af7e12b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()