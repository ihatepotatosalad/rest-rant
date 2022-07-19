const router = require('express').Router()
const Def = require('./default')

router.get('/', (req, res) => {
    res.render('places/index')
})


module.exports = router
