const mongoose = require('mongoose');

function errorHandler(err, req, res, next) {
    if (err.status === 333) {
        res.status(333)
            .json({ message: 'Not allowed!' })
    } else {
        console.error(err.stack)
        // console.log(err)
        const errors = [];
        if(err instanceof mongoose.Error.ValidationError) {
            for(field in err.errors) {
                errors.push(err.errors[field].message);
            }
            res.status(500)
            .json({ message: 'Validation Error!', errors })
        }
        res.status(500)
            .json({ message: 'Something went wrong!', err })
    }
}

module.exports = errorHandler;
