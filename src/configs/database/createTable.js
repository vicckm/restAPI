const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./src/configs/database/database.sqlite');

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

function exit(err) {
    console.log('This is the error:', err);
    process.exit(1);
}

db.serialize( () => {
    db.run(TABLE_USERS, err => { if(err) return exit(err) });

    // db.run(INSERT_USERS, err => { if(err) return exit(err) });
})

module.exports = exit;