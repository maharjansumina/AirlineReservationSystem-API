const express = require('express');
var router = express.Router();
const bookingsModel = require('../models/bookings');
const auth = require('../auth');

router.route('/')
    .get(async (req, res) => {
        try {
            const data = await bookingsModel.find({})
            res.json(
                data
            )
        }
        catch (err) {
            res.json({
                message: false,
                error: err
            })
        }
    })
    .post(async (req, res) => {
        const post = new bookingsModel({
            name: req.body.name,
            from: req.body.from,
            to: req.body.to,
            fullname: req.body.fullname,
            phone: req.body.phone,
            email: req.body.email
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

router.delete('/delete/:bookingId', (req, res, next) => {
    bookingsModel.findByIdAndDelete(req.params.bookingId)
        .then((booking) => {
            res.json({ status: 'Booking cancelled!', booking: booking })
        }).catch(next);
});

module.exports = router;