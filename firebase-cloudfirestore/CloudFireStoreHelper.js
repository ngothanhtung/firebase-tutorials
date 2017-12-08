// ------------------------------------------------------------------------------------------------
// ADD DATA
class CloudFireStoreHelper {
	constructor(db) {
		this.db = db;
	}
	// Add Document
	add() {
		var data = {
			'title': 'Hanoi City',		
			'subTitle': '',
			'text': '',
			'imageUrl': "https://images.unsplash.com/photo-1446770145316-10a05382c470?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
		};
	
		var docRef = this.db.collection('images').add(data);
	}

	// Update Document
	update() {
		var docRef = this.db.collection('images').doc("POKuvbni0KBlXGj0wwdr")
	
		var result = docRef.set({
			'title': 'Danang City',
			'subTitle': 'Beautiful city',
			'text': '',
			'imageUrl': "https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
		});
	}

	// Update Document Fields
	updateField() {
		var updateDocRef = this.db.collection('images').doc('POKuvbni0KBlXGj0wwdr');
		var updateSingle = updateDocRef.update({
			subTitle: 'New SubTitle'
		});
	}

	// Get All Documents
	getAllDocuments() {
		this.db.collection('images').get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					console.log(doc.id, '=>', doc.data());
					console.log("===========================================================================");
				});
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	}

	// Get A Document
	getDocumentById(id) {
		var imagesRef = this.db.collection('images').doc(id);
		var getProduct = imagesRef.get()
			.then(doc => {
				if (!doc.exists) {
					console.log('No such document!');
				} else {
					console.log('Document data (images):', doc.data());
				}
			})
			.catch(err => {
				console.log('Error getting document', err);
			});
	}

	// Get Multiple Documents
	getMultipleDocuments() {
		var imagesRef = this.db.collection("images");
		var query = imagesRef.where('title', '==', 'Danang City').get()
			.then(snapshot => {
				console.log('Document data (images):');
				snapshot.forEach(doc => {
					console.log(doc.id, '=>', doc.data());
				});
			})
			.catch(err => {
				console.log('Error getting documents', err);
			});
	}
};

module.exports = CloudFireStoreHelper;