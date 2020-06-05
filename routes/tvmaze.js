const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

// Example: http://api.tvmaze.com/search/shows?q=girls
let scheduleUrl = 'http://api.tvmaze.com/schedule';
let searchUrl = 'http://api.tvmaze.com/search';
let personUrl = 'http://api.tvmaze.com/people';

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

 let body = response.data;

      res.json(body);

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
      var body = response.data;
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send();
    });
});

// //get tv shows by id
router.get('/shows/:id/crew', function (req, res) {
  const options = {
    params: {
      key: apiKey
    },
    withCredentials: true
  }
  axios.get(`${apiUrl}/${req.params.id}/crew`, options).then(function (response) {
      var body = response.data;
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


//search shows
router.get('/shows', function (req, res) {
 
  const options = {
      params: {
        key: apiKey,
        q: req.query
      },
      withCredentials: true
    };
axios.get(`${searchUrl}/shows?q=${req.params.query}`, options ).then(function (response) {
  // res.send(response.data);
  var body = response.data;
  res.json(body);
  console.log(body)
  // res.render('locations', {body: body})
})
});

//search shows
router.get('/people', function (req, res) {
 
  const options = {
      params: {
        key: apiKey,
        q: req.query
      },
      withCredentials: true
    };
axios.get(`${searchUrl}/people`, options ).then(function (response) {
  var body = response.data;
  res.json(body);
  console.log(body)
})
});

//One person
router.get('/person/:id', function (req, res) {
  const options = {
    params: {
      key: apiKey
    },
    withCredentials: true
  }
  axios.get(`${personUrl}/${req.params.id}`, options).then(function (response) {
      var body = response.data;
      console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send();
    });
});


module.exports = router;