const { Router } = require('express')
const router = Router()

router.get('/hello', (req, res) => {
  return res.json({ error: false, message: 'world' })
})

module.exports = router
