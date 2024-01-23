import {
  SET_CURRENT_TRACK,
  SET_PREV_TRACK,
  SET_NEXT_TRACK,
} from "../actions/types/types";

const initialState = {
  currentTrack: {},
  trackList: [],
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
      // const trackId = state.content.trackList.findIndex(
      //   (track) => track.id === state.content.trackId
      // );
      // const content = state.trackList[trackId - 1];
      // if (!content) {
      //   return state;
      // }
      // return {
      //   ...state,
      //   currentTrack: { content },
      // };
    }

    case SET_NEXT_TRACK: {
      const trackId = state.player.currentTrack.content.trackList.findIndex(
        (track) => track.id === state.player.currentTrack.content.trackId
      );

      const content = state.player.currentTrack.content.trackList[trackId + 1];

      if (!content) {
        return state;
      }

      return {
        ...state,
        currentTrack: { content },
      };
    }

    default:
      return state;
  }
}
