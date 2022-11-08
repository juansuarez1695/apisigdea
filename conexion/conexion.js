const sql = require('mssql');


const dbSettings = {
    user:'pazysalvospgn',
    password:'PazSalvos2022',
    server:"172.16.9.173",
    database:"esignacap",
    //options: {
        //encrypt: true, 
        //trustServerCertificate: true 
      //}
}


exports.getConnection = async function() {  
    try {       
        const pool =  await sql.connect(dbSettings);        
        return pool;
    } catch (error) {        
        console.log(`${error} error al conectar la Base de datos`);
    }
}


