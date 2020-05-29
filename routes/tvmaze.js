const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

// Example: http://api.tvmaze.com/search/shows?q=girls
//get all gif by name

router.get('/search', function (req, res, next) {
 
    const options = {
        params: {
          key: apiKey,
          name: req.query.title || '',
          p: req.query.page || 1,
          q: req.query
        },
        withCredentials: true
      };
  axios.get(`${apiUrl}` , options).then(function (response) {
    // res.send(response.data);
    var body = response.data;
    res.json(body);
    console.log(body)
  })
});

// //get tv shows by id
router.get('/show/:id', function (req, res, next) {
  const options = {
    params: {
      key: apiKey
    },
    withCredentials: true
  }
  axios.get(`${apiUrl}/${req.params.id}`, options).then(function (response) {
      // res.send(response.data);
      // var body = response.data;
      var body = response.data;
      console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send();
    });
});

module.exports = router;