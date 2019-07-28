const fs = require('fs');
const promiseFunction = require('../functions/promiseFunction');
const readFile = promiseFunction(fs.readFile);

module.exports = (template_name) => (req, res, next) => {
    readFile(`views/${template_name}.pug`, 'utf-8')
    .then((content) => {
    content = content.replace(/\$app\$/ig, req.hostname);
    console.log(req.hostname)
    //console.log(content);
    req.template = content;
    next();
    })
    .catch((err) => {
        if (err) {
            console.error(err.message)
            next(err)
        }
    })
}