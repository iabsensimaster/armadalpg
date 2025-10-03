// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxw5_CRDkyCfFDGK5j2eBgArdwPj4Kkdlv-0A6J8sSi8Jm88P5FIMDyz03gl8IM_gOr/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
