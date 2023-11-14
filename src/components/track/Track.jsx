import React from "react";
import * as S from "./styles";
import { SkeletonTrackAuthor, SkeletonTrackText } from "../skeleton/styles";

export const Track = (props) => {
  return (
    <S.PlaylistItem key={props.id} onClick={() => props.setActiveTrack(props)}>
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          {props.isLoading ? (
            <SkeletonTrackText />
          ) : (
            <div className="track__title-text">
              <S.TrackTitleLink href="#">
                {props.trackTitle}
                <S.TrackTitleSpan>{props.trackTitleSpan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          )}
        </S.TrackTitle>

        {props.isLoading ? (
          <SkeletonTrackAuthor />
        ) : (
          <S.TrackAuthor>
            <S.TrackAuthorLink href="#">{props.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        )}

        <S.TrackAlbum>
          {props.isLoading ? (
            <SkeletonTrackAuthor />
          ) : (
            <S.TrackAlbumLink href="#">{props.trackAlbum}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          {props.isLoading ? (
            <S.TrackTimeText className="track__time-text">0:00</S.TrackTimeText>
          ) : (
            <S.TrackTimeText className="track__time-text">
              {props.trackTime}
            </S.TrackTimeText>
          )}
        </div>
      </S.PlayListTrack>
    </S.PlaylistItem>
  );
};
