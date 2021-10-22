const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

// user: mydbuser1
// password: RYoLm6Lv3TeX37cQ


const uri = "mongodb+srv://mydbuser1:RYoLm6Lv3TeX37cQ@cluster0.i4mso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//     const collection = client.db("foodMaster").collection("users");
//     // perform actions on the collection object

//     console.log('Hitting the database')
//     const user = { name: 'Opu Biswash', email: 'opu@gmail.com', phone: '01999999999' }
//     collection.insertOne(user)
//         .then(() => {
//             console.log('insert success')
//             // console.error(err)
//         })

//     // client.close();
// });

// -------or-----------
async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollection = database.collection("users");
        // create a document to insert
        const doc = {
            name: "Spetial One",
            email: "special@hotmail.com",
        }
        const result = await usersCollection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
// -------or-----------



app.get('/', (req, res) => {
    res.send('Running my CRUD Server')
})

app.listen(port, () => {
    console.log('Running Server on Port', port);
})