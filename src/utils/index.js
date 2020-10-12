export const identity = (data) => data;

export const transformCharacters = ({ results, info: { pages } }) => {
  const users = results.map(({ id, name, species, gender, status, image }) => ({
    id,
    name,
    species,
    gender,
    status,
    image,
  }));

  return {
    users,
    pages,
  };
};

export const transformCharacter = ({
  id,
  name,
  species,
  gender,
  status,
  image,
  episode,
}) => ({
  id,
  name,
  species,
  gender,
  status,
  image,
  episodeIds: episode.map((item) => item.match(/\d+$/g)[0]),
});
