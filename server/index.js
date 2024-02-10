const express =require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const PORT = 8001
const data = require('./data/index')
const Data = require('./models/Data');
const path = require('path');


app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(express.json()); 
app.use(cors());


app.get('/', async (req, res)=>{
    try{
        const data = await Data.find();
        res.json(data);
    }catch(error){
        console.log('error',error)
        res.status(500).send('Server Error')
    }
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is Connected")

    // insertData()
    })
  .catch((err) => console.log(err));

app.listen(PORT, ()=>{
    console.log('server number', PORT);

})

const insertData = async () => {
  try {
    const jsonData = [
      {
      "id": 1,
      "name": "Introduction to React Native",
      "instructor": "John Doe",
      "description": "Learn the basics of React Native development and build your first mobile app.",
      "enrollmentStatus": "Open",
      "duedate":"30th August 2024",
      "progress": 6,
      "isComplete":false,
      "thumbnail": "React_Native.jpeg",
      "duration": "8 weeks",
      "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      "location": "Online",
      "prerequisites": ["Basic JavaScript knowledge", "Familiarity with React"],
      "syllabus": [
      {
      "week": 1,
      "topic": "Introduction to React Native",
      "content": "Overview of React Native, setting up your development environment."
      },
      {
      "week": 2,
      "topic": "Building Your First App",
      "content": "Creating a simple mobile app using React Native components."
      }],
      "students": [
      {
      "id": 101,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      },
      {
      "id": 102,
      "name": "Bob Smith",
      "email": "bob@example.com",
      }
      ]
      }
      ,{
          "id": 2,
          "name": "Advance cource to React Native",
          "instructor": "Doe John",
          "description": "Learn the Advance concept of React Native development and build your first mobile app.",
          "enrollmentStatus": "Open",
          "duedate":"30th August 2024",
          "progress": 3,
          "isComplete":false,
          "thumbnail": "advancenative.jpeg",
          "duration": "8 weeks",
          "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
          "location": "Online",
          "prerequisites": ["Basic JavaScript knowledge", "Familiarity with React","Basic React Native knowledge"],
          "syllabus": [
          {
          "week": 1,
          "topic": "Advancement to React Native",
          "content": "Overview of React Native, setting up your development environment."
          },
          {
          "week": 2,
          "topic": "Building Your Advance React Native App",
          "content": "Creating a mobile app using React Native components."
          }],
          "students": [
          {
          "id": 103,
          "name": "Johnson",
          "email": "alice@example.com"
          },
          {
          "id": 104,
          "name": "Bob",
          "email": "bob@example.com"
          }
          ]
          },
          {
              "id": 3,
              "name": "Introduction to React Js",
              "instructor": "Alice Doe",
              "description": "Learn the basics of React Js development and build your first mobile app.",
              "enrollmentStatus": "Open",
              "duedate":"30th March 2024",
              "progress": 8,
              "isComplete":false,
              "thumbnail": "reactjs.jpeg",
              "duration": "8 weeks",
              "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
              "location": "Online",
              "prerequisites": ["HTML","CSS","Basic JavaScript knowledge"],
              "syllabus": [
              {
              "week": 1,
              "topic": "Introduction to React Js",
              "content": "Overview of React Js, setting up your development environment."
              },
              {
              "week": 2,
              "topic": "Building Your First App",
              "content": "Creating a simple mobile app using React Js components."
              }],
              "students": [
              {
              "id": 105,
              "name": "Alice",
              "email": "alice@example.com"
              },
              {
              "id": 106,
              "name": "Smith",
              "email": "bob@example.com"
              }
              ]
              }, {
                  "id": 4,
                  "name": "Advance Course in React Native",
                  "instructor": "Alice John",
                  "description": "Learn the Advancement of React Js development and build your first mobile app.",
                  "enrollmentStatus": "Open",
                  "duedate":"30th july 2024",
                  "progress": 6,
                  "isComplete":false,
                  "thumbnail": "advancenative.jpeg",
                  "duration": "8 weeks",
                  "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
                  "location": "Online",
                  "prerequisites": ["Basic JavaScript knowledge", "Familiarity with Basic React"],
                  "syllabus": [
                  {
                  "week": 1,
                  "topic": "Introduction to Advance React Js",
                  "content": "Overview of React Js, setting up your development environment."
                  },
                  {
                  "week": 2,
                  "topic": "Building Your App",
                  "content": "Creating a mobile app using React Native components."
                  }],
                  "students": [
                  {
                  "id": 107,
                  "name": "Alice Bob",
                  "email": "alice@example.com"
                  },
                  {
                  "id": 108,
                  "name": "Smith",
                  "email": "bob@example.com"
                  }
                  ]
                  }, {
                      "id": 5,
                      "name": "Introduction to Javascript",
                      "instructor": "Bob Smith",
                      "description": "Learn the basics of Javascript development and build your first mobile app through js.",
                      "enrollmentStatus": "Open",
                      "duedate":"30th August 2024",
                      "progress": 2,
                      "isComplete":false,
                      "thumbnail": "js.jpeg",
                      "duration": "8 weeks",
                      "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
                      "location": "Online",
                      "prerequisites": ["HTML","CSS"],
                      "syllabus": [
                      {
                      "week": 1,
                      "topic": "Introduction to Javascript",
                      "content": "Overview of Javascript, setting up your development environment."
                      },
                      {
                      "week": 2,
                      "topic": "Building Your First App",
                      "content": "Creating a simple mobile app using Javascript ."
                      }],
                      "students": [
                      {
                      "id": 109,
                      "name": "Alice Johnson",
                      "email": "alice@example.com"
                      },
                      {
                      "id": 110,
                      "name": "Bob Smith",
                      "email": "bob@example.com"
                      }
                      ]
                      }, {
                          "id": 6,
                          "name": "Course on Advance Javascript Native",
                          "instructor": "John Doe",
                          "description": "Learn the Advance concept of Javascript development and build your first mobile app.",
                          "enrollmentStatus": "Open",
                          "duedate":"30th Febuary 2024",
                          "progress": 9,
                          "isComplete":false,
                          "thumbnail": "advancejs.jpeg",
                          "duration": "8 weeks",
                          "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
                          "location": "Online",
                          "prerequisites": ["HTML","CSS","Basic JavaScript knowledge", "Familiarity with React"],
                          "syllabus": [
                          {
                          "week": 1,
                          "topic": "Introduction to Javascript Advance topics",
                          "content": "Overview of JS, setting up your development environment."
                          },
                          {
                          "week": 2,
                          "topic": "Building Your First Advance App",
                          "content": "Creating a simple mobile app using React Native components."
                          }],
                          "students": [
                          {
                          "id": 111,
                          "name": "Alice Johnson",
                          "email": "alice@example.com"
                          },
                          {
                          "id": 112,
                          "name": "Bob Smith",
                          "email": "bob@example.com"
                          }
                          ]
                          }
  ]
    await Data.insertMany(jsonData);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.disconnect(); // Close the MongoDB connection after data insertion
  }
};