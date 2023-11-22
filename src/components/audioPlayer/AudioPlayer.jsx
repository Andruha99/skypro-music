import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { SkeletonAudioPlayerText } from "../skeleton/styles";

export const AudioPlayer = (props) => {
  const playRef = useRef(null);
  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    setIsPlay(true);
  }, [props.track.trackFile]);

  const handleStart = () => {
    console.log(playRef);
    setIsPlay(true);
    playRef.current.play();
  };

  const handleStop = () => {
    setIsPlay(false);
    playRef.current.pause();
  };
  return (
    <S.Bar>
      <audio
        autoPlay
        controls
        ref={playRef}
        src={props.track.trackFile}
      ></audio>
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
              {isPlay ? (
                <S.BtnPlay onClick={handleStop}>
                  <S.BtnPlaySvg alt="pause">
                    <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                  </S.BtnPlaySvg>
                </S.BtnPlay>
              ) : (
                <S.BtnPlay onClick={handleStart}>
                  <S.BtnPlaySvg alt="play">
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </S.BtnPlaySvg>
                </S.BtnPlay>
              )}
              <S.BtnNext>
                <S.BtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BtnNextSvg>
              </S.BtnNext>
              <S.BtnRepeat>
                <S.BtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BtnRepeatSvg>
              </S.BtnRepeat>
              <S.BtnShuffle>
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
                    <SkeletonAudioPlayerText />
                  ) : (
                    <S.TrackPlayAuthorLink href="http://">
                      {props.track.trackTitle}
                    </S.TrackPlayAuthorLink>
                  )}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {props.isLoading ? (
                    <SkeletonAudioPlayerText />
                  ) : (
                    <S.TrackPlayAlbumLink href="http://">
                      {props.track.author}
                    </S.TrackPlayAlbumLink>
                  )}
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike>
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
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.VolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
