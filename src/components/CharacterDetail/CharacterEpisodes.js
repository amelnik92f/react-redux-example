import React from "react";

import { connect } from "react-redux";
import {
  selectUserDetailEpisodesSlice,
  fetchUserDetailEpisodes,
  resetUserDetailEpisodes,
} from "../../store/userDetail";

import "./CharacterEpisodes.scss";

class CharacterDetailEpisodesComponent extends React.PureComponent {
  componentDidMount() {
    this.props.fetchUserEpisodes();
  }

  componentWillUnmount() {
    this.props.resetEpisodes();
  }

  render() {
    const { episodes, loading, error } = this.props;

    if (loading) {
      return <div>Please, wait...</div>;
    }

    if (error) {
      return <div>Error while fetching episodes. Please, try later</div>;
    }

    return (
      <ul className="EpisodeList">
        {episodes.map(({ id, name, air_date, episode }) => (
          <li className="EpisodeList__Item" key={id}>
            <p>
              <b>
                {episode} - {name}
              </b>
            </p>
            <i>{air_date}</i>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  ...selectUserDetailEpisodesSlice(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserEpisodes: () => dispatch(fetchUserDetailEpisodes()),
  resetEpisodes: () => dispatch(resetUserDetailEpisodes()),
});

export const CharacterDetailEpisodes = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailEpisodesComponent);
