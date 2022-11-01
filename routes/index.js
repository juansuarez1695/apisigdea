const express = require('express');
const router = express.Router();
const {getConnection} = require("../conexion/conexion");
/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const pool = await getConnection();
    const result =  await pool.request().query(`SELECT esignapre.dbo.GET_NUMBER_OF_TASKS('${req.query.cedula}') as 'Numero actividades'`);
    console.log(result.recordset[0]['Numero actividades']);
    let response ;
    if(result.recordset[0]['Numero actividades'] > 0){
      response = `El usuario tiene ${result.recordset[0]['Numero actividades']} actividades pendientes` 
    }else if(result.recordset[0]['Numero actividades'] == null){
      response = `El usuario no existe`
    }else{
      response = `El usuario tiene ${result.recordset[0]['Numero actividades']} actividades pendientes` 
    }
    res.json({ title: 'Consumo SIGDEA',numactividades: response});
  } catch (error) {
    res.json({ error: 'error de Consumo SIGDEA',numactividades: 'no hay conexion en Base de datos esignacap'});
  }
 
});


module.exports = router;
