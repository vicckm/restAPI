const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./src/configs/database/database.sqlite', err => {
    if(err) { return exitError(err) }
});
const exitError = require('./exitError');

const TABLE_USERS = `CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    status TEXT
);`

const INSERT_USERS = `
    INSERT INTO 
        tasks (title, description, status)
    VALUES 
        ('Spend time with friends', 'Just have fun!', 'To do');`


db.serialize( () => {
    db.run(TABLE_USERS, err => { if(err) return exitError(err) });

    // db.run(INSERT_USERS, err => { if(err) return exitError(err) });
});