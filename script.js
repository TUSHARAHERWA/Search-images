let inputText = document.querySelector(".inputText");
let searchButton = document.querySelector(".searchButton");
let insideContainer = document.querySelector(".insideContainer");
let imgContainer = document.querySelector(".imgContainer");
let btn = document.querySelector(".btn");
let page = 1;
let mainValue = "dog";
async function fetchData(query) {
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=bHuwiIph9_YGE34elCfP6T2dOAi7TYCujMETFzozbbI&per_page=10`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  if (page == 1) {
    insideContainer.innerHTML = "";
  }
  data.results.forEach((data) => {
    let copyNode = imgContainer.cloneNode(true);
    copyNode.innerHTML = `<img src = "${data.urls.full}"> `;
    insideContainer.append(copyNode);
  });
}

searchButton.addEventListener("click", () => {
  if (page > 1) {
    page = 1;
  }
  let Value = inputText.value;
  mainValue = Value;
  fetchData(Value);
});

btn.addEventListener("click", () => {
  page++;

  fetchData(mainValue);
});

fetchData("dog");
