const express =require("express");
const cors=require('cors');
const app=express();
const fs=require("fs");

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;
const routes={
    "/pharmacies":"returns pharmacies list for stratford", 
  "/colleges" : "returns colleges list for stratford",
"/doctors" : "returns doctors list for stratford ", 
"/hospitals": "returns hospitals list for stratford" 
}
app.get("/",(req,res)=>{
    res.send(routes)
})

app.get("/:city/:category",(req,res)=>{
    const cityName=req.params.city;
    const category=req.params.category;
    let filePath=__dirname + '/data/' + cityName +'.json';
    const cityData=JSON.parse(fs.readFileSync(filePath,'utf-8'))
    res.json(cityData[category]);
})

app.listen(PORT)