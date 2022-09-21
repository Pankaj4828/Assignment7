const express = require('express')
const app = express();
const mongoose = require('mongoose');

// const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// your code goes here

app.get("/",async(req,res)=>{
    // res.send("ok")
try{
   
   const Mario_Characters=await marioModel.find(req.body)
    res.json({
        
        Mario_Characters
    })

}catch(e) {
    res.status(400).json({
        status: "failed",
        message: e.message
    })
}
})

app.get("/:id",async(req,res)=>{
    // res.send("ok")
try{
   
   const Mario_Characters=await marioModel.find({_id: req.params.id})
    res.json({
        id:req.params.id,
        Mario_Characters
    })

}catch(e) {
    res.status(400).json({
        status: "failed",
        message: e.message
    })
}
})

app.post("/mario",async(req,res)=>{
        // res.send("ok")
try{
    const  Mario_Characters = await marioModel.create(req.body);
  
    res.status(201).json({
        
        Mario_Characters
    })

}catch(e) {
    res.status(400 ).json({
        status: "failed",
        // message: e.message,
        message: 'either name or weight is missing'

    })
}
})
app.patch("/:id",async(req,res)=>{
    data=req.body;
    
try{
    const  Mario_Characters = await marioModel.updateOne({_id: req.params.id},{name: req.body.name,weight:req.body.weight});
  
    res.json({
        
        Mario_Characters
    })

}catch(e) {
    res.status(400 ).json({
        status: "failed",
        // message: e.message,
        message: 'either name or weight is missing'

    })
}
})
app.delete("/:id", async (req, res) => {
    // Write the code for fetch
    try {
        const Mario_Characters = await marioModel.deleteOne({_id: req.params.id});
        res.status(200).json({
            message: 'character deleted'
        })

    }catch(e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }

});


module.exports = app;