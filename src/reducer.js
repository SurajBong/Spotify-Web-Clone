export const initialState = {
  user: null,
  playlists: null,
  playing: false,
  item: null,
  discover_weekly: null,
  token: null,
  spotify: null,
  top_artists: null,
  // token:
  //   "BQAQdW8ZYAHPIyJYm6j5nIoiwR_41S7z6yQCJWGtLZ9Yx4wyL8vGkbZc_py0xsOt5m7DBkNn7lWNoZI14VCj13wLCPn4WAo0z_0h8tXV1JcMH4Cd7H-tzxe2jhMMw3FwFovC8eDr3Jh6GPqzUDToIh6s0SMIFiRxcYX957_RNDjhasQVhtGL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
