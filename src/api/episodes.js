import {BASE_URL} from "./constants";

export const fetchEpisodes = async (episodes) => {
    const episodesParam = episodes.join(",");
    const fetchedData = await fetch(`${BASE_URL}episode/${episodesParam}`);

    return fetchedData.json();
}