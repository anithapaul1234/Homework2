const Express=require('express');
var app=new Express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/add',(req,res)=>{
    //res.send("hello welcome");
    res.render('add');
});

app.get('/add/view',(req,res)=>{
    //res.send("hello welcome");
    res.render('view');
});

app.listen(3000,()=>
{
    console.log("Server running on http://localhost:3000");
});