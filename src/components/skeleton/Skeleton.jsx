import React from "react";
import { SkeletonTrackAuthor, SkeletonTrackText, SkeletonWrap } from "./styles";
import {
  PlayListTrack,
  PlaylistItem,
  TrackTimeText,
  TrackTitle,
  TrackTitleImage,
  TrackTitleSvg,
} from "../track/styles";

export const Skeleton = () => {
  return (
    <PlaylistItem>
      <PlayListTrack>
        <TrackTitle>
          <TrackTitleImage>
            <TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </TrackTitleSvg>
          </TrackTitleImage>
          <SkeletonTrackText />
        </TrackTitle>

        <SkeletonTrackAuthor />
        <SkeletonTrackAuthor />
        <TrackTimeText className="track__time-text">0:00</TrackTimeText>
      </PlayListTrack>
    </PlaylistItem>
    // <SkeletonWrap>

    // </SkeletonWrap>
  );
};
