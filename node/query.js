import mysql from 'mysql2'

const DB_CONFIG = {
  host: 'database',
  port: 3306,
  database: 'nodedb',
  password: 'root',
  user: 'root'
}

export async function createAsyncDB() {
  async function query(sql) {
    const connection = mysql.createConnection(DB_CONFIG)

    const queryPromise = new Promise((resolve, reject) => {
      connection.query(sql, (err, result) => err ? reject(err) : resolve(result))
    })

    const queryResult = await queryPromise

    connection.end()

    return queryResult
  }

  return {
    query
  }
}