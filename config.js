// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbzFe2MG_qXr5CeLKpUS_y-J7VyvYEc0t31aMT4cQVqVzvoicKV8LKw8b_LCFCCO5Dr8/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
