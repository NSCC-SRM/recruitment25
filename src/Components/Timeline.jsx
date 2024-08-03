import React from 'react';
import styled from 'styled-components';
import './Timeline.css';
import reactLogo from '../assets/react.svg'
import timelineElements from './timelineElements';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: black;
    color: #fff;
    border: 5px solid #56CAD1;
    font-weight: 600;
    display: flex;
    justifly-content: center;
    font-size: 22px;
    flex-direction: column;
    border-radius: 30px;

    @media (max-width: 599px) {
      display: flex;
      justifly-content: center;
      place-content: center;
      place-items: center;
      // align-content: center;
      // align-items: center;
      height: 32vh;
      width: 60vw;
      padding: 6em 3em !important;
      
    }
  }
`;

const Timeline = () => {

  return (
    <div className='timeline' id='timeline'>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {

          return (
            <StyledVerticalTimelineElement
              key={element.key}
              dateClassName="date"
              // contentStyle={{ background: 'black', color: '#fff',border: '5px solid #56CAD1',fontWeight:'600',display:'flex',flexDirection:'column' , }}
              contentArrowStyle={{ border: 'transparent transparent transparent #00aaff',borderWidth: '10px' }}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h3></h3>
              <h3></h3>
              <h3 className="vertical-timeline-element-title">{element.description}</h3>
            </StyledVerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
