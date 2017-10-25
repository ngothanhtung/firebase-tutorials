const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
// GET ALL PRODUCTS FROM FIRECLOUDSTORE
exports.getProducts = functions.https.onRequest((req, res) => {
    var docs = [];
    db.collection('products').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                docs.push(doc.data());
            });

            res.send(docs);
        })
        .catch((err) => {
            res.send("Error getting documents: " + err);
        });
});

/*
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloHttp = functions.https.onRequest((req, res) => {
    response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working

    res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
    res.send(JSON.stringify({
        "speech": response,
        "displayText": response
    }));
    //"speech" is the spoken version of the response, "displayText" is the visual version
});