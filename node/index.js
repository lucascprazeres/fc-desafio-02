import express from 'express'

import { getPersonName } from './name.js'
import { createAsyncDB } from './query.js'

const app = express()
const port = 3000

const createTableSql = `CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))`;

createAsyncDB().then(db => db.query(createTableSql))

app.get('/', async (req, res) => {
  const db = await createAsyncDB()
  
  await db.query(`INSERT INTO people(name) VALUES ('${getPersonName()}');`)

  const result = await db.query('SELECT * FROM people;')

  let html = `
    <h1>Full Cycle Rocks!!</h1>\n
    <ul>
      ${result.map(person => `<li>${person.name}</li>`).join('')}
    </ul>
  `

  res.send(html)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})