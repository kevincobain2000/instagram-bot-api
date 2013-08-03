var instaConfig = require(__dirname+"/instaConfig.js");

exports.ig = require('instagram-node').instagram();
exports.ig.use({ client_id: instaConfig.client_id,
    client_secret: instaConfig.client_secret });
var eventEmitter = require('events').EventEmitter;
exports.em = new eventEmitter();


exports.like = function like(tag,callback) {
    exports.ig.tag_media_recent(tag, function(err, medias, pagination, limit) {
        
        for (var item in medias) {
            id = medias[item]['id'];

            exports.ig.add_like(id, function(err, limit) {
                if(err){
                    console.log(err);
                }
                if(limit) console.log("The limit is: "+ limit);
            }); //endlike
            callback(medias);
        } //endfor media
    });//end media_recent
} //end funtion



exports.authorize_user = function(req, res) {
    exports.ig.use({ client_id: instaConfig.client_id,
                client_secret: instaConfig.client_secret });
    res.redirect(exports.ig.get_authorization_url(instaConfig.redirect_uri, {scope: ['likes'], state: 'a state'}));
};


exports.handleauth = function(req, res) {
    console.log(req.session);
    if (req.session.token) {
        exports.ig.use({access_token: req.session.token});
//        res.send("Logged in Successful");
        res.render("handleauth");
    } //end if session.token
    else{
        exports.ig.authorize_user(req.query.code, instaConfig.redirect_uri, function(err, result) {
            if (err) {
                console.log(err.body);
                res.redirect("authorize_user");
                console.log("REDIRECTION to Authorize User");
                res.send("Didn't work");
            } //endif err 
            else {
                req.session.token = result.access_token;
                console.log('Yay! Access token is ' + result.access_token);
                res.render("handleauth");
            } //end else
        });//end authorize_user
    } //endelse
    
    /*++++++++++++++++++++ Following is for GeoLocation Starts +++++++++++++++++++++++*/

    //    ig.media_search(37.15058992120506, 138.87207012623549, function(err, medias, limit) {
    //        for (var item in medias) {
    //            console.log(medias[item]['id']);
    //            id = medias[item]['id'];
    //            console.log(id);
    //        }
    //    });

    /*-------------------- Following is for GeoLocation Ends   -----------------------*/


//    
}; //end exports.handleauth
