import React, { useState } from "react";
import "./trackList.css";
import { Track } from "../track/Track";
import { FilterByAuthor } from "../filterByAuthor/FilterByAuthor";
import { FilterByYear } from "../filterByYear/FilterByYear";
import { FilterByGenre } from "../filterByGenre/FilterByGenre";

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
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__wrap">
          <div
            className={
              filterBy === "author"
                ? "filter__button button-genre _btn-text filter_active"
                : "filter__button button-genre _btn-text"
            }
            onClick={handleFilterByAuthor}
          >
            исполнителю
          </div>
          {filterBy === "author" ? <FilterByAuthor /> : ""}
        </div>

        <div className="filter__wrap">
          <div
            className={
              filterBy === "year"
                ? "filter__button button-genre _btn-text filter_active"
                : "filter__button button-genre _btn-text"
            }
            onClick={handleFilterByYear}
          >
            году выпуска
          </div>
          {filterBy === "year" ? <FilterByYear /> : ""}
        </div>

        <div className="filter__wrap">
          <div
            className={
              filterBy === "genre"
                ? "filter__button button-genre _btn-text filter_active"
                : "filter__button button-genre _btn-text"
            }
            onClick={handleFilterByGenre}
          >
            жанру
          </div>
          {filterBy === "genre" ? <FilterByGenre /> : ""}
        </div>
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
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
        </div>
      </div>
    </div>
  );
};
