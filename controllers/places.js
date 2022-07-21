const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Thaitanic',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thaitanis.jfif'
    }, {
        name: 'Longer Johns Silver',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/crapfest.jfif'
    }]

    res.render('places/index', { places })
})

module.exports = router
