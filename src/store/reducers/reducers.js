import {
  SET_CURRENT_TRACK,
  SET_PREV_TRACK,
  SET_NEXT_TRACK,
  TOGGLE_SHUFFLED,
} from "../actions/types/types";

const initialState = {
  currentTrack: {},
  trackList: [],
  isShuffled: false,
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      const { content, trackList } = action.payload;

      return {
        ...state,
        currentTrack: { content },
        trackList: trackList,
      };
    }

    case SET_PREV_TRACK: {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.trackList;

      const trackId = playlist.findIndex(
        (track) => track.id === state.currentTrack.content.id
      );

      const content = playlist[trackId - 1];

      if (!content) {
        return state;
      }
      return {
        ...state,
        currentTrack: { content },
      };
    }

    case SET_NEXT_TRACK: {
      const playlist = state.isShuffled
        ? state.shuffledPlaylist
        : state.trackList;

      const trackId = playlist.findIndex(
        (track) => track.id === state.currentTrack.content.id
      );

      console.log(trackId);
      const content = playlist[trackId + 1];

      if (!content) {
        return state;
      }

      return {
        ...state,
        currentTrack: { content },
      };
    }

    case TOGGLE_SHUFFLED: {
      return {
        ...state,
        isShuffled: !state.isShuffled,
        shuffledPlaylist: [...state.trackList].sort(() => 0.5 - Math.random()),
      };
    }

    default:
      return state;
  }
}
