import React from 'react';
import '../styles/courseCard.css';
import doubleArrow from '../assets/doubleArrow.png';
import desTag from '../assets/desTag.png';
import crs1 from '../assets/courseImages/crs-1.png';
import crs2 from '../assets/courseImages/crs-2.png';
import crs3 from '../assets/courseImages/crs-3.png';
import crs4 from '../assets/courseImages/crs-4.png';
import crs5 from '../assets/courseImages/crs-5.png';
import crs6 from '../assets/courseImages/crs-6.png';
import mentorImg from '../assets/mentor.png';
import Courses from './CourseData';

const CourseCard = ({ styles, crsId, bgColor }) => {
  const Course = Courses.find(crs => crs.id == crsId);

  // Mapping the course ID to the corresponding image
  const images = {
    1: crs1,
    2: crs2,
    3: crs3,
    4: crs4,
    5: crs5,
    6: crs6,
  };

  const CourseImg = images[crsId]; // Retrieve the correct image based on the ID

  const divStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div className={`course-card-container course-card-container-${styles}`} style={divStyle}>
      <div className={`course-image-container course-image-container-${styles}`}>
        <img src={CourseImg} className={`course-image course-image-${styles}`} alt={`Course ${crsId}`} />
      </div>
      <div className={`course-title-card-container course-title-card-container-${styles}`}>
        <div className={`double-arrow-image-container double-arrow-image-container-${styles}`}>
          <img src={doubleArrow} className={`double-arrow-image double-arrow-image-${styles}`} alt="Double Arrow" />
        </div>
        <div className={`course-title-card-text course-title-card-text-${styles}`}>
          {Course.title}
        </div>
      </div>
      <div className={`course-content-card-container course-content-card-container-${styles}`}>
        <div className={`course-description-card-container course-description-card-container-${styles}`}>
          <div className={`description-tag-image-container description-tag-image-container-${styles}`}>
            <img src={desTag} className={`description-tag-image description-tag-image-${styles}`} alt="Description Tag" />
          </div>
          <div className={`course-description-card-text course-description-card-text-${styles}`}>
            {Course.desc}
          </div>
        </div>
        <div className={`course-mentor-details-container course-mentor-details-container-${styles}`}>
          <div className={`mentor-img-container mentor-img-container-${styles}`}>
            <img src={mentorImg} className={`mentor-img mentor-img-${styles}`} alt="Mentor" />
          </div>
          <div className={`mentor-text-container mentor-text-container-${styles}`}>
            <div className={`mentor-heading mentor-heading-${styles}`}>
              Mentor
            </div>
            <div className={`mentor-name mentor-name-${styles}`}>
              {Course.mentor}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
