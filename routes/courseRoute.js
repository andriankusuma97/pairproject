const router = require('express').Router()
const CourseController = require('../controllers/courseController.js')

router.get('/', CourseController.showAllCourse)
router.get('/add', CourseController.addFormCourse)
router.post('/add', CourseController.postFormCourse)

module.exports = router