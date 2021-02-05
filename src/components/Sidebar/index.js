import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CourseActions from "../../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          {/* <strong>{module.title}</strong> */}
          
            {module.lessons.map((lesson) => (
              <div key={lesson.id}>             
                <button  onClick={() => toggleLesson(module, lesson)}>{lesson.title}</button>
              </div>
            ))}
          
        </div>
      ))}
    </aside>
  );
};

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
