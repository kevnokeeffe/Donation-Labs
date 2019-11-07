let donations = require('../models/donations');
let express = require('express');
let router = express.Router();

router.findAll = (req, res) => {
    // Return a JSON representation of our list
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(donations,null,5));
    res.json(donations);

}

router.findOne = (req,res)=>{
    const donation = getByValue(donations,req.params.id);
    res.send(JSON.stringify(donation,null,5));
    res.json(donation);

}

    router.addDonation=(req,res)=>{
    const id = Math.floor((Math.random()*1000000)+1);
    const donation =({'id': id, 'paymenttype': req.body.paymenttype,'amount':req.body.amount,'upvotes': 0 });
    const currentSize = donations.length;
    donations.push(donation);
    if((currentSize +1) == donations.length)
        res.json({message:'Donation Added'});
    else
        res.json({message:'Donation Not Added!'});
    }

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