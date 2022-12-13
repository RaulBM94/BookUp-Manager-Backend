const RestaurantModel = require('../models/restaurant.model')

const { handleError } = require('../utils')

function createRestaurant(req, res) {
    let restaurant = {
        name: req.body.name,
        direction: req.body.direction,
        has_breakfast: req.body.has_breakfast,
        has_lunch: req.body.has_lunch,
        has_dinner: req.body.has_dinner,
        owner_id: res.locals.user.id,
        num_tables: req.body.num_tables
    }
    RestaurantModel
        .create(restaurant)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
}

function updateRestaurant(req, res) {
    RestaurantModel
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

function deleteRestaurant(req, res) {
    RestaurantModel
        .findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch((err) => handleError(err, res))
}

module.exports = {
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}

