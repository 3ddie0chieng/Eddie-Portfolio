import React from 'react'
import './About.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import Edwin_pic from '../../Assets/edwin_1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={Edwin_pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                        I am a Junior Frontend Developer with 2+ years of experience designing and developing responsive, user-friendly web applications. I specialize in modern JavaScript frameworks like React.js with a strong foundation in HTML, CSS, and Git for version control. Over the course of my career, I've had the opportunity to work with some organizations, contributing to their digital success through intuitive UI, clean code, and scalable front-end architecture. 
                    </p>
                    <p>
                        I'm passionate about turning design concepts into functional, accessible web interfaces that not only look great but also perform reliably across devices. Whether collaborating in teams or taking ownership of solo projects, I bring consistency, curiosity, and dedication to every build.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>ReactJS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>NodeJS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Database</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Clients  Served</p>

            </div>
        </div>
      
    </div>
  )
}

export default About
