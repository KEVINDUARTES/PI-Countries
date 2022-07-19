const { Router } = require('express');
const countryRoute = require ('./countryRoutes.js')
const actividadesRoute = require ('./actividadesRoutes.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countryRoute)
router.use('/activities', actividadesRoute)

module.exports = router;
