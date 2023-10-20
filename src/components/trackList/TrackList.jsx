import React from "react";
import "./trackList.css";
import { Track } from "../track/Track";

export const TrackList = () => {
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
        <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
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
          />

          <Track
            trackTitle="Elektro"
            author="Dynoro, Outwork, Mr. Gee"
            trackAlbum="Elektro"
            trackTime="2:22"
            trackTitleSpan=""
          />

          <Track
            trackTitle="I’m Fire"
            author="Ali Bakgor"
            trackAlbum="I’m Fire"
            trackTime="2:22"
            trackTitleSpan=""
          />

          <Track
            trackTitle="Non Stop"
            author="Стоункат, Psychopath"
            trackAlbum="Non Stop"
            trackTime="4:12"
            trackTitleSpan="(Remix)"
          />

          <Track
            trackTitle="Run Run"
            author="Jaded, Will Clarke, AR/CO"
            trackAlbum="Run Run"
            trackTime="2:54"
            trackTitleSpan="(feat. AR/CO)"
          />

          <Track
            trackTitle="Eyes on Fire"
            author="Blue Foundation, Zeds Dead"
            trackAlbum="Eyes on Fire"
            trackTime="5:20"
            trackTitleSpan="(Zeds Dead Remix)"
          />

          <Track
            trackTitle="Mucho Bien"
            author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
            trackAlbum="Mucho Bien"
            trackTime="3:41"
            trackTitleSpan="(Hi Profile Remix)"
          />

          <Track
            trackTitle="Mucho Bien"
            author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
            trackAlbum="Mucho Bien"
            trackTime="3:41"
            trackTitleSpan="(Hi Profile Remix)"
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
          />

          <Track
            trackTitle="Knives n Cherries"
            author="minthaze"
            trackAlbum="Captivating"
            trackTime="1:48"
            trackTitleSpan=""
          />

          <Track
            trackTitle="How Deep Is Your Love"
            author="Calvin Harris, Disciples"
            trackAlbum="How Deep Is Your Love"
            trackTime="3:32"
            trackTitleSpan=""
          />

          <Track
            trackTitle="Morena"
            author="Tom Boxer"
            trackAlbum="Soundz Made in Romania"
            trackTime="3:36"
            trackTitleSpan=""
          />
        </div>
      </div>
    </div>
  );
};
