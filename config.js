// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxKpBHiC0AittDqdDiMuY2gjPbkrieV-4ZmxyMq3wfw82hdz_F08NwjeivvRUWaMan8/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
