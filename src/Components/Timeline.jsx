import React from 'react';
import styled from 'styled-components';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faCircleCheck, faPeopleArrows, faNewspaper, faFile, faBullhorn, faHandHoldingHand } from '@fortawesome/free-solid-svg-icons';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from './timelineElements';

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    background: black;
    color: #fff;
    border: 5px solid #56CAD1;
    font-weight: 600;
    display: flex;
    justify-content: center;
    font-size: 22px;
    flex-direction: column;
    border-radius: 30px;

    @media (max-width: 599px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32vh;
      width: 60vw;
      padding: 6em 3em !important;
    }
  }

  .vertical-timeline-element-icon {
    display: flex;
    align-items: center;
    padding-right: 22px;
    padding-bottom: 23px;
    justify-content: center;
    align-content: center;
    background-color: #56CAD1;
    // color: #fff;
    // border: 5px solid #00aaff;

     @media (max-width: 599px) {
    }
  }

  .vertical-timeline-element-icon svg{

    @media (max-width: 1169px) {
        margin-left: 6px;
        margin-top: 7px;
      }

    @media (max-width: 599px) {
      margin-left: 6px;
      margin-top: 7px;
    }
  }
`;

const iconMapping = {
  file: faFile,
  hand: faHandHoldingHand,
  check: faCircleCheck,
  arrow: faPeopleArrows,
  speak: faBullhorn
};


const Timeline = () => {
  return (
    <div className='timeline' id='timeline'>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <StyledVerticalTimelineElement
            key={element.key}
            dateClassName="date"
            contentArrowStyle={{
              border: 'transparent transparent transparent #00aaff',
              borderWidth: '10px',
            }}
            icon={<FontAwesomeIcon icon={iconMapping[element.img]} />}
          >
            <h3 className="vertical-timeline-element-title">
              {element.title}
            </h3>
            <h3 className="vertical-timeline-element-description">
              {element.description}
            </h3>
          </StyledVerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
