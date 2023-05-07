import React from 'react'
import classes from './research.module.css'
import img1 from '../../assets/Group 62.png'
import img2 from '../../assets/Group 63.png'
import img3 from '../../assets/Group 64.png'
import ResearchCard from './ResearchCard'

const Reserach = () => {
    const cardContent = [
        {
            title: "News & Events",
            url: img1,
            text: "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING IPSUM",
            name: "by Suman Yadav",
            calender: "12th Sep 2022"
        },
        {
            title: "Industry Connect",
            url: img2,
            text: "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING IPSUM",
            name: "by Suman Yadav",
            calender: "12th Sep 2022"
        },
        {
            title: "Notice Board",
            url: img3,
            text: "LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING IPSUM",
            name: "by Suman Yadav",
            calender: "12th Sep 2022"
        }
    ]

    const Researchcards = cardContent.map((item, idx) =>{
        return <ResearchCard key={idx} title={item.title} url={item.url} text={item.text} name = {item.name} calender ={item.calender} />

    }) 
  return (
    <div id='reserach' className={classes.container}>
        <div className={classes.researchContainer}>
            <div className={classes.research}>
            {Researchcards}
            </div>
           
        </div>
    </div>
  )
}

export default Reserach