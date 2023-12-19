// function addBoxFunc() {
//   let divs =
//     document.getElementById("containerId").innerHTML +
//     `<div class="boxClass"><p></p></div>`;
//   document.getElementById("containerId").innerHTML = divs;
// }
function addBoxFunc() {
  document.getElementById("containerId").innerHTML =
    document.getElementById("containerId").innerHTML +
    `<div class="boxClass"><p id="count"></p></div>`;
  // document.getElementById("count").innerText++;
  // document.getElementById("count").innerText + 1;
}
