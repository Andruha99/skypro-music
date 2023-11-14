import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  25% {
    background-color: #696969;
  }
  50% {
    background-color: #313131;
  }
  75% {
    background-color: #696969;
  }
  100% {
    background-color: #313131;
  }`;

export const StyledSkeleton = styled.div`
  width: 100%;
  height: 100%;
  animation-name: ${skeletonAnimation};
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

export const SkeletonTrackText = styled(StyledSkeleton)`
  width: 356px;
  height: 19px;
`;

export const SkeletonTrackAuthor = styled(StyledSkeleton)`
  width: 271px;
  height: 19px;
`;

export const SkeletonAudioPlayerText = styled(StyledSkeleton)`
  width: 59px;
  height: 15px;
`;

export const SkeletonWrap = styled.div`
  display: flex;
  column-gap: 40px;
`;
