import React from "react";
import "../../App.css";
import * as S from "./styles";

export const Track = (props) => {
  return (
    <S.PlaylistItem>
      <S.PlayListTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          {props.isLoading ? (
            <div className="skeleton-track-text skeleton"></div>
          ) : (
            <div className="track__title-text">
              <S.TrackTitleLink href="http://">
                {props.trackTitle}
                <S.TrackTitleSpan>{props.trackTitleSpan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          )}
        </S.TrackTitle>

        {props.isLoading ? (
          <div className="skeleton-track-author skeleton"></div>
        ) : (
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{props.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        )}

        <S.TrackAlbum>
          {props.isLoading ? (
            <div className="skeleton-track-author skeleton"></div>
          ) : (
            <S.TrackAlbumLink href="http://">
              {props.trackAlbum}
            </S.TrackAlbumLink>
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
