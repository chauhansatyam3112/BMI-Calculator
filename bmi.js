const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",function(req,res){
// send to server;
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    console.log(req.body);
    var h= Number(req.body.height);
    var w=Number(req.body.weight);
    var v1 =(h*h);
    var ans=Math.floor(w/v1);
    //res.sendStatus(200);
   res.send("The BMI is" +ans);


})
app.listen(3000,function(req,res){
    console.log("server is running");
});
