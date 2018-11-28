// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request')

// Envoie de la requête http
request('http://2018.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    // body contient les données récupérées
    console.log('Ok 1', body.length);
});

request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {
    if (err) { return console.log('Erreur', err); }

    // body contient les données récupérées
   // console.log('Ok 2',  body.length);

    body.forEach(function(el) {
        console.log(el.name)
    })
});