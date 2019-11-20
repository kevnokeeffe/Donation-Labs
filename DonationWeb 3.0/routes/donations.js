let donations = require('../models/donations');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/donationsDB',{ useNewUrlParser: true });

let db = mongoose.connection;

var Donation = require('../models/donations');

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});

router.findAll = (req, res) => {
    // Return a JSON representation of our list
    res.setHeader('Content-Type', 'application/json');

    Donation.find(function(err, donations) {
        if (err)
            res.send(err);

        res.send(donations);
        //res.json(donations);
    });
}

// router.findOne = (req,res)=>{
//     const donation = getByValue(donations,req.params.id);
//     res.send(JSON.stringify(donation,null,5));
//     res.json(donation);
//
// }

router.findOne = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    Donation.find({ "_id" : req.params.id },function(err, donation) {
        if (err)
            res.send(err);
        else
        res.send(donation);
        res.json(donation);
    });
}

router.addDonation = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

   let donation = new Donation();

    donation.paymenttype = req.body.paymenttype;
        donation.amount = req.body.amount;

            donation.save(function(err) {
                if (err)
                    res.send(err);
                else
                    res.json({message:'Donation Added'});
            });
}

    // router.addDonation=(req,res)=>{
    // const id = Math.floor((Math.random()*1000000)+1);
    // const donation =({'id': id, 'paymenttype': req.body.paymenttype,'amount':req.body.amount,'upvotes': 0 });
    // const currentSize = donations.length;
    // donations.push(donation);
    // if((currentSize +1) == donations.length)
    //     res.json({message:'Donation Added'});
    // else
    //     res.json({message:'Donation Not Added!'});
    // }

    router.incrementUpvotes = (req,res) => {
    const donation = getByValue(donations,req.params.id);
    donation.upvotes += 1;
    }

    router.deleteDonation = (req,res) => {
    const donation = getByValue(donations,req.params.id);
    const position = donations.indexOf(donation);

    if (position !== -1)
        donations.splice(position, 1),
        res.json({message: 'Donation Deleted'});
    else
        res.json({message:'Donation Not There!'});
    }

    router.totalVotes = (req,res) => {

        let votes = getTotalVotes(donations);
        res.json({totalvotes : votes});
    // for (let i = 0; i < donations.length; i++){
    //     getByValue(donations,req.params.upvotes)
    }

function getByValue(array, id) {
    const result  = array.filter(function(obj){return obj.id == id;} );
    return result ? result[0] : null; // or undefined
}

function getTotalVotes(array) {
    let totalVotes = 0;
    array.forEach(function(obj) { totalVotes += obj.upvotes; });
    return totalVotes;
}

module.exports = router;