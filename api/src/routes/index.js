const { Router } = require('express');
const countryRoute = require ('./country')
const actividadRoute = requiere ('./actividad')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/country', countryRoute)
router.use('/actividad', actividadRoute)

module.exports = router;
