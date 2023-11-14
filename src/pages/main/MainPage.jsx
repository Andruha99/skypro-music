import React from "react";
import { useEffect, useState } from "react";
import { AudioPlayer } from "../../components/audioPlayer/AudioPlayer";
import { NavMenu } from "../../components/navMenu/NavMenu";
import { SideBar } from "../../components/sideBar/SideBar";
import { TrackList } from "../../components/trackList/TrackList";
import * as S from "../../style";
import { CATEGORIES } from "../../constants";
import { getTracks } from "../../api";
import { ErrorMes } from "../../components/error/ErrorMessage";

export const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [activeTrack, setActiveTrack] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getTracks()
      .then((response) => {
        setTracks(response);
        setIsLoading(!isLoading);
      })
      .catch(() => {
        setErrorMessage("Какие-то проблемы с сервером");
        setIsLoading(!isLoading);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          {errorMessage ? (
            <ErrorMes />
          ) : (
            <TrackList
              tracks={tracks}
              isLoading={isLoading}
              setActiveTrack={setActiveTrack}
            />
          )}

          <SideBar isLoading={isLoading} categories={CATEGORIES} />
        </S.Main>
        {!activeTrack ? (
          ""
        ) : (
          <AudioPlayer track={activeTrack} isLoading={isLoading} />
        )}

        <footer></footer>
      </S.Container>
    </S.Wrapper>
  );
};
