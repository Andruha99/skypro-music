import React from "react";
import "./track.css";
import "../../App.css";

export const Track = (props) => {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          {props.isLoading ? (
            <div className="skeleton-track-text skeleton"></div>
          ) : (
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {props.trackTitle}
                <span className="track__title-span">
                  {props.trackTitleSpan}
                </span>
              </a>
            </div>
          )}
        </div>

        {props.isLoading ? (
          <div className="skeleton-track-author skeleton"></div>
        ) : (
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {props.author}
            </a>
          </div>
        )}

        <div className="track__album">
          {props.isLoading ? (
            <div className="skeleton-track-author skeleton"></div>
          ) : (
            <a className="track__album-link" href="http://">
              {props.trackAlbum}
            </a>
          )}
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          {props.isLoading ? (
            <span className="track__time-text">0:00</span>
          ) : (
            <span className="track__time-text">{props.trackTime}</span>
          )}
        </div>
      </div>
    </div>
  );
};
