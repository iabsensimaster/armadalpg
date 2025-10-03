// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycby4MQFa04G1EkApS1uKx6Hn_4Pc73dkGAj97YkK_7CWfDsO2N40qlhmjb1g3zCKh6ny/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
