import React, { useState } from "react";
import { Track } from "../track/Track";
import { FilterByAuthor } from "../filterByAuthor/FilterByAuthor";
import { FilterByYear } from "../filterByYear/FilterByYear";
import { FilterByGenre } from "../filterByGenre/FilterByGenre";
import * as S from "./styles";

import { Skeleton } from "../skeleton/Skeleton";

export const TrackList = (props) => {
  console.log(props);
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
          {props.isLoading ? (
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            props.tracks.map((track) => {
              return (
                <Track
                  key={track.id}
                  trackTitle={track.name}
                  author={track.author}
                  trackAlbum={track.album}
                  trackTime={track.duration_in_seconds}
                  trackTitleSpan=""
                  trackFile={track.track_file}
                  isLoading={props.isLoading}
                  setActiveTrack={props.setActiveTrack}
                  trackList={props.tracks}
                  trackId={track.id}
                />
              );
            })
          )}
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
};
