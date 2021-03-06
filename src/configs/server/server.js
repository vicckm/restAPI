const { app } = require('./custom-express');
const { express } = require('./custom-express');
const middlewares = require('../middlewares/middlewares');
const routes = require('../../routes/routes');
const port = 8080;

middlewares(app);

routes(app);

app.listen(port, () => { console.log(`Server started in http://localhost:${port}!`)})