const url = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=dapoyo";

fetch(url)
 .then(response => response.json())
 .then(data => {
    console.log(data);
    const createdAt = document.getElementById("created-at");
    const updatedAt = document.getElementById("updated-at");
    createdAt.innerHTML = data.info.created_at;
    updatedAt.innerHTML = data.info.last_updated;
  })
 .catch(error => console.error("Error:", error));