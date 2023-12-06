const express = require('express');
const app = express();
const PORT = 3000;
const cors= require("cors")
const pool = require("./db")
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
app.use(cors())
app.use(bodyParser.json());


const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'jobpictures');

    // Create the 'jobpictures' folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for each uploaded file (you can use a library for this)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});



const storage3 = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'resume_upload');

    // Create the 'jobpictures' folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for each uploaded file (you can use a library for this)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});


const upload_job_pic = multer({ storage: storage2 });


const resume_up = multer({ storage: storage3 });

app.use('/uploadjobpic', express.static('jobpictures'));


app.use('/resume', express.static('resume_up'));

app.post("/resume",resume_up.single("file"),async(req,res)=>{
  const file = req.file;
  console.log(file)
  var q = "Update users SET resume='"+file.filename+"' where id="+req.body.id+";";
  console.log(q);
  
  console.log('Received File:', file);
  const result = await pool.query(q);
  res.json({msg:1,res:"Resume uploaded"});
})



app.post("/addjob",upload_job_pic.single("file"),async(req,res)=>{
  const file = req.file;
  var q = "INSERT INTO jobs (job_title, job_description, skills, salary, location, posted_date,pic,users_id) VALUES ('"+req.body.job_title+"', '"+req.body.job_description+"', '"+req.body.job_skills+"','"+req.body.salary+"','"+req.body.salary+"', CURRENT_DATE,'"+file.filename+"',"+req.body.user_id+");"
  console.log(q);
  
  console.log('Received File:', file);
  const result = await pool.query(q);
  res.json({msg:1,res:"Job created"});
})

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

app.post('/recruiter/register', async (req, res) => {
  console.log("received a register")
  
  try{
    console.log("Registering new user : "+JSON.stringify(req.body))
    var q = "INSERT INTO users(username,email,role,password,firstname,lastname) VALUES('"+ req.body.firstname + req.body.lastname  +"','"+ req.body.email+"',1,'"+ req.body.password +"','"+ req.body.firstname +"','"+ req.body.lastname +"');";
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
app.post('/register', async (req, res) => {
  console.log("received a register")




  try{
    console.log("Registering new user : "+JSON.stringify(req.body))
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


app.put("/login", async(req,res)=>{
  console.log("updating details for :"+ JSON.stringify(req.body));
  
  var q = "UPDATE users SET firstname='"+req.body.firstname+"',lastname='"+req.body.lastname+"',password='"+req.body.password+"',email='"+req.body.email+"' WHERE id="+req.body.id;
  console.log(q);
  const result = await pool.query(q);
  if(result.rowCount == 1){
    res.json({"res":1});
  }else{
    res.json({"res":0});
  }
    

})

app.get("/login/:id", async(req,res)=>{
  console.log("Fetching user values for user id :"+ JSON.stringify(req.params.id));
  var q = "SELECT * FROM users where id = "+ req.params.id;
  console.log(q);
  const result = await pool.query(q);
  try{
  res.json(result.rows);
  }catch(error){
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
})



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'profilepicture/'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set the filename (use the current timestamp to make it unique)
  },
});
const upload = multer({ storage });

app.use('/profilepicture', express.static('profilepicture'));

app.post('/uploadprofile', upload.single('file'), async(req, res) => {
  try {
   if(req.file){
      console.log("Fetching user values for user id :"+ JSON.stringify(req.params.id));
      var q = "SELECT * FROM users where id = "+ req.params.id;
      console.log(q);
   }

  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/jobs', async (req, res) => {
  try {
    // Retrieve jobs from PostgreSQL database and sort by posted_date
    const result = await pool.query('SELECT * FROM jobs ORDER BY posted_date DESC');
    const sortedJobs = result.rows;

    res.json(sortedJobs);
  } catch (error) {
    console.error('Error retrieving jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/job/:id', async (req, res) => {
  try {
    // Retrieve jobs from PostgreSQL database and sort by posted_date
    const result = await pool.query('SELECT * FROM jobs WHERE job_id='+req.params.id);
    res.json(result.rows);
  } catch (error) {
    console.error('Error retrieving jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.post("/recruiter/login",async(req,res)=>{
  console.log("received a login request for recruiter")

  try{
    console.log(req.body)
    var q = "SELECT * FROM users Where email='"+req.body.email+"' AND password='"+req.body.password+"' AND role=1;"; 
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
  

})


app.post('/jobs/applied', async (req, res) => {
  try {
    const { user_id, job_id } = req.body;
    console.log(req.body)
    // Insert the entry into the jobs_applied table with the current timestamp
    const result = await pool.query(
      'INSERT INTO jobs_applied (user_id, job_id, application_date) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *',
      [user_id, job_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting entry:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Check if a user has applied for a specific job
app.get('/jobs/applied/:user_id/:job_id', async (req, res) => {
  try {
    const { user_id, job_id } = req.params;

    // Query the jobs_applied table to check if the user has applied for the job
    const result = await pool.query(
      'SELECT * FROM jobs_applied WHERE user_id = $1 AND job_id = $2',
      [user_id, job_id]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ applied: true });
    } else {
      res.status(200).json({ applied: false });
    }
  } catch (error) {
    console.error('Error checking application:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.delete('/jobs/applied/:user_id/:job_id', async (req, res) => {
  try {
    const { user_id, job_id } = req.params;

    // Query to delete the job application
    const result = await pool.query(
      'DELETE FROM jobs_applied WHERE user_id = $1 AND job_id = $2 RETURNING *',
      [user_id, job_id]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ message: 'Job application withdrawn successfully' });
    } else {
      res.status(404).json({ error: 'Job application not found' });
    }
  } catch (error) {
    console.error('Error deleting job application:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.get('/jobs/applied/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;

    // Query to join users, jobs, and jobs_applied tables
    const result = await pool.query(
      `SELECT *
         FROM jobs_applied
         JOIN users ON jobs_applied.user_id = users.id
         JOIN jobs ON jobs_applied.job_id = jobs.job_id
         WHERE jobs_applied.user_id = $1`,
      [user_id]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error retrieving job applications of a user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/jobs/user/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;

    // Query the jobs table to get all jobs for the user
    const result = await pool.query(
      `SELECT *
         FROM jobs_applied
         JOIN users ON jobs_applied.user_id = users.id
         JOIN jobs ON jobs_applied.job_id = jobs.job_id
         WHERE jobs.users_id = $1`,
      [user_id]
    );
      
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error retrieving jobs for a user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
