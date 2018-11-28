var request = require('request')

// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = []



exports.init = function(callback) {
    // TODO         => effectuer les requêtes HTTP permettant de récupérer les données du BreizhCamp
    request('http://2018.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
    talks = talks.concat(body)



    request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
        // TODO     => une fois les données récupérées, alimenter la variable talks
        talks = talks.concat(body)
        // TODO     => invoquer la callback avec le nombre de sessions récupérées
        callback(talks.length)
    });

    
});




}