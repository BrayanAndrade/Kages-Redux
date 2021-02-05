import React from "react";

import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => {
  return (
    <div>
      <strong> {activeModule.title}</strong>
      <br />
      <img src={activeLesson.img}/>
    </div>
  
  );
};

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
