const express = require('express')
const router = express.Router()

const {createCategory, getCategory} = require('../Controller/categoryController.jsx')


router.post('/', createCategory);
router.get('/', getCategory)

module.exports = router;