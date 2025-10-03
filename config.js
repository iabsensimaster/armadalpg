// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbw-s7zgRRZQLW1h62xAMlJ0b_H6sh8pdPmT3_JhANwsckxvcmYeu5pESMzaujeQ1hXW/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
