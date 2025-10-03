// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbyBAA3FigMLyAcv2LhXOTn47ttVL_ZmnhVXKKW3eScZ9ds2mX1Laq_hdgOYPf-Zrl2d/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
