import {
  SET_CURRENT_TRACK,
  SET_NEXT_TRACK,
  SET_PREV_TRACK,
  TOGGLE_SHUFFLED,
} from "../types/types";

export const setCurrentTrack = (content, trackList) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    content,
    trackList,
  },
});

export const setPrevTrack = () => ({
  type: SET_PREV_TRACK,
});

export const setNextTrack = () => ({
  type: SET_NEXT_TRACK,
});

export const toggleShuffle = () => ({
  type: TOGGLE_SHUFFLED,
});
