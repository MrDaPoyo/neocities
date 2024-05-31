const url = "https://weirdscifi.ratiosemper.com/neocities.php?sitename=dapoyo";
const views = document.getElementById("views");
const updatedAt = document.getElementById("last-updated");
fetch(url)
 .then(response => response.json())
 .then(data => {
    console.log(data);
    
    views.innerHTML = data.info.views;
    updatedAt.innerHTML = data.info.last_updated;
  })
 .catch(error => console.error("Error:", error));