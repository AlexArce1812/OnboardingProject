const Helper = require('@codeceptjs/helper');
const dotenv = require('dotenv');
const sql = require('mssql');
dotenv.config();

class JanusPersonRecordHelper extends Helper {
  async getJanusPersonRecord() {
    const pool = await sql.connect({
        user: process.env.LEGACYDB_USER,
        password: process.env.LEGACYDB_PASSWORD,
        server: process.env.LEGACYDB_HOST,
        database: process.env.LEGACYDB_SCHEMA,
        port: parseInt(process.env.LEGACYDB_PORT,10),
        instanceName: process.env.LEGACYDB_INSTANCE,
        encrypt: false,  
        trustServerCertificate: true,
        connectionTimeout: 60000,
        requestTimeout: 60000
      });
      const query = `SELECT TOP 1 * FROM tblPerson (NOLOCK) WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')`;
      const result = await pool.request().query(query);
      console.log('result:', result);
      return result.recordset[0];
    } 
  }

module.exports = JanusPersonRecordHelper;


