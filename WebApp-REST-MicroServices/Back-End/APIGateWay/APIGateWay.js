const express = require('express')
const app = express()
//const fetch = require('node-fetch');
const port = 8080


app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Define the base URLs for the microservices
const generateBaseUrl = 'https://3001-cs-306056888634-default.cs-europe-west4-bhnf.cloudshell.dev';
const modifyBaseUrl = 'https://3002-cs-306056888634-default.cs-europe-west4-bhnf.cloudshell.dev';

// Forward requests to microservice 1 (Generate)
app.get('/courses', async (req, res) => {
  try {
    const url = generateBaseUrl;
    const response = await fetch(url, {
      method: req.method,
      body: JSON.stringify(req.body),
      headers: req.headers,
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(error.response.status || 500).json({
      error: error.message,
    });
  }
});


// Forward requests to microservice 2 (Modify)
app.post('/courses', async (req, res) => {
    try {
      const url = modifyBaseUrl;
      const response = await fetch(url, {
        method: req.method,
        body: JSON.stringify(req.body),
        headers: req.headers,
      });
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      res.status(error.response.status || 500).json({
        error: error.message,
      });
    }
  });


  // Start the server
app.listen(8080, () => {
    console.log('API Gateway listening on port 8080');
  });
