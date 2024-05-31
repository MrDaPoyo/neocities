let raw = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=dapoyo"

// Parse the JSON string
const data = JSON.parse(raw);

// Get the <p> tags
const siteName = document.getElementById("site-name");
const createdAt = document.getElementById("created-at");
const updatedAt = document.getElementById("updated-at");

// Set the text content of the <p> tags
siteName.textContent = data.info.sitename;
createdAt.textContent = data.info.created_at;
updatedAt.textContent = data.info.last_updated;
