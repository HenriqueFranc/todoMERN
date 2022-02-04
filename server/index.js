const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const TodoModel = require('./models/Schema')


const app = express()
app.use(express.json())
app.use(cors())

// Mongodb Connection
// mongoose.connect('here put your mongodb link to connect') 


app.post('/insert', async(req,res) =>{

    const todo = req.body.task

    const item = new TodoModel({task: todo , hasDone: false})
    
    try{
        await item.save()

    }catch(err){
        console.log(err)
    }
})
app.delete('/delete/:id', async(req,res) =>{

    const id = req.params.id
    
    try{
        await TodoModel.deleteOne({_id: id})
        res.send('deleted')
    }catch(err){
        console.log(err)
    }
})
app.put('/update/:id',async(req,res)=>{

    const id = req.params.id
    const newTask = req.body.taskUpdate
    try{
        await TodoModel.updateOne({_id: id},{task : newTask},(err,res)=>{
            
        })
        res.send('updated')
    }catch(err){
        console.log(err)
    }
})
app.put('/updateHasDone/:id',async(req,res)=>{

    const id = req.params.id
    const newHasDone = req.body.hasDone
    try{
        await TodoModel.updateOne({_id: id},{hasDone : newHasDone},(err,res)=>{
            
        })
        res.send('updated')
    }catch(err){
        console.log(err)
    }
})

app.get('/getItems', async(req,res) =>{

   
    
    try{
        await TodoModel.find({},(err,result)=>{
            if(err){
                res.send(err)
            }
            res.send(result)
        })

    }catch(err){
        console.log(err)
    }
})

app.listen(3002,()=>{

    console.log('server is runnin on port 3002')
})