const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

// Example: http://api.tvmaze.com/search/shows?q=girls
const scheduleUrl = 'http://api.tvmaze.com/schedule';

//get all shows
router.get('/theshows', function (req, res) {
 
  let limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
    const options = {
        params: {
          key: apiKey
        },
        withCredentials: true
      };
  axios.get(`${apiUrl}` , options)
  .then(function (response) {
    // res.send(response.data);

    // res.json(body);
    // console.log(body)
 let body = response.data;
//   let body =  response.data.sort(function (a, b) {
//   return b.weight + b.rating.average - (a.weight + a.rating.average);
// }).slice(0, limit);
      res.json(body);
      console.log(body);
  })
});

// //get tv shows by id
router.get('/show/:id', function (req, res) {
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

//get today schedule
router.get('/schedule', function (req, res, next) {
 
  const options = {
      params: {
        key: apiKey,
      },
      withCredentials: true
    };
axios.get(`${scheduleUrl}` , options)
.then(function (response) {
  // res.send(response.data);
  var body = response.data;
  res.json(body);
  // console.log(body)
})
});

module.exports = router;