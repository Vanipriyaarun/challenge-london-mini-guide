const express =require("express");
const app=express();
const fs=require("fs");
// const harrow=JSON.parse(fs.readFileSync('Harrow.json','utf-8'));
// const heathrow=JSON.parse(fs.readFileSync('Heathrow.json','utf-8'));
// const stratford=JSON.parse(fs.readFileSync('Stratford.json','utf-8'));
const PORT = process.env.PORT || 5000;

// let cities=[harrow,heathrow,stratford]

app.get("/:city",(req,res)=>{
    const city=req.params.city;
    
    // const cityDetails=cities.find(c=>c==city)
    res.json(cityDetails);
})

// app.get("/colleges",(req,res)=>{
//     res.json(harrow.colleges);
// })

// app.get("/hospitals",(req,res)=>{
//     res.json(harrow.hospitals);
// })

// app.get("/doctors",(req,res)=>{
//     res.json(harrow.doctors);
// })
app.listen(PORT)