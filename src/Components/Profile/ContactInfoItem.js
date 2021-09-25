import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = "I need text ",
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </ItemStyles>
  );
}

const ItemStyles = styled.div`
  display: flex;
  align-items: center;

  .icon {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 3.5rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
    line-height: 1px;
  }
`;
