import React from "react";

import "./CharacterDetail.scss";
import { connect } from "react-redux";
import {
  fetchUserDetail,
  selectUserDetailInfoSlice,
} from "../../store/userDetail";
import { CharacterDetailEpisodes } from "./CharacterEpisodes";

class CharacterDetailComponent extends React.PureComponent {
  state = {
    expand: false,
  };

  componentDidMount() {
    this.props.fetchUserDetail(this.props.id);
  }

  handleClick = () => {
    this.setState({ expand: true });
  };

  render() {
    const { user, loading, error } = this.props;
    const { image, name, gender, status, species } = user;

    if (loading) {
      return <div>Please, wait...</div>;
    }

    if (error) {
      return <div>Some error occured. Please, try later</div>;
    }

    return (
      <>
        <div className="UserDetail">
          <img src={image} alt={name} className="UserDetail__Image" />
          <div className="UserDetail__Info">
            <p>
              <b>Name:</b> {name}
            </p>
            <p>
              <b>Gender:</b> {gender}
            </p>
            <p>
              <b>Status:</b> {status}
            </p>
            <p>
              <b>Species:</b> {species}
            </p>
          </div>
        </div>
        <div className="UserDetail__Episodes">
          <button
            onClick={this.handleClick}
            disabled={this.state.expand}
            className="UserDetail__Button"
          >
            Show list of episodes
          </button>
          {this.state.expand && <CharacterDetailEpisodes />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...selectUserDetailInfoSlice(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetail: (id) => dispatch(fetchUserDetail(id)),
});

export const CharacterDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailComponent);
