import express from 'express'
import path from 'path'

const PORT = process.env.PORT || 3000

const app = express()

//Serve only static files from the dist directory
app.use(express.static(__dirname+"/dist/alask"))

app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname+"/dist/alask/index.html"))
})

app.listen(PORT, ()=> console.log(`Listening at PORT: ${PORT}`))