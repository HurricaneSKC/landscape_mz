// setup the inital route for storing emails
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose");

    
// setup database to store names? and email addresses
mongoose.connect("mongodb://localhost/money_zingers", { useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


// routes
app.get('/2', function(req, res){
    res.render("index")
});

app.get('/', function(req, res){
    res.render("index2")
});

// post email
// create route - new object POST add to db 
// app.post('/mzemails', function(req, res){
//     var name = req.body.name;
//     var email = req.body.email;
    
//     var newdata = {name: name, email: email}
//     // create new campground and save to DB
//     NewData.create(newdata, function(err, newCreate){
//         if(err){
//             console.log(err)
//         } else {
//             res.redirect("/");
//         }
//     })
    
// });


// server load
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Money Zingers has started");
});
