const Film = require('../models/film');

class FilmsController {
    list(req, res){
        Film.find().then((films) => {
            res.send(films);
        }).catch((err) => {
            res.sendStatus(500);
            console.log(err);
        });
    }

    create(req, res){
        const film = new Film(req.body);
        console.log(req.body);
        film.save().then((savedFilm) => {
            res.status(201).send(savedFilm);
        }).catch((err) => {
            res.sendStatus(500);
            console.log(err);
        });
    }

}

module.exports = new FilmsController();