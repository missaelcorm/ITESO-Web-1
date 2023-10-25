const {model, Schema} = require('mongoose');

const actorSchema = new Schema({
    name: { type: String, required: true },
});

const filmSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    synopsis: { type: String, required: true },
    duration: { type: Number, required: true },
    genre: { type: String, required: true },
    actors: [actorSchema], default: []
});

module.exports = model('films', filmSchema);