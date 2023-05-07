import React from "react";
import classes from "./student.module.css";
import circle from "../../assets/Group 65.svg";
import group67 from "../../assets/Group 67.png";
import chat from "../../assets/face.jpg";
import group68 from "../../assets/Group 68.png";
import {HiArrowLongRight} from 'react-icons/hi2'

const Student = () => {
  return (
    <div id="faculty">
      <div className={classes.wrapper}>
        <div className={classes.box1}>
          <div className={classes.box1Background}>
            <img className={classes.box1img1} src={circle} alt="circle" />
            <img className={classes.box1img} src={group67} alt="group67" />
          </div>
          <div className={classes.listWrapper}>
           <h6>Student Corner</h6>
           <div className={classes.arrow}>
           <span>Read More</span>
           <span>
            <HiArrowLongRight/>
            </span>
            </div>
           <ul className={classes.listBox}>
            <li>
              <span>Life @ IIM Kashipur</span>
              <span><HiArrowLongRight /></span>
            </li>
            <li>
              <span>Student Council</span>
              <span><HiArrowLongRight /></span>
            </li>
            <li>
              <span> Clubs, Committee, Cells</span>
              <span><HiArrowLongRight /></span>
            </li>
            <li>
              <span>Students' Achievement</span>
              <span><HiArrowLongRight /></span>
            </li>
            <li>
              <span>Wellness Facilities</span>
              <span><HiArrowLongRight /></span>
            </li>
           </ul>
          </div>
        </div>
        <div className={classes.box2}>
          <img className={classes.box2Img} src={chat} alt="chat" />
        </div>
        <div className={classes.box3}>
          <div>
            <img className={classes.box3img} src={group68} alt="circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
