import { BASE_URL } from "./constants";

export const fetchCharacters = async (page) => {
  const fetchedData = await fetch(`${BASE_URL}character/?page=${page}`);
  return fetchedData.json();
};


export const fetchCharacter = async (id) => {
  const fetchedData = await fetch(`${BASE_URL}character/${id}`);
  return fetchedData.json();
};
