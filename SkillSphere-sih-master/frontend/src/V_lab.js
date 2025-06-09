import React from 'react'
import './styles/v_lab.css'
import vLab from './assets/v_lab.png'
import Header from './utils/Header'
import labIcon from './assets/v-lab-2.png'
const V_lab = () => {
  const features = [
    {
      title: 'Interactive Simulations',
      content: 'Engage with realistic lab experiments digitally.'
    }, {
      title: 'Accessible Anywhere',
      content: 'Learn remotely with flexible timing.'
    }, {
      title: 'Safe and Cost-Effective',
      content: ' Avoid risks and reduce expenses.'
    }, {
      "title": "Instant Feedback",
      "content": "Receive real-time feedback to enhance learning."
    }
  ]

  return (
    <>
      <Header />
      <div className='what-v-lab-container'>
        <div className='v-lab-intro-container'>
          <div className='v-lab-intro'>
            Virtual Labs
          </div>
          <div className='v-lab-content'>
            A virtual lab is an online simulation providing interactive learning experiences and experiments remotely.
          </div>
          <div className='v-lab-start-btn-container'>
            <a href='http://127.0.0.1:5500/virtual%20lab%20host%20file/index.html'>
            <button className='v-lab-start-btn'>
              Start
            </button>
            </a>
          </div>
        </div>
        <div>
          <img src={vLab} className='v-lab-image' />
        </div>
      </div>

      <div className='features-container'>
        {
          features.map((feature, index) => (
            <div className='lab-features' key={index}>
              <div className='lab-features-title'>
                {feature.title}
              </div>
              <div className='lab-features-content'>
                {feature.content}
              </div>
            </div>
          ))
        }
      </div>
      <div className='lab-details-container'>
        <div className='lab-precautions'>
          <div>
            Students should complete the related courses on our site before using the virtual lab. This ensures they have the necessary foundational knowledge to understand the experiments, apply concepts practically, and analyze results effectively, making their learning experience more meaningful.
          </div>
          <div>
            However, if you want to play with the things and explore, then go ahead!
          </div>
        </div>
        <div className='lab-icon-container'>
          <img src={labIcon} className='lab-icon' />
        </div>
      </div>

    </>
  )
}

export default V_lab
