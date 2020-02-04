const express = require('express');
var router = express.Router();
const addflightsModel = require('../models/addflights');

router.route('/')
    .get( async (req, res) =>{
        try{
            const data = await addflightsModel.find({})
            res.json(
                data
            )
        }
        catch(err){
            res.json({
                message: false,
                error: err
            })
        }
    })
    .post( async (req, res) =>{
        const post = new addflightsModel({
            from: req.body.from,
            to: req.body.to,
            time: req.body.time
        })

        try{
            const data = await post.save()
            res.json({
                status: 200,
                isSuccess: true,
                data: data,
                message: 'Successfully Inserted'
            })
            console.log("Inserted Successfully");
        }
        catch(err){
            res.json({
                message: err
            })
        }
    })

module.exports = router;