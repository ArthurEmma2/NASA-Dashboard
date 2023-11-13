
https://github.com/ArthurEmma2/NASA-Mission-Control/assets/86601468/b5431fac-01e1-49db-86d2-2d5e2d38da7e

# NASA Mission Control Project 

# ( You Want a Mission ? You Launch It  )

## Launch Page
Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets.

Only confirmed planets matching the following criteria are available for the earliest scheduled missions:

1.Planetary radius < 1.6 times Earth's radius
2.Effective stellar flux > 0.36 times Earth's value and < 1.11 times Earth's value

## Upcoming
Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets.

## History
Discover the history of mission launches including SpaceX launches starting from the year 2006.

## Technologies
 - Javasctipt
 - Docker
 - React 
 - Nasa API
 - CSS
 - Mongo DB
 - Node JS
 - Express JS
   

## Getting Started

1. Ensure you have Node.js installed.
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/.env` file with a `MONGO_URL` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`

## Running the Project

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at [localhost:8002](http://localhost:8002) and schedule an interstellar launch!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-project .`
3. Run `docker run -it -p 8000:8000 nasa-project`

## Running the Tests

To run any automated tests, run `npm test`. This will:

- Run all the client-side tests: `npm test --prefix client`
- Run all the server-side tests: `npm test --prefix server`
