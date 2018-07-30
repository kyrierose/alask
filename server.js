import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'

//Establish DB connection
import connect_db from './lib/connectDb'

//Route imports
import auth from './lib/routes/authentication'
import events from './lib/routes/events'

const PORT = process.env.PORT || 3000

const app = express()

//Using the middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Serve only static files from the dist directory
app.use(express.static(__dirname+"/dist/alask"))

app.use('/auth', auth)
app.use('/events',events)


app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname+"/dist/alask/index.html"))
})

app.get('**', (req, res)=>{
    res.send("You seems to be lost!!!")
})

app.listen(PORT, ()=> console.log(`Listening at PORT: ${PORT}`))