var express = require('express');
var router = express.Router();
//  var { MongoClient } = require('mongodb')
//var dbConnect = require('../server/dbConnect').connectToCluster
var MongoClient = require('mongodb').MongoClient


// Connect to the database



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Login',
    style: 'index.css'
  });
});

router.post('/login', async function (req, res, next) {
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  try { 
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Successfully connected to MongoDB!');
    const db = client.db('ExpressHBS');
    const collection = db.collection('users');
    const result = await collection.insertOne(req.body);
    res.send("login success");
    console.log('Document inserted:', result.insertedId);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }



});

module.exports = router;

