const { Router } = require("express");
const countryRoute = require("./countryRoutes.js");
const actividadesRoute = require("./actividadesRoutes.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/country", countryRoute);
router.use("/activity", actividadesRoute);

module.exports = router;
