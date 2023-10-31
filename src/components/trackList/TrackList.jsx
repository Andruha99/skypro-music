import React, { useState } from "react";
import { Track } from "../track/Track";
import { FilterByAuthor } from "../filterByAuthor/FilterByAuthor";
import { FilterByYear } from "../filterByYear/FilterByYear";
import { FilterByGenre } from "../filterByGenre/FilterByGenre";
import * as S from "./styles";

export const TrackList = (props) => {
  const [filterBy, setFilterBy] = useState("");

  const handleFilterByAuthor = () => {
    if (filterBy !== "author") {
      setFilterBy("author");
    } else {
      setFilterBy("");
    }
  };

  const handleFilterByYear = () => {
    if (filterBy !== "year") {
      setFilterBy("year");
    } else {
      setFilterBy("");
    }
  };

  const handleFilterByGenre = () => {
    if (filterBy !== "genre") {
      setFilterBy("genre");
    } else {
      setFilterBy("");
    }
  };

  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.FilterWrap>
          {filterBy === "author" ? (
            <S.FilterActive onClick={handleFilterByAuthor}>
              исполнителю
            </S.FilterActive>
          ) : (
            <S.FilterButton onClick={handleFilterByAuthor}>
              исполнителю
            </S.FilterButton>
          )}
          {filterBy === "author" ? <FilterByAuthor /> : ""}
        </S.FilterWrap>

        <S.FilterWrap>
          {filterBy === "year" ? (
            <S.FilterActive onClick={handleFilterByYear}>
              году выпуска
            </S.FilterActive>
          ) : (
            <S.FilterButton onClick={handleFilterByYear}>
              году выпуска
            </S.FilterButton>
          )}
          {filterBy === "year" ? <FilterByYear /> : ""}
        </S.FilterWrap>

        <S.FilterWrap>
          {filterBy === "genre" ? (
            <S.FilterActive onClick={handleFilterByGenre}>жанру</S.FilterActive>
          ) : (
            <S.FilterButton onClick={handleFilterByGenre}>жанру</S.FilterButton>
          )}
          {filterBy === "genre" ? <FilterByGenre /> : ""}
        </S.FilterWrap>
      </S.CenterBlockFilter>
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.Col1>Трек</S.Col1>
          <S.Col2>ИСПОЛНИТЕЛЬ</S.Col2>
          <S.Col3>АЛЬБОМ</S.Col3>
          <S.Col4>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.Col4>
        </S.ContentTitle>
        <S.ContentPlaylist>
          <Track
            trackTitle="Guilt"
            author="Nero"
            trackAlbum="Welcome Reality"
            trackTime="4:44"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Elektro"
            author="Dynoro, Outwork, Mr. Gee"
            trackAlbum="Elektro"
            trackTime="2:22"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="I’m Fire"
            author="Ali Bakgor"
            trackAlbum="I’m Fire"
            trackTime="2:22"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Non Stop"
            author="Стоункат, Psychopath"
            trackAlbum="Non Stop"
            trackTime="4:12"
            trackTitleSpan="(Remix)"
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Run Run"
            author="Jaded, Will Clarke, AR/CO"
            trackAlbum="Run Run"
            trackTime="2:54"
            trackTitleSpan="(feat. AR/CO)"
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Eyes on Fire"
            author="Blue Foundation, Zeds Dead"
            trackAlbum="Eyes on Fire"
            trackTime="5:20"
            trackTitleSpan="(Zeds Dead Remix)"
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Mucho Bien"
            author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
            trackAlbum="Mucho Bien"
            trackTime="3:41"
            trackTitleSpan="(Hi Profile Remix)"
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Mucho Bien"
            author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
            trackAlbum="Mucho Bien"
            trackTime="3:41"
            trackTitleSpan="(Hi Profile Remix)"
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="How Deep Is Your Love"
            author="Calvin Harris, Disciples"
            trackAlbum="How Deep Is Your Love"
            trackTime="3:32"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />

          <Track
            trackTitle="Morena"
            author="Tom Boxer"
            trackAlbum="Soundz Made in Romania"
            trackTime="3:36"
            trackTitleSpan=""
            isLoading={props.isLoading}
          />
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
};
