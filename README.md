# BookUp-Manager

API for management and administration of your restaurant.

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                                   | RETURNS
-------|------------------|-------|------|--------------------------|-----------------------------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | YES   |      | User Signup              | `name`, `surname`, `phone`, `email`, `password`, `password`, `role` | `token`
POST   | /auth/login      | -     |      | User Login               | `email`, `password`                                             | `token`

### Users Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /users/:id | YES | user | Get user by Id |  | `userById`
GET    | /reservations/restaurant | YES | user | Get all reservations by query |  | `[reservations Object]`
GET    | /restaurant/ | YES | user | Get my restaurant | | `[restaurant Object]` 
GET    | /users/clients | YES | user | Get all clients of lawyer |  | `[clients Object]`
POST    | /users | YES | user | Post one user | `name`, `surname`, `email`, `password` | `new user`
POST    | /reservation/ | YES | user | Post one reservation | `date`, `shift`, `hour`,`restaurant_id`,`table_id`,`customer_name`, `customer_phone`,`customer_email`, `people`, `notes`, `confirmed` | `new reservation Object`
POST    | /restaurant/ | YES | user | Post one restaurant | `name`, `direction`, `has_breakfast`, `has_lunch`,`has_dinner`,`owner_id`,`num_tables` | `new restaurant`
PUT     | /users/:id | YES | user | Put one user of restaurant | `userId`, `email`, `password` | `modified Object`
PUT     | /reservation/:id | YES | user | Put one reservation | `date`, `shift`, `hour`,`restaurant_id`,`table_id`,`customer_name`, `customer_phone`,`customer_email`, `people`, `notes`, `confirmed` | `modified Object`
PUT     | /restaurant/:id | YES | user | Put one user of reservation | `name`, `direction`, `has_breakfast`, `has_lunch`,`has_dinner`,`owner_id`,`num_tables` | `modified Object`
DELETE  | /users/:id | YES | user | Delete one user | `userId` | `delete user`
DELETE  | /reservation/:id | YES | user | Delete one reservation | `restaurantId` | `delete reservation`
DELETE  | /restaurant/:id | YES | user | Delete one restaurant | `restaurantId` | `delete restaurant`

## Tools 🛠️

* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Morgan](https://www.npmjs.com/package/morgan)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [JsonWebToken](https://www.npmjs.com/package/jwt)
* [Express](https://www.npmjs.com/package/express)
* [Cors](https://www.npmjs.com/package/cors)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Authors ✒️

* **Raúl Bruno Mendoza** - [RaulBM94](https://github.com/RaulBM94)
* **Nicolás Nahuel Faisca Silva** - [NickNahuel23](https://github.com/NickNahuel23)
* **Álvaro Acevedo** - [alvaroacevedo](https://github.com/alvaroacevedo)
