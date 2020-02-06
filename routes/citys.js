const express = require('express');
var router = express.Router();
const cityModel = require('../models/citys');

router.route('/')
    .get( async (req, res) =>{
        try{
            const data = await cityModel.find({})
            res.json(
                {"city":data}
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
        const post = new cityModel({
            cityname: req.body.cityname
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

    router.get('/city',(req,res,next)=>{
        cityModel.find({})
        .then((result)=>{
            res.json({"city":result})
        })
        .catch(next)
    })

module.exports = router;