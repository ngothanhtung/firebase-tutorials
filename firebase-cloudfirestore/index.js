// DOCS: https://firebase.google.com/docs/firestore/?authuser=0
const admin = require('firebase-admin');

var serviceAccount = require("./firebase-training.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

var CloudFireStoreHelper = require("./CloudFireStoreHelper");
var helper = new CloudFireStoreHelper(db);

// ------------------------------------------------------------------------------------------------
// ADD DOCUMENT
// helper.add();
// ------------------------------------------------------------------------------------------------

// ADD / EDIT DOCUMENT
// helper.update();

// ------------------------------------------------------------------------------------------------
// UPDATE FIELD
// helper.updateField();

// ------------------------------------------------------------------------------------------------

// GET ALL DATA
// helper.getAllDocuments();
// ------------------------------------------------------------------------------------------------

// GET A DOCUMENT
// helper.getDocumentById('uWCnfye8y2me7A8yvYbo');

// ------------------------------------------------------------------------------------------------

// GET MULTIPLE DOCUMENTS FROM A COLLECTION
helper.getMultipleDocuments();

// CALL 
//getMultipleDocuments();

// ------------------------------------------------------------------------------------------------

// GET A REALTIME UPDATES WITH CLOUD FIRESTORE

realtimeUpdate = () => {
	var doc = db.collection('images').where('price', '>', 0);

	var observer = doc.onSnapshot(docSnapshot => {
		console.log(`Received doc snapshot: ${docSnapshot}`);
		docSnapshot.docChanges.forEach(function (change) {
			if (change.type === "added") {
				console.log("New: ", change.doc.data());
			}
			if (change.type === "modified") {
				console.log("Modified: ", change.doc.data());
			}
			if (change.type === "removed") {
				console.log("Removed: ", change.doc.data());
			}
		});
		// ...
	}, err => {
		console.log(`Encountered error: ${err}`);
	});
}

// CALL
//realtimeUpdate();
