import React, { useEffect, useState } from "react";
import { StyledProgressInput } from "./styles";

export const ProgressBar = (props) => {
  const changeTime = (newTime) => {
    props.playRef.current.currentTime = newTime;
  };

  return (
    <StyledProgressInput
      type="range"
      min={0}
      max={props.duration}
      value={props.currentTime}
      step={0.01}
      onChange={(event) => {
        changeTime(event.target.value);
      }}
      $color="#B672FF"
    />
  );
};
