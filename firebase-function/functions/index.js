const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
	var docs = [];
	db.collection('products').get()
    .then((snapshot) => {
        //console.log(snapshot.docs);
        snapshot.forEach((doc) => {
            docs.push(doc.data());            
        });

		console.log(docs);
		res.send(docs);
    })
    .catch((err) => {
		console.log('Error getting documents', err);
		res.send("Error getting documents: " + err);
    });
});