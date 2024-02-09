import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

const CareerTimeline = ({ timelineElements }) => {
  let workIconStyles = { background: "#0ef" };
  let schoolIconStyles = { background: "#0ef" };

  return (
    <section>
      <h2 className="section-title">
        Career <span>Path</span>
      </h2>
      <VerticalTimeline>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={
              element.icon === "work" ? workIconStyles : schoolIconStyles
            }
            icon={element.icon === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">{element.title}</h4>
            <h5 className="vertical-timeline-element-subtitle">
              {element.location}
            </h5>
            <p id="description">{element.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default CareerTimeline;
