import * as constants from "./constants";

export const fetchUserDetailRequest = () => ({
  type: constants.FETCH_USER_DETAIL_REQUEST,
});

export const fetchUserDetailSuccess = (user) => ({
  type: constants.FETCH_USER_DETAIL_SUCCESS,
  payload: user,
});

export const fetchUserDetailError = (error) => ({
  type: constants.FETCH_USER_DETAIL_ERROR,
  payload: error,
});

export const fetchUserDetailEpisodesRequest = () => ({
  type: constants.FETCH_USER_DETAIL_EPISODES_REQUEST,
});

export const fetchUserDetailEpisodesSuccess = (episodes) => ({
  type: constants.FETCH_USER_DETAIL_EPISODES_SUCCESS,
  payload: episodes,
});

export const fetchUserDetailEpisodesError = (error) => ({
  type: constants.FETCH_USER_DETAIL_EPISODES_ERROR,
  payload: error,
});

export const resetUserDetailEpisodes = () => ({
  type: constants.RESET_USER_DETAIL_EPISODES,
});
