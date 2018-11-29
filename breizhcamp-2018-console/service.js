const request = require('request-promise-native')

// tableau qui contiendra toutes les sessions du BreizhCamp
 
// Faire une classe service
// Méthode sans callback
module.exports = class Service {

    constructor() {
        this.talks = []
    }

    init() {
        return Promise.all(
            [
                'http://2018.breizhcamp.org/json/others.json',
                'http://2018.breizhcamp.org/json/talks.json'
            ]
            .map(url => request(url, {json : true})))
            .then( tabResult => {
                this.talks = tabResult[0].concat(tabResult[1])
                return this.talks.length
            })
    }

    listerSessions() {
        return Promise.resolve(this.talks)
    }

    listerPresentateur() {
        return Promise.resolve(this.talks)
    }

    rechercherPresentateur() {
        
    }
}


// Méthode avec callback
/* exports.init = function(callback) {
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

} */


// Lister les sessions
exports.listerSessions = function(callback) {
    callback(talks)
}