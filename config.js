// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxXixklL8l1719bHLhi_RF4zLqmGs0xVBtDCqRY7Cy2HnSH5ClIhTOAXqZSbvCKxdH9/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
