const Details = require('../models/details');
exports.details = (req, res, next) => {
    const details = new Details(req.body);
    details
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Details Added',
                details
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}