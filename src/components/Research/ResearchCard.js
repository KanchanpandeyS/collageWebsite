import React from "react";
import { Card } from "react-bootstrap";
import {BsPerson} from "react-icons/bs";
import {MdCalendarMonth} from "react-icons/md";
import classes from './research.module.css'
import {BsArrowRight} from 'react-icons/bs'

const ResearchCard = (props) => {
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Title className={classes.title} >{props.title} </Card.Title>
        <Card.Img style={{ width: "20rem", height:"14rem" }} variant="top" src={props.url} />
        <div className={classes.icons}>
          <span>
            <BsPerson />
            {props.name}
          </span>
          <span>
            <MdCalendarMonth />
            {props.calender}
          </span>
        </div>
        <Card.Body>
          <Card.Text className={classes.text} >{props.text}</Card.Text>
        </Card.Body>
        <div className={classes.readMore}>
            <a><span>READ MORE</span>
                <BsArrowRight />
            </a>
        </div>
        <Card.Text>{props.tag}</Card.Text>
      </Card>
    </>
  );
};

export default ResearchCard;
