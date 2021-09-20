import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSection, unsetSection } from "../features/ActiveSection/SectionSlice";

function Section(props) {
  const section = useRef();
  const dispatch = useDispatch();

  const onSectionClick = () => {
    const className = section.current.classList[0];
    dispatch(unsetSection());
    dispatch(setSection({ active: className }));
  };

  return (
    <>
      <div className={props.classList} onClick={onSectionClick} ref={section}>
        {props.content}
        <img src={props.icon} />
      </div>
    </>
  );
}

export default Section;
