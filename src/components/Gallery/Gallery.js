import React from "react";
import classes from "./gallery.module.css";
import galimg1 from "../../assets/galimg1.png";
import galimg2 from "../../assets/galimg2.png"
import galimg3 from "../../assets/galimg3.png";
import galimg4 from "../../assets/Group 64.png";
import galimg5 from "../../assets/galimg5.png";
import galimg6 from "../../assets/Group 68.png";
import galimg7 from "../../assets/galimg6.png";

const Gallery = () => {
  return (
    <div id="placements" className={classes.sectionWrapper}>
      <div className={classes.galleryContainer}>
        <div className={classes.galery}>
          <h3>Center of Excellences</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className={classes.btnConatiner}>
          <button className={classes.btn}>Design Innovation Centre</button>
          <span>CoE in Public Policy and Government</span>
          <span>FIED</span>
        </div>
        <div className={classes.imgBox}>
          <div className={classes.imgWrapper}>
            <img className={classes.img1} src={galimg1} alt="facebook" />
          </div>
          <div className={classes.imgWrapper}>
            <div className={classes.box3}>
              <img className={classes.img2} src={galimg2} alt="facebook" />
              <img className={classes.img2} src={galimg3} alt="facebook" />
            </div>
            <img className={classes.img3}src={galimg4} alt="facebook" />
          </div>
          <div className={classes.imgWrapper}>
            <img className={classes.img3} src={galimg5} alt="facebook" />
            <img className={classes.img3} src={galimg6} alt="facebook" />
          </div>
          <div className={classes.imgWrapper}>
            <img className={classes.img1} src={galimg7} alt="facebook" />
          </div>
        </div>
      </div>
      <div className={classes.viewBtn}>
      <button >VIEW ALL</button>
      </div>
    </div>
  );
};

export default Gallery;
