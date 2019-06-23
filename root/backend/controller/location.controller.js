var firebase = require("firebase-admin");
var serviceAccount = require("../credentials.json");
// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');
const fs = require('fs');
// Creates a client
const client = new vision.ImageAnnotatorClient();

var maps = require('@google/maps');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://tohacks2019-1561244898264.firebaseio.com"
});
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_API_KEY,
    Promise: Promise
});

const db = firebase.firestore();


exports.test = function (req, res) {
    res.send("Hello Darkness my old friend");
};

exports.return_image_tag = async function (req, res){
    const fileName = __dirname+'/'+req.body.image_name;
    const request = {
        image: {content: fs.readFileSync(fileName)},
    };
    const [result] = await client.objectLocalization(request);
    const objects = result.localizedObjectAnnotations;
    let objs_to_return = [];
    objects.forEach(object => {
        objs_to_return.push({
            name: object.name,
            confidence: object.score
        });
        const vertices = object.boundingPoly.normalizedVertices;
        vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
    });
    console.log(objs_to_return);
    res.send(objs_to_return);
};


exports.add_user = async function (req, res) {
    let docRef = db.collection('users').doc(req.body.first+req.body.last);
    await docRef.set({
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        password: req.body.password,
        interests: req.body.interests
    }).then( () => {
        console.log("Database Updated");
        res.send({
            "code": 200,
            "Message": "New user created successfully"
        });
    });
};

exports.get_charities = async function(req, res){
    try{
        var latlon = [43.683308,-79.614296];
        console.log(latlon);
        let rad = parseInt(req.body.radius);
        await googleMapsClient.placesNearby({
            location: latlon,
            radius: rad,
            keyword: 'Donation'
        }).asPromise()
            .then(response=>{
                console.log(response.json.results);
                let resp=[];
                for(let i=0; i < response.json.results.length; i++){
                    resp.push({
                        name: response.json.results[i].name,
                        type: response.json.results[i].types,
                        rating: response.json.results[i].rating,
                        address: response.json.results[i].vicinity+', '+response.json.results[i].plus_code.compound_code,
                        icon: response.json.results[i].icon
                    });
                }
                res.send(resp);
            }).catch((err) => {
                throw(err);
            });
    }catch (e) {
        console.log(e);
    }
}
