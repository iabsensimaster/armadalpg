// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbzqt5B4KsaCAaYHx7rND9nJABCNrXEYAkaKq3wiZNcRWRt4lIv6WuhcDsS9eUPimfCO/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
