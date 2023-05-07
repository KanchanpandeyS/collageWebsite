import React from 'react'
import classes from './Home.module.css'
import group53 from '../assets/Group 53.png'
import group54 from '../assets/Group 54.png'

const Home = () => {
  return (
    <div className={classes.homeWrapper}>
      <div className={classes.home}>
      <div className={classes.textWrapperContainer}>
        <div className={classes.textContainer}>
          <span className={classes.text1}>WELCOME TO</span>
          <span className={classes.text2}>THE INDIAN INSTITUTE OF MANAGEMENT KASHIPUR</span>
          <span className={classes.text3}>Lorem ipsum dolor sit amet, consetetur sadipscing eserewddiam nonumy eirmod tempor 
            invidunt ut labore.</span>
        </div>
            <button className={classes.btn}>READ MORE</button>
      </div>
     
      <img className={classes.img} src={group53} alt="group53" />
      <img className={classes.img} src={group54} alt="group54" />
      
    </div>
    </div>
  )
}

export default Home
