const express = require('express');
const app = express();
const PORT = 3000;
const cors= require("cors")
const pool = require("./db")
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());

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

  
app.post('/login', async (req, res) => {
  console.log("received a login request")

  try{
    console.log(req.body)
    var q = "SELECT * FROM users Where email='"+req.body.email+"' AND password='"+req.body.password+"';"; 
    console.log(q)  
    const result = await pool.query(q);
    if(result.rowCount == 0){
      res.json({"res":0});
    }else{
      res.json({"res":1,"data":result.rows});
      
    }
      
  }catch(error){
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
  }
});


app.post('/register', async (req, res) => {
  console.log("received a register")




  try{
    console.log(req.body)
    var q = "INSERT INTO users(username,email,role,password,firstname,lastname) VALUES('"+ req.body.firstname + req.body.lastname  +"','"+ req.body.email+"',0,'"+ req.body.password +"','"+ req.body.firstname +"','"+ req.body.lastname +"');";
    console.log(q)  
    const result = await pool.query(q);
    if(result.rowCount == 1){
      res.json({"res":1});
    }else{
      res.json({"res":0});
    }
      
  }catch(error){
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
  }

  



});