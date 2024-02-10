import React from 'react'
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import CourseDetailsPage from './components/CourseDetailsPage';
import NavBar from './components/Navbar';
import StudentProfile from './components/StudentProfile';


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/item/:id' element={<CourseDetailsPage/>}/>
        <Route path='/studentprofile' element={<StudentProfile/>}/>
      </Routes>
    </div>
  )
}

export default App
