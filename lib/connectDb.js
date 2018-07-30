import mongoose , { connection } from 'mongoose'

mongoose.connect("mongodb://kyrierose:Kyrie2rose1@ds257241.mlab.com:57241/alask-app")

connection.once('open',()=>{
    console.log("Connection Established!");
})

export default mongoose