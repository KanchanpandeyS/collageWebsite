import React from "react";
import classes from "./acadmic.module.css";
import AcademicsCard from "./AcademicsCard";
import aca1 from "./../../assets/aca1.png";
import aca2 from "./../../assets/aca2.png";
import aca3 from "./../../assets/aca3.png";

const Acadmics = () => {
  const pageData = [
    {
      tag: "phd",
      title: "Doctoral Programme",
      text: "Sed ut perspiciatis unde omnisatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventores et quasi",
      url: aca1,
    },
    {
      tag: "Post Graduation",
      title: "MBA",
      text: "Sed ut perspiciatis unde omnisatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventores et quasi",
      url: aca2,
    },
    {
      tag: "Analytics",
      title: "MBA (Analytics)",
      text: "Sed ut perspiciatis unde omnisatus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventores et quasi",
      url: aca3,
    },
  ];

  const cardContainer = pageData.map((item, idx) => {
    return (
      <AcademicsCard
        key={idx}
        tag={item.tag}
        title={item.title}
        text={item.text}
        url={item.url}
      />
    );
  });
  return (
    <div id="acdemic" className={classes.Acadmics}>
      <div className={classes.cardContainer}>
        <div>
            <h3 className={classes.academicsHeadng}>Academics</h3>
            <p className={classes.academicstext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className={classes.card}>{cardContainer}</div>
      </div>
    </div>
  );
};

export default Acadmics;
