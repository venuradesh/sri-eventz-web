import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSection, unsetSection } from "../features/ActiveSection/SectionSlice";
import { animateScroll as scroll } from "react-scroll";

function Section(props) {
  const section = useRef();
  const dispatch = useDispatch();

  const onSectionClick = () => {
    const className = section.current.classList[0];
    dispatch(unsetSection());
    dispatch(setSection({ active: className }));
    if (props.href === "#search") {
      scroll.scrollTo(100, {
        duration: 1100,
        smooth: true,
      });
    }
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
