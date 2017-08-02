![Todone Index](https://github.com/typeoh/todone/blob/master/public/images/todone_index.png?raw=true)

## About

Todone is a streamlined, easy-to-use to do app that uses the Naive Bayes classifier to auto-categorize tasks. 
You can create a profile and submit, edit, delete, and re-categorize task. 
Each time you input a new task the app learns from the way you classify and if you need to re-classify it will remember your change for next time. 

## Getting Started

1. Fork repository  
2. Install dependencies: `npm i`
3. Run migrations: `npm run knex migrate:latest`
4. Run the seed: `npm run knex seed:run`
5. Run the server: `npm run local`
6. Visit `http://localhost:8080/`

## Dependencies 

- Node 5.10.x or above
- NPM 3.8.x or above
- Bayes 
- Bcrypt
- Body Parser
- Cookie Parser
- Cookie Session
- Express
- Knex
- Moment
- Node-sass-middleware
- Nodemon
- Pg
