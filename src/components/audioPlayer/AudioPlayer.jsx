import React from "react";
import * as S from "./styles";

export const AudioPlayer = (props) => {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.BtnPrev>
                <S.BtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BtnPrevSvg>
              </S.BtnPrev>
              <S.BtnPlay className="_btn">
                <S.BtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.BtnPlaySvg>
              </S.BtnPlay>
              <S.BtnNext>
                <S.BtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BtnNextSvg>
              </S.BtnNext>
              <S.BtnRepeat className="_btn-icon">
                <S.BtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BtnRepeatSvg>
              </S.BtnRepeat>
              <S.BtnShuffle className="_btn-icon">
                <S.ShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.ShuffleSvg>
              </S.BtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  {props.isLoading ? (
                    <div className="skeleton-audioplayer-text skeleton"></div>
                  ) : (
                    <S.TrackPlayAuthorLink href="http://">
                      Ты та...
                    </S.TrackPlayAuthorLink>
                  )}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {props.isLoading ? (
                    <div className="skeleton-audioplayer-text skeleton"></div>
                  ) : (
                    <S.TrackPlayAlbumLink href="http://">
                      Баста
                    </S.TrackPlayAlbumLink>
                  )}
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="_btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.VolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <S.VolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.VolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
