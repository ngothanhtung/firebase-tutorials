const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({ origin: true });
const app = express();

app.use(cors);
app.use(cookieParser);

app.get('/', (req, res) => {
	res.json({ ok: true, message: 'Hello World' });
});

exports.api = functions.https.onRequest(app);
// ----------------------------------------------------------------------------
exports.test = (req, res) => {
	let message = req.query.message || req.body.message || 'Hello World!';
	res.status(200).json({ message });
};
// ----------------------------------------------------------------------------
