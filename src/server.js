require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const middlewares = require('./middlewares');
const estreamers = require('./api/estreamers');

const app = express();
app.use(morgan('tiny'));

app.get('/', async (req, res) => {
  res.json({
    message: '¡Hola mundo!',
  });
});

app.use('/api/estreamers', estreamers);

// Handler que se encargue de rutas no encontradas
app.use(middlewares.notFound);
// Handler que se encargue de errores
app.use(middlewares.errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Escuchando en el puerto: ${port}`);
});

module.exports = app;