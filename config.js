// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbwi-dygNnaD6CO2ZxGuR_ph-sINi15nlsL5Pfd7F27iVmnfGT0VAxPYVlX2dZPnL7WW/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
