const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

exports.addMessage = functions.https.onRequest((req, res) => {
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
