const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

// user: mydbuser1
// password: RYoLm6Lv3TeX37cQ


const uri = "mongodb+srv://mydbuser1:RYoLm6Lv3TeX37cQ@cluster0.i4mso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object

    // console.log('Hitting the database')
    // const user = { name: 'Mahiya Mahi', email: 'mahi@gmail.com', phone: '01999999999' }
    // collection.insertOne()
    //     .then(() => {
    //         console.log('insert success')
    //         // console.error(err)
    //     })

    client.close();
});

app.get('/', (req, res) => {
    res.send('Running my CRUD Server')
})

app.listen(port, () => {
    console.log('Running Server on Port', port);
})