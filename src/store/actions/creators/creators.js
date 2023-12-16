import {
  SET_CURRENT_TRACK,
  SET_NEXT_TRACK,
  SET_PREV_TRACK,
} from "../types/types";

export const setCurrentTrack = (content) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    content,
  },
});

export const setPrevTrack = () => ({
  type: SET_PREV_TRACK,
});

export const setNextTrack = () => ({
  type: SET_NEXT_TRACK,
});
