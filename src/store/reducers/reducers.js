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
      const trackId = state.trackList.findIndex(
        (track) => track.id === state.currentTrack.content.id
      );

      const content = state.trackList[trackId - 1];

      // const content = state.isShuffled
      //   ? [...state.trackList].sort(() => 0.5 - Math.random())
      //   : state.trackList[trackId - 1];

      if (!content) {
        return state;
      }
      return {
        ...state,
        currentTrack: { content },
      };
    }

    case SET_NEXT_TRACK: {
      const trackId = state.trackList.findIndex(
        (track) => track.id === state.currentTrack.content.id
      );

      console.log(trackId);
      const content = state.trackList[trackId + 1];

      // const content = state.isShuffled
      //   ? [...state.trackList].sort(() => 0.5 - Math.random())
      //   : state.trackList[trackId - 1];
      console.log(content);

      if (!content) {
        return state;
      }

      return {
        ...state,
        currentTrack: { content },
      };
    }

    case TOGGLE_SHUFFLED: {
      // state.isShuffled = !state.isShuffled;
      return {
        ...state,
        isShuffled: !state.isShuffled,
      };
    }

    default:
      return state;
  }
}
