console.log('Welcome to Only Murders In The Building Api')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv').config()
const connectionString = process.env.DB_URL
const PORT = process.env.PORT || 3000

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('omitb')
        const quotesCollection = db.collection('quotes')
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(express.static('public'))
        app.use(bodyParser.json())


        app.get('/', (req, res) => {
           quotesCollection.find().toArray()
            .then(results => {
                // console.log(results)
                res.render('index.ejs',{quotes: results})
            })
            .catch(error => console.error(error))
        })
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    // console.log(result)
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        app.put('/quotes', (req, res) => {
            quotesCollection.findOneAndUpdate(
            {name: 'Oliver'},
            {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            },
            {
                upsert: true
            }
        )
        .then(result => {
            console.log(result)
            res.json('Success')
            })
            .catch(error => console.error(error))
        })
        app.delete('/quotes', (req, res) => {
            quotesCollection.deleteOne(
                {name: req.body.name}
            )
            .then(result => {
                if (result.deletedCount === 0 ) {
                    return res.json('No quote to delete')
                }
                res.json(`Deleted Cinda Canning\'s quote`)
            })
            .catch(error => console.error(error))
        })
        app.listen(PORT, function() {
        console.log(`listening on port ${PORT}`)
        })
    })
    .catch(error => console.error(error))




