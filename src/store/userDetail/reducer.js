import { combineReducers } from "redux";
import * as constants from "./constants";

const detailInitialState = {
  user: {
    id: "",
    name: "",
    species: "",
    gender: "",
    status: "",
    image: "",
    episodeIds: [],
  },
  loading: false,
  error: null,
};

const userDetailInfoReducer = (state = detailInitialState, action) => {
  switch (action.type) {
    case constants.FETCH_USER_DETAIL_REQUEST: {
      return {
        ...state,
        user: detailInitialState.user,
        loading: true,
        error: null,
      };
    }
    case constants.FETCH_USER_DETAIL_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }
    case constants.FETCH_USER_DETAIL_ERROR: {
      return {
        ...state,
        user: detailInitialState.user,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

const episodesInitialState = {
  episodes: [],
  loading: false,
  error: null,
};

const userDetailEpisodesReducer = (state = episodesInitialState, action) => {
  switch (action.type) {
    case constants.FETCH_USER_DETAIL_EPISODES_REQUEST: {
        return {
          ...state,
          episodes: [],
          loading: true,
          error: null,
        };
      }
      case constants.FETCH_USER_DETAIL_EPISODES_SUCCESS: {
        return {
          ...state,
          episodes: action.payload,
          loading: false,
        };
      }
      case constants.FETCH_USER_DETAIL_EPISODES_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      }
      case constants.RESET_USER_DETAIL_EPISODES: {
        return episodesInitialState
      }
    default: {
      return state;
    }
  }
};

export const userDetailReducer = combineReducers({
  [constants.USER_DETAIL_INFO_NS]: userDetailInfoReducer,
  [constants.USER_DETAIL_EPISODES_NS]: userDetailEpisodesReducer,
});
