const api_key = process.env.REACT_APP_UNSPLASH_KEY;
const query = "https://api.unsplash.com/photos?client_id=" + api_key;

export function fetchImages() {
  return fetch(query);
}
