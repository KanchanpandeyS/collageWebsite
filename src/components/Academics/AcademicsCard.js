import React from "react";
import { Card } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";
import classes from '../Academics/acadmic.module.css'

const AcademicsCard = (props) => {
  return (
    <>
      <Card style={{ width: "20rem", cursor:"pointer"} }>
        <Card.Img style={{ width: "20rem"}} variant="top" src={props.url} />
        <Card.Body>
          <Card.Title className={classes.cardTitle}>{props.title} </Card.Title>
          <Card.Text className={classes.cardText}>{props.text}</Card.Text>
        </Card.Body>
        <Card.Text className={classes.tag}>
          <FaGraduationCap />
          {props.tag}
        </Card.Text>
      </Card>
    </>
  );
};

export default AcademicsCard;
