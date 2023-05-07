import React from "react";
import classes from "./footer.module.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.svg";
import logo6 from "../../assets/logo6.png";
import {GrFacebookOption, GrTwitter} from 'react-icons/gr'
import map from '../../assets/map.png'


const Footer = () => {
  return (
    <div id="relations" className={classes.container}>
      <div className={classes.imgLine}>
        <MdOutlineArrowBackIosNew className={classes.fIcon} />
        <div>
          <img className={classes.imgLogo} src={logo1} alt="logo1" />
        </div>
        <div>
          <img className={classes.imgLogo} src={logo2} alt="logo2" />
        </div>
        <div>
          <img className={classes.imgLogo} src={logo3} alt="logo3" />
        </div>
        <div>
          <img className={classes.imgLogo} src={logo4} alt="logo4" />
        </div>
        <div>
          <img className={classes.imgLogo} src={logo5} alt="logo5" />
        </div>
        <div>
          <img className={classes.imgLogo} src={logo6} alt="logo6" />
        </div>
        <MdArrowForwardIos className={classes.fIcon} />
      </div>
      <div className={classes.footerHeading}>
        <div>
          <h6>INFO</h6>
          <div className={classes.left}>
          <ul className={classes.listContainer}>
            <li>
              <span>{`>`}</span>
              <span>Press & Media</span>
            </li>
            <li>
              <span>{`>`}</span>
              <span>Help Desk</span>
            </li>
            <li>
              <span>{`>`}</span>
              <span>Intranet (Employees only)</span>
            </li>{" "}
            <li>
              <span>{`>`}</span>
              <span>HRMS Portal</span>
            </li>
            <li>
              <span>{`>`}</span>
              <span>Webmail</span>
            </li>
            <li>
              <span>{`>`}</span>
              <span>OLT Web</span>
            </li>
          </ul>
          <ul  className={classes.listContainer}>
            <li>
              <span>{`>`}</span>
              <span>Press & Media</span>
            </li>
            <li>
              <span>{`>`}</span>
              <span>Help Desk</span>
            </li>
            <li>
              <span>{`>`}</span>
              <span>Intranet (Employees only)</span>
            </li>{" "}
            <li>
              <span>{`>`}</span>
              <span>HRMS Portal</span>
            </li>
            <li>
              <span>{`>`}</span>
              <span>Webmail</span>
            </li>
            <li>
              <span>{`>`}</span>
              <span>OLT Web</span>
            </li>
          </ul>
          </div>
        </div>
        
          
       
        <div>
          <h6>CONTACT</h6>
          <ul  className={classes.listContainer}>
            <li>
              <span>Press & Media</span>
            </li>
            <li>
              <span>Help Desk</span>
            </li>
            <li>
              <span>Intranet (Employees only)</span>
            </li>
            <li>
              <span>HRMS Portal</span>
            </li>
            <li>
              <span>Webmail</span>
            </li>
            <li>
              <span>OLT Web</span>
            </li>
            <li>
              <span>
                <GrFacebookOption />
              </span>
              <span>
                <GrTwitter />
              </span>
            </li>
            
          </ul>
        </div>
        <div>
          <h6>LOCATE US</h6>
          <div>
          <img  className={classes.map} src={map} alt="map" />  
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
