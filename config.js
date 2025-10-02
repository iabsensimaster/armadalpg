// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxPG5ubjTtk_4PFf9V2mxFshORdhlWHYytt3xKbg8KxL-E9aJw65vtRg1PvQtXsaIQY/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
