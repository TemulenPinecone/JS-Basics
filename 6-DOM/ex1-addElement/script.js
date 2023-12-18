function addBoxFunc() {
  let divs =
    document.getElementById("containerId").innerHTML +
    `<div class="boxClass"><p></p></div>`;
  document.getElementById("containerId").innerHTML = divs;
}
