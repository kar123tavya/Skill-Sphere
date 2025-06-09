import React, { useState } from 'react'
import C from '../assets/courseC.png'
import navCourse from '../assets/navCourse.png'
import navCourse2 from '../assets/navCourse2.png'
import '../styles/homeCourseGrid.css'
import Courses from './CourseData'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom'
import VibrantColors from './VibrantColors'

const HomeCourseGrid = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(4);

  const CoursesItem = Courses.slice(left, right);
  return (
    <div className='course-grid-container'>
      <div className='crs-C-container'>
        <div className='crs-C-img-container'>
          <img src={C} className='C-img' />
        </div>
        <div className='crs-C-text-container'>
          OURSES
        </div>
      </div>
      <div className='course-grid'>
        {left !== 0 ? <div className='nav-course-image-left-container' onClick={() => {
          setLeft(left - 4);
          setRight(right - 4);
        }}>
          <img src={navCourse2} className='nav-course-2-image' />
        </div> : ''}

        {CoursesItem.map((Course, index) => (
          <Link to={`/course/${Course.id}`} className='course-link'>
            <CourseCard styles="small" crsId={Course.id} bgColor={VibrantColors[index]} key={index} />
          </Link>
        ))}

        {right < 5 ? <div className='nav-course-image-right-container' onClick={() => {
          setLeft(left + 4);
          setRight(right + 4);
        }}>
          <img src={navCourse} className='nav-course-image' />
        </div> : ''}       
      </div>

    </div>
  )
}

export default HomeCourseGrid
