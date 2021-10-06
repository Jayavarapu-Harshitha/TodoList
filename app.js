const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const postRouter = require('./routes/posts')
app.use(cors())
app.use(express.json())
app.use('/posts', postRouter)

mongoose.connect('mongodb+srv://harshitha:harshitha@cluster0.oftim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connection successful')
}).catch(err=>{
    console.log(err)
})

app.listen(4000, ()=>{
    console.log('http://localhost:4000')
})