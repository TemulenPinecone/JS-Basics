function addBoxFunc() {
  let divs =
    document.getElementById("containerId").innerHTML +
    `<div class="boxClass"></div>`;
  document.getElementById("containerId").innerHTML = divs;
}
