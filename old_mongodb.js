// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) return console.log('Unable to connect to database')
    
    // console.log('connected correctly!')
    
    const db = client.db(databaseName)


})

// CREATION and WRITE documents

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)


   // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Cedric',
    //     age: 38
    // }, (error, result)=> {
    //     if (error) return console.log('Unable to insert user')
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Cedric',
    //         age: 38
    //     },{
    //         name: 'Danielle',
    //         age: 34
    //     }
    // ],(error, result)=>{
    //     if (error) return console.log('Unable to insert documents')
    //     console.log(result.ops)
    // }) 

    // db.collection('task').insertMany([
    //     {
    //         description: 'description 1',
    //         completed: true
    //     },{
    //         description: 'description 2',
    //         completed: false
    //     },{
    //         description: 'description 3',
    //         completed: true
    //     }
    // ],(error, result)=>{
    //     if (error) return console.log('Unable to insert documents')
    //     console.log(result.ops)
    // }) 

    //
    // READ
    //

        // db.collection('users').findOne( { name: 'Cedric', age: 38 }, (error, user) =>{
    //     if (error) return console.log('Unable to fetch')
    //     console.log(user)
    // })

    // db.collection('users').find( { name: 'Cedric', age: 38 }).toArray((error, users) =>{
    //     if (error) return console.log('Unable to fetch')
    //     console.log(users)
    // })

    // db.collection('users').find( { name: 'Cedric', age: 38 }).count((error, count) =>{
    //     if (error) return console.log('Unable to fetch')
    //     console.log(count)
    // })

    // db.collection('users').find( { name: 'Cedric', age: 38 }).forEach((user) =>{
    //     console.log(user)
    //     console.log('user: ' + user.name + 'age: '+ user.age)
    // },(error)=>{
    //     console.log(error)
    // })

    // db.collection('task').findOne( 
    //     { _id: new ObjectID("5ea5a3c73c6fbe0c41edfd75") }, 
    //     (error, task) =>{
    //         if (error) return console.log('Unable to fetch')
    //         console.log(task)
    //     })

    // db.collection('task').find( { completed: false }).toArray(
    //     (error, tasks) =>{
    //         if (error) return console.log('Unable to fetch')
    //         console.log(tasks)
    //     })

    // MODIFICATION

    // db.collection('users').updateOne({
        //     _id: new ObjectID("5ea5a913d1a9e70ce9b08365")
        // }, {
        //     $inc: { age: -1 }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('task').updateMany({
    //         completed: false
    //     },{
    //         $set:{completed: true}
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // DELETE


    // db.collection('users').deleteMany({
    //     age: 37
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('task').deleteOne({
    //     description: "description 2"
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })