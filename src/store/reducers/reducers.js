import { SET_CURRENT_TRACK, SET_PREV_TRACK } from "../actions/types/types";

const initialState = {
  currentTrack: {},
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      const { content } = action.payload;

      return {
        ...state,
        currentTrack: { content },
      };
    }

    // case SET_PREV_TRACK: {
    //   return {
    //     ...state,
    //     currentTrack: { content },
    //   };
    // }

    default:
      return state;
  }
}
