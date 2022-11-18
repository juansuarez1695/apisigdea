const sql = require('mssql');


const dbSettings = {
    user:'pazysalvospgn',
    password:'PazSalvos2022',
    server:"gnsigdeabdcd.procuraduria.gov.co",
    database:"esignacap",
    options: {
        encrypt: false, 
        trustServerCertificate: false 
      }
}


exports.getConnection = async function() {  
    try {       
        const pool =  await sql.connect(dbSettings);        
        return pool;
    } catch (error) {        
        console.log(`${error} error al conectar la Base de datos`);
    }
}


