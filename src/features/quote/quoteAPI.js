// No api key required.
const query = "https://quotes.rest/qod?category=inspire";

export function fetchQuote() {
  return fetch(query);
}
