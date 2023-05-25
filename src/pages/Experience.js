import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            V.V.M.I.C. CHAMPAWAT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Intermediate in PCM
          </h4>
          <p>PCM Percentage: 91.33%</p>
          <p>Overall Percentage: 87%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SHARDA UNIVERSITY
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            B.Tech in Computer Science AIML
          </h4>
          <p>CGPA: 9.38*</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June'22 - Aug'22"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SMART KNOWER | Machine learning intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <p>ML gender classification model for minor project.</p>
          <p>
            Built a major project to predict income using various ML algorithms.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
