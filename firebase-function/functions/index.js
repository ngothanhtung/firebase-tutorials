const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();


// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
<<<<<<< HEAD
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
=======
	// Grab the text parameter.
	const original = req.query.text;
	// Push the new message into the Realtime Database using the Firebase Admin SDK.
	admin.database().ref('/messages').push({
		original: original
	}).then(snapshot => {
		// Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
		res.redirect(303, snapshot.ref);
	});
});
>>>>>>> 19715872aacec55dbc41756ee44f1c05242acd84
