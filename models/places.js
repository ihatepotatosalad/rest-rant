const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'https://loveincorporated.blob.core.windows.net/contentimages/main/waiter-bad-service.jpg' },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Surley not that old??'],
        max: [new Date().getFullYear(), 'hey this year is in the future']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})
placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving the people of ${this.city},${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)
