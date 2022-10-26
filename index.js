const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const courses = require('./data/courses.json');
const blog = require('./data/blog.json');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/details/:courseId', (req, res) => {
  const courseDetails = courses.find(
    course => course.id === req.params.courseId
  );

  res.json(courseDetails);
});

app.get('/blog', (req, res) => {
  res.json(blog);
});

app.listen(5000);
