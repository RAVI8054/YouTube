import express from 'express'
const app = express();

let port=8000
app.get('/',(req,res)=>{
    res.send(
        {
            message:'hii'
        }
    )
})

app.listen(port,()=>(console.log(`backed started at ${port}`)
))