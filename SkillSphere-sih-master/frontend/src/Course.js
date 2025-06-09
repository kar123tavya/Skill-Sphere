import React from 'react'
import './styles/course.css'
import enrollImg from './assets/enroll-btn.png'
import chatAi from './assets/chatAi.png'
import Header from './utils/Header';
import CourseCard from './utils/CourseCard';
import courseTitleImg from './assets/courseTitle.png'
import Courses from './utils/CourseData';
import { useParams } from 'react-router-dom';
import VibrantColors from './utils/VibrantColors';
import { Link } from 'react-router-dom';

const Course = () => {

  const { id } = useParams();
  const course = Courses.find(c => c.id === parseInt(id));

  return (
    <>
      <Header />
      <div className='course-start-container'>
        <div className='course-title-container'>
          <div className='course-title'>
            <div className='course-title-img-container'><img src={courseTitleImg} className='course-title-img' /></div>
            <div className='course-title-text-container'>{course.title}</div>
          </div>
          <div className='course-tag-line'>
            Every great journey begins with a single step—dare to take it, and watch the world unfold.
          </div>
          <div className='course-btn-container'>
            <Link to={course.id == 1 ? "/virtual-lab" : "/404"}>
              <button className='v-lab-btn'>
                V-Labs
              </button>
            </Link>
            <button className='enroll-btn'>

              <div className='enroll-btn-text'>
                Enroll
              </div>
              <div className='enroll-btn-img-container'>
                <img src={enrollImg} className='enroll-btn-img' />
              </div>

            </button>
          </div>

        </div>
        <div className='course-chat-ai-btn-container'>
          <img src={chatAi} className='chat-ai-btn' />
        </div>
      </div>

      <div className='course-section'>
        <div className='course-info-container'>

          <div className='about-course'>
            <div className='course-defination-question'>
              {`What is ${course.subject}?`}
            </div>
            <div className='course-defination'>
              {course.desc}
            </div>
          </div>

          <div className='future-scope-course'>
            <div className='future-scope-course-title'>
              {`Future Scope of ${course.subject}:`}
            </div>
            <div className='future-scope-course-content'>
              {course.FutureScope.map((point, index) => (
                <React.Fragment key={index}>
                  {`${index + 1}) ` + point}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        <div className='course-application-container'>
          <div className='course-application-title'>
            {`Application of ${course.subject}`}
          </div>
          <div className='course-application-content'>
            {course.Application.map((point, index) => (
              <React.Fragment>
                {`${index + 1}) ` + point}
                <br />
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <CourseCard style="large" crsId={course.id} bgColor={VibrantColors[course.id - 1]} />
    </>
  )
}

export default Course

// < div className = 'course-overview-container' >
//         <div className='course-overview-title'>
//           Complete Course Overview
//         </div>
//         <div className='course-overview-btn-container'>
//           <button className='course-overview-btn'>
//             Overview
//           </button>
//         </div>
//       </div >