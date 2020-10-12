import {
  USER_DETAIL_NS,
  USER_DETAIL_INFO_NS,
  USER_DETAIL_EPISODES_NS,
} from "./constants";
import { createSelector } from "reselect";

export const selectUserDetail = (state) => state[USER_DETAIL_NS];

export const selectUserDetailInfoSlice = createSelector(
  selectUserDetail,
  (state) => state[USER_DETAIL_INFO_NS]
);

export const selectUserDetailEpisodesSlice = createSelector(
  selectUserDetail,
  (state) => state[USER_DETAIL_EPISODES_NS]
);

export const selectUserDetailInfo = createSelector(
  selectUserDetailInfoSlice,
  (state) => state.user
);

export const selectUserDetailInfoLoading = createSelector(
  selectUserDetailInfoSlice,
  (state) => state.loading
);

export const selectUserDetailInfoError = createSelector(
  selectUserDetailInfoSlice,
  (state) => state.error
);

export const selectUserDetailEpisodes = createSelector(
  selectUserDetailEpisodesSlice,
  (state) => state.episodes
);
