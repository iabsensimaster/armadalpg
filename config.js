// config.js

const API_ENDPOINT = "https://script.google.com/macros/s/AKfycbyBQTtFdby1w-hi7oq856_0vDuDDOKyVu4X0fzdsNoGQ-mgoj7l1Ma0_gt4ZJYHWP0/exec";

function getAPIUrl(action) {
  const id = localStorage.getItem("id_spreadsheet");
  return `${API_ENDPOINT}?action=${action}&id_spreadsheet=${id}`;
}
