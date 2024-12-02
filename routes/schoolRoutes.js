const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Define API routes
router.get('/', schoolController.getAllSchools);           // Get all schools
router.get('/:id', schoolController.getSchoolById);        // Get a specific school by ID
router.post('/', schoolController.addSchool);              // Add a new school
router.put('/:id', schoolController.updateSchoolById);     // Update a school by ID
router.delete('/:id', schoolController.deleteSchoolById);  // Delete a school by ID

module.exports = router;
