// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbxQqkXVu3pFzQTP6lmEN7jw-XbBYqV6NDBJqOxjpYWLXZC6ysTfZ1019jWymhK1ZXGL/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
