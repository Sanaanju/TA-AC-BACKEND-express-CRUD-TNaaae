//required
var express=require('express');
var app=express();
var indexRouter=require('./routes/index');
var usersRouter=require('./routes/user');

var mongoose=require('mongoose');


//connect to database
mongoose.connect('mongodb://localhost/users',(err)=>{
    console.log(err?err:'Connected to Database');
})

//capture the data
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname+'/public'));


//set up view engine
app.set('view engine','ejs');
app.set('views',__dirname+'/views');


//middlewares


//router middlewares
app.use('/',indexRouter);
app.use('/users',usersRouter);


//error handler
app.use((req,res,next)=>{
    res.send('Page not found');
    next();

})

//custom error handler
app.use((err,req,res,next)=>{
    res.send(err);
    next();
})


//listener
app.listen(3000,()=>{
    console.log('server is listening at port 3000');
})
