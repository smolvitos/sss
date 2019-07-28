const Note = require('../models/Note')
const formidable = require('formidable')

module.exports = (req, res, next) => {
    let form = new formidable.IncomingForm()
    form.parse(req, (err, fields) => {
        if (err) return next(err)
        let note = new Note({ userid: req.user.uid, record: field.record })
        Note.save((err) => {
            if (err) return next(err)
            res.redirect('/main')
        })
    })
}