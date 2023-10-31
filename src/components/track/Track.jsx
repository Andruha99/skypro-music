import React from "react";
import "./track.css";
import "../../App.css";
import {
  StyledPlayListTrack,
  StyledPlaylistItem,
  StyledTrackAlbum,
  StyledTrackAlbumLink,
  StyledTrackAuthor,
  StyledTrackAuthorLink,
  StyledTrackTimeSvg,
  StyledTrackTimeText,
  StyledTrackTitle,
  StyledTrackTitleImage,
  StyledTrackTitleSpan,
  StyledTrackTitleSvg,
  TrackTitleLink,
} from "./styles";

export const Track = (props) => {
  return (
    <StyledPlaylistItem>
      <StyledPlayListTrack>
        <StyledTrackTitle>
          <StyledTrackTitleImage>
            <StyledTrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </StyledTrackTitleSvg>
          </StyledTrackTitleImage>
          {props.isLoading ? (
            <div className="skeleton-track-text skeleton"></div>
          ) : (
            <div className="track__title-text">
              <TrackTitleLink href="http://">
                {props.trackTitle}
                <StyledTrackTitleSpan>
                  {props.trackTitleSpan}
                </StyledTrackTitleSpan>
              </TrackTitleLink>
            </div>
          )}
        </StyledTrackTitle>

        {props.isLoading ? (
          <div className="skeleton-track-author skeleton"></div>
        ) : (
          <StyledTrackAuthor>
            <StyledTrackAuthorLink href="http://">
              {props.author}
            </StyledTrackAuthorLink>
          </StyledTrackAuthor>
        )}

        <StyledTrackAlbum>
          {props.isLoading ? (
            <div className="skeleton-track-author skeleton"></div>
          ) : (
            <StyledTrackAlbumLink href="http://">
              {props.trackAlbum}
            </StyledTrackAlbumLink>
          )}
        </StyledTrackAlbum>
        <div className="track__time">
          <StyledTrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </StyledTrackTimeSvg>
          {props.isLoading ? (
            <StyledTrackTimeText className="track__time-text">
              0:00
            </StyledTrackTimeText>
          ) : (
            <StyledTrackTimeText className="track__time-text">
              {props.trackTime}
            </StyledTrackTimeText>
          )}
        </div>
      </StyledPlayListTrack>
    </StyledPlaylistItem>
  );
};
