const sqlite3 = require('sqlite3').verbose();
const dbName = 'later.sqlite';
var db = new sqlite3.Database(dbName);

db.serialize(function() {
    /*db.run('INSERT INTO users (name, login, pass) VALUES (?, ?, ?)', 'jhhhj', 'hjhjj', 'hjj', (err) => {
        console.log(err)
    })*/
    db.all('SELECT * FROM users', (err, users) => {
        console.log(users)
    })
})