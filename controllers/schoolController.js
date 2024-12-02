const fs = require('fs').promises;
const path = require('path');

const schoolsFilePath = path.join(__dirname, '../data/schools.json');

// Get all schools
exports.getAllSchools = async (req, res) => {
  try {
    const data = await fs.readFile(schoolsFilePath, 'utf-8');
    const schools = JSON.parse(data);
    res.status(200).json(schools);
  } catch (error) {
    console.error('Error reading schools.json file:', error);
    res.status(500).json({ message: 'Error retrieving schools data' });
  }
};

// Get a specific school by ID
exports.getSchoolById = async (req, res) => {
  try {
    const data = await fs.readFile(schoolsFilePath, 'utf-8');
    const schools = JSON.parse(data);
    const id = parseInt(req.params.id, 10);
    const school = schools.find(school => school.id === id);
    if (school) {
      res.status(200).json(school);
    } else {
      res.status(404).json({ message: 'School not found' });
    }
  } catch (error) {
    console.error('Error reading schools.json file:', error);
    res.status(500).json({ message: 'Error retrieving school data' });
  }
};

exports.deleteSchoolById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const data = await fs.readFile(schoolsFilePath, 'utf-8');
    const schools = JSON.parse(data);
    const index = schools.findIndex(school => school.id === id);
    if (index === -1) {
      return res.status(404).json({ message: 'School not found' });
    }
    const deletedSchool = schools.splice(index, 1);
    await fs.writeFile(schoolsFilePath, JSON.stringify(schools, null, 2));
    res.status(200).json({ message: 'School deleted successfully', deletedSchool });
  } catch (error) {
    console.error('Error deleting school:', error);
    res.status(500).json({ message: 'Error deleting school' });
  }
};

exports.addSchool = async (req, res) => {
  try {
    const newSchool = req.body;

    // Read existing data from the schools file
    const data = await fs.readFile(schoolsFilePath, 'utf-8');
    const schools = JSON.parse(data);

    // Assign a new ID
    newSchool.id = schools.length > 0 ? schools[schools.length - 1].id + 1 : 1;

    // Add the new school to the list
    schools.push(newSchool);

    // Write updated data back to the file
    await fs.writeFile(schoolsFilePath, JSON.stringify(schools, null, 2));

    res.status(201).json(newSchool);
  } catch (error) {
    console.error('Error adding school:', error);
    res.status(500).json({ message: 'Error adding school' });
  }
};
exports.updateSchoolById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Extract the ID from request parameters
    const updatedData = req.body;

    // Read existing data from the schools file
    const data = await fs.readFile(schoolsFilePath, 'utf-8');
    const schools = JSON.parse(data);

    // Find the school by ID and update its details
    const index = schools.findIndex((school) => school.id === id);
    if (index === -1) {
      return res.status(404).json({ message: 'School not found' });
    }

    // Update the school's information
    schools[index] = { ...schools[index], ...updatedData };

    // Write the updated data back to the file
    await fs.writeFile(schoolsFilePath, JSON.stringify(schools, null, 2));

    res.status(200).json(schools[index]);
  } catch (error) {
    console.error('Error updating school:', error);
    res.status(500).json({ message: 'Error updating school' });
  }
};
