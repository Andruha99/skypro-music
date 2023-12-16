import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { SkeletonAudioPlayerText } from "../skeleton/styles";
import { ProgressBar } from "../progressBar/ProgressBar";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../store/actions/creators/creators";

export const AudioPlayer = (props) => {
  const playRef = useRef(null);
  const [isPlay, setIsPlay] = useState(true);
  const [isRepeat, setIsRepeat] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  console.log(props);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsPlay(true);
    dispatch(setCurrentTrack(props.track));
  }, [props.track.trackFile]);

  useEffect(() => {
    const updateTime = () => {
      if (!duration) {
        setCurrentTime(playRef.current.currentTime);
        setDuration(playRef.current.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };
    playRef.current.addEventListener("timeupdate", updateTime);
    return () => {
      playRef.current.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  useEffect(() => {
    playRef.current.volume = volume;
  }, [volume]);

  const handleStart = () => {
    setIsPlay(true);
    playRef.current.play();
  };

  const handleStop = () => {
    setIsPlay(false);
    playRef.current.pause();
  };

  const handleRepeat = () => {
    if (isRepeat) {
      setIsRepeat(false);
      playRef.current.loop = false;
    } else {
      setIsRepeat(true);
      playRef.current.loop = true;
    }
  };

  return (
    <S.Bar>
      <audio autoPlay ref={playRef} src={props.track.trackFile}></audio>
      <S.BarContent>
        <S.BarPlayerProgress>
          <ProgressBar
            playRef={playRef}
            duration={duration}
            currentTime={currentTime}
          />
        </S.BarPlayerProgress>
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
              <S.BtnRepeat onClick={handleRepeat}>
                {isRepeat ? (
                  <S.BtnRepeatSvgActive>
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </S.BtnRepeatSvgActive>
                ) : (
                  <S.BtnRepeatSvg alt="repeat">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </S.BtnRepeatSvg>
                )}
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
                <S.VolumeProgressLine
                  type="range"
                  name="range"
                  min={0}
                  step={0.1}
                  max={1}
                  onChange={(e) => setVolume(e.target.value)}
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.VolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
};
