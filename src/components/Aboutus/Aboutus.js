import React from 'react'
import classes from './aboutus.module.css'


const Aboutus = () => {
  return (
    <div id='about' className={classes.sectionContainer}>
        <div className={classes.aboutus}>
            <div className={classes.imgContainer}>
              <div className={classes.left}>
              
              </div>
              <div className={classes.right}>
              <h4>About us</h4>
              <p>The Indian Institute of Management Kashipur is a second-generation IIM set up by the Government of 
                India in 2011. It aspires to achieve excellence in management education by using innovative 
                teaching methods, promoting high quality research and practicing sustainable leadership. </p>
                <p>The institute strives to create and disseminate knowledge through applied and interdisciplinary 
                  research and practices in emerging areas of management. The institute develops socially
                   conscious, competent, and ethical business leaders and researchers capable of critical thinking, 
                   innovation, and entrepreneurship while being inclusive and focusing on both regional development 
                   and internationalisation.</p>
                   <button className={classes.btn}>READ MORE</button>
              </div>
            </div>
        </div>
        <div className={classes.aboutus2}>
          <div className={classes.wrapper}>
          <div className={classes.box}>
            <span className={classes.number}>83%</span>
            <span className={classes.text}>OF RECENT GRADUATES STARTED NEW JOB</span>
          </div>
          <div className={classes.box}>
          <span className={classes.number}>134</span>
            <span className={classes.text}>DEGREE PROGRAMS</span>
          </div>
          <div className={classes.box}>
          <span className={classes.number}>12+</span>
            <span className={classes.text}>YEARS OF HISTORY</span>
          </div>
          </div>
        </div>

    </div>
  )
}

export default Aboutus