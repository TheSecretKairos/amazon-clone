const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KX6xlJIMi2vKTiN3VnH0lNV90RF45hJsZ4qYQ4fn1p3vQdzCXwjEUJxzCYHOh44EgwVizOb6U46EtUyNqfxuih900vefEENJn");

//API
//App config

const app = express();

//Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//API routes

//app.get('/', (request, response) => response.status(200).send('Ciao mondo'));
app.post('/payments/create', async(request,response) => {

    const total = request.query.total;

    console.log('Ricevuta richiesta pagamento. Totale >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

//listen command

exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-4dbed/us-central1/api









// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
