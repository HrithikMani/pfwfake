const express = require('express');
const app = express();
const PORT = 3000;
const cors= require("cors")
const pool = require("./db")


app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    }catch(error){
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
    }


  });