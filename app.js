const express=require("express");
const bodyparser=require("body-parser");
const ejs=require("ejs");


const app=express();
app.set('view engine','ejs');
 
app.use(express.static("public"));




app.get('/',function(req,res){
	res.render("home");
})



app.get('/Customer/UserRegisteration',function(req,res)
{
	res.render("/shop/views/Customer/UserRegisteration");
})

app.get('/userlogin/login',function(req,res)
{
	res.render("/shop/views/userlogin/login");
})


app.listen("3000",function(req,res)
{
	console.log("runninng on port 3000");
})