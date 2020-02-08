const express = require('express');
var router = express.Router();
const addflightsModel = require('../models/addflights');


router.get('/',async (req,res,next)=>{
    try {
        const data =await addflightsModel.find({}).populate('from').populate('to')
        res.json(
            data
        )
    }
    catch (err) {
        res.json({
            message: false,
            error: err.message
        })
    }
});

router. post('/',async (req,res,next)=>{
    const post = new addflightsModel({
        from: req.body.from,
        to: req.body.to,
        time: req.body.time
    })

    try {
        const data = await post.save()
        res.json({
            status: 200,
            isSuccess: true,
            data: data,
            message: 'Successfully Inserted'
        })
        console.log("Inserted Successfully");
    }
    catch (err) {
        res.json({
            message: err
        })
    }
})

router.post('/search',async(req,res,next)=>{
    const flights=await addflightsModel.find({from:req.body.from,to:req.body.to}).populate('from').populate('to');
    if(flights){
        res.json({success:true,flights:flights})
    }else{
        res.json({success:true,message:"Sorry, no such flight"})
    }
})

module.exports = router;