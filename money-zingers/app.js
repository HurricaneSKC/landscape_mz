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
app.get('/', function(req, res){
    res.render("index2")
});

//Schema // MONGOOSE/MODEL CONFIG
var emailSchema = new mongoose.Schema({
    email: String,
});

var Email = mongoose.model("Email", emailSchema)

// create route - new object POST add to db 
app.post('/', function(req, res){
    var email = req.body.email;
    var newEmail = {email: email}
    // create new campground and save to DB
    Email.create(newEmail, function(err, newCreate){
        if(err){
            res.redirect("/");
        } else {
            res.redirect("/");
            // prompt("Thankyou for your email")
        }
    })
    
});


// server load
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Money Zingers has started");
});
