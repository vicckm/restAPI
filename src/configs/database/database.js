const exitError = require('./exitError');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./src/configs/database/database.sqlite', 
err => { if(err) { exitError(err) } });

process.on('SIGINT', () => {
    db.close( () => {
        console.log('\nDatabase closed!');
        process.exit(0);
    });
});

module.exports = db;