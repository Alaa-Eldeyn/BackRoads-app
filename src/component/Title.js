import React from "react";

const Title = (title) => {
  const { firstPart, secondPart } = title;
  return (
    <div className="section-title">
      <h2>
        {firstPart} <span>{secondPart}</span>
      </h2>
    </div>
  );
};

export default Title;
