// DOCS: https://firebase.google.com/docs/firestore/?authuser=0

const admin = require('firebase-admin');

var serviceAccount = require("./firebase-training-38da3a1f91ab.json");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();

// ------------------------------------------------------------------------------------------------
// ADD DATA
addDocument = () => {
	var p = {
		'name': 'iPhone 8 plus',
		'price': 1000,
		'discount': 10,
		'imageUrl': "#"
	};

	var docRef = db.collection('products').add(p);
};

// ------------------------------------------------------------------------------------------------

// ADD / EDIT
updateDocument = () => {
	var docRef = db.collection('products').doc("1B2HsImylfQ0I6Ofn5ib")

	var p = docRef.set({
		'name': 'iPhone XX',
		'price': 1200,
		'discount': 5,
		'imageUrl': "#"
	});
}

// ------------------------------------------------------------------------------------------------

// UPDATE FIELD
updateDocumentField = () => {
	var updateProductRef = db.collection('products').doc('9ndQ7Tu2FYL13E14optR');

	//Set the 'price' field of the product
	var updateSingle = updateProductRef.update({
		price: 999
	});
}

// ------------------------------------------------------------------------------------------------

// GET ALL DATA
getAllDocuments = () => {
	db.collection('products').get()
		.then((snapshot) => {
			//console.log(snapshot.docs);
			snapshot.forEach((doc) => {
				console.log(doc.id, '=>', doc.data());
			});

			console.log(docs);
		})
		.catch((err) => {
			console.log('Error getting documents', err);
		});
}

// ------------------------------------------------------------------------------------------------

// GET A DOCUMENT
getDocumentById = (id) => {
	var productRef = db.collection('products').doc(id);
	var getProduct = productRef.get()
		.then(doc => {
			if (!doc.exists) {
				console.log('No such document!');
			} else {
				console.log('Document data (product):', doc.data());
			}
		})
		.catch(err => {
			console.log('Error getting document', err);
		});
}

// CALL
//getDocumentById('9ndQ7Tu2FYL13E14optR');

// ------------------------------------------------------------------------------------------------

// GET MULTIPLE DOCUMENTS FROM A COLLECTION
getMultipleDocuments = () => {
	var productsRef = db.collection("products");
	var query = productsRef.where('price', '>', 0).get()
		.then(snapshot => {
			console.log('Document data (products):');
			snapshot.forEach(doc => {
				console.log(doc.id, '=>', doc.data());
			});
		})
		.catch(err => {
			console.log('Error getting documents', err);
		});
}

// CALL 
//getMultipleDocuments();

// ------------------------------------------------------------------------------------------------

// GET A REALTIME UPDATES WITH CLOUD FIRESTORE

realtimeUpdate = () => {
	var doc = db.collection('products').where('price', '>', 0);

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
realtimeUpdate();
