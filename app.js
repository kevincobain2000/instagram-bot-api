var express = require('express')
, routes = require('./routes')
, user = require('./routes/user')
, http = require('http')
, path = require('path');

var app = express();
var io = require('socket.io');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


var bot = require(__dirname+'/bot/bot');
// This is where you would initially send users to authorize
app.get('/authorize_user', bot.authorize_user);
// This is your redirect URI
app.get('/handleauth', bot.handleauth);


app.post("/handleauth", function(req, res){
    
    console.log(req.body.tags); //{ name: 'asd' }
    //if ajax is GET then req.query
    // if files then req.files
    if(req.body.tag){
        var tag = req.body.tag;
        console.log(tag);
        bot.like(tag, function (callback){ 
            res.send("Response", callback);
        });
    }    
});  

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', function(req,res){
    res.redirect("handleauth");
});
app.get('/users', user.list);

var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
io = io.listen(server);

