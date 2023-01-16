const express =require("express");
const app=express();
const fs=require("fs");


const PORT = process.env.PORT || 5000;
app.use(express.json());
if(process.env.NODE_ENV==="development"){
 const cors=require('cors');
 app.use(cors());
}else{
    app.use(express.static('build')); 
}

// app.use(cors({
//   origin: 'http://localhost:3000'
// }));

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
    const cityName=req.params.city.toLowerCase();
    const category=req.params.category.toLowerCase();
    let filePath=__dirname + '/src/data/' + cityName +'.json';
    console.log(filePath);
    const cityData=JSON.parse(fs.readFileSync(filePath,'utf-8'))
    res.json(cityData[category]);
})

app.listen(PORT, () => { console.log(process.env.NODE_ENV, ': Listening on port:', PORT); });