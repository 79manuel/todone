"use strict";

const express = require('express');
const router  = express.Router();
const salt=10;
const bcrypt      = require('bcrypt');

module.exports = (knex) => {

  /*
  * Handles POST request for /user_registration form
  * If user enters a username or email already in our database, send error message
  * Create new user in users table and redirect to / otherwise
  */
  router.post("/", (req, res) => {
      knex('users').count("*").where('username',req.body.username).orWhere('email',req.body.email).then((result) => {
    if(Number(result[0].count)>0){
      res.status(403).send('Error: User email or username already exists! Please select a new one!');
    } else {
      bcrypt.hash(req.body.password,salt, function(err,hash){
        if(err){
          console.log("Error hashing password "+err);
        }else{
          knex('users').insert({username:req.body.username,email:req.body.email,password:hash}).then((result)=>{
            res.redirect("/");
          })
        }
      })
    }
  });
  });

  return router;
}
