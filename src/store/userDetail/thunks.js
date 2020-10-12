import { fetchCharacter } from "../../api/characters";
import { transformCharacter } from "../../utils";
import {
  fetchUserDetailError,
  fetchUserDetailSuccess,
  fetchUserDetailRequest,
  fetchUserDetailEpisodesRequest,
  fetchUserDetailEpisodesError,
  fetchUserDetailEpisodesSuccess,
} from "./actions";
import { selectUserDetailInfo } from "./selectors";
import { fetchEpisodes } from "../../api/episodes";

export const fetchUserDetail = (id) => async (dispatch) => {
  dispatch(fetchUserDetailRequest());

  try {
    const userData = await fetchCharacter(id);
    const user = transformCharacter(userData);

    dispatch(fetchUserDetailSuccess(user));
  } catch (error) {
    dispatch(fetchUserDetailError(error));
  }
};

export const fetchUserDetailEpisodes = () => async (dispatch, getState) => {
  dispatch(fetchUserDetailEpisodesRequest());
  const state = getState();
  const { episodeIds } = selectUserDetailInfo(state);

  try {
    const episodes = await fetchEpisodes(episodeIds);
    const transformed = Array.isArray(episodes) ? episodes : [episodes];
    dispatch(fetchUserDetailEpisodesSuccess(transformed));
  } catch (error) {
    dispatch(fetchUserDetailEpisodesError(error));
  }
};
