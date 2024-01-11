const Helper = require('@codeceptjs/helper');
const dotenv = require('dotenv');
const sql = require('mssql');
dotenv.config();


class JanusPersonRecordHelper extends Helper {
  async DBConfig(query) {
    try {
      const pool = await sql.connect({
        user: process.env.LEGACYDB_USER,
        password: process.env.LEGACYDB_PASSWORD,
        server: process.env.LEGACYDB_HOST,
        database: process.env.LEGACYDB_SCHEMA,
        port: parseInt(process.env.LEGACYDB_PORT,10),
        instanceName: process.env.LEGACYDB_INSTANCE,
        connectionTimeout: 60000,
        requestTimeout: 60000
      });

      const result = await pool.request().query(query);
      return result[0];
    } finally {
      await sql.close();
    }
  }

  async getJanusPersonRecord() {
    const query = `SELECT TOP 1 * FROM tblPerson (NOLOCK) WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')`;

    try {
      const result = await this.DBConfig(query);
      console.log('Result:', result);
      return result[0];
    } catch (error) {
      console.error('Error in getJanusPersonRecord:', error);
      throw error;
    }
  }
}

module.exports = JanusPersonRecordHelper;


