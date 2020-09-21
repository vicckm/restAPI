const exit = require('../configs/database/createTable');
const db = require('../configs/database/database');

module.exports = (app) => {

    app.get('/tasks', (req, res) => {
        const SELECT = ` 
            SELECT *
            FROM
                tasks
        `;

        db.all(SELECT, (err, rows) => {
            res.send(JSON.stringify({results: rows}))
        })
    });

    app.get('/tasks/:id', (req, res) => {
        const SELECT = ` 
            SELECT *
            FROM
                tasks
            WHERE
                id = ?; 
        `;

        const params = [req.params.id];

        db.each(SELECT, params, (err, rows) => {
            res.send(JSON.stringify({results: rows}))
        })
    });

    app.post('/tasks', (req, res) => {
        const INSERT = `
        INSERT INTO 
            tasks (title, description, status)
        VALUES 
            (?, ?, ?);`;

        const params = [req.body.title, req.body.description, req.body.status];
       db.run(INSERT, params, err => { if(err) return exit(err) });

       res.send('Added task!');
    });

    app.delete('/tasks/:id', (req, res) => {
        const DELETE = `
            DELETE FROM 
                tasks
            WHERE 
                id = ?;
        `;

        const params = [req.params.id];

        db.run(DELETE, params, err => { if(err) return exit(err) });

        res.send('Deleted task!')
    });

    app.put('/tasks/:id', (req, res) => {
        const UPDATE = `
        UPDATE 
            tasks
        SET 
            status = ?
        WHERE
            id = ?;
        `;

        const params = [req.body.status, req.params.id];

        db.run(UPDATE, params, err => { if(err) return exit(err) });

        res.send('Updated task!')
    });


}