const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-exercise-1')
    .then(() => console.log('connected to the database'))
    .catch(err => console.log(err));

const courseSchema = mongoose.Schema({
    tags: [ String ],
    data: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses()
{
    return await Course
                    .find({ tags: 'backend', isPublished: true})
                    .sort({name: 1})
                    .select('name author');
}

async function displayCourses()
{
    const courses = await getCourses();
    console.log(courses);
}

displayCourses();

