// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbzQf18CyWB8tTo46Wc3uYzrzsEXC4VUTx4v6zUnYZe6kerPvoiEKQE2SGsHp6W8AKSc/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
