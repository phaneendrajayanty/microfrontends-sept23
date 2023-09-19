const element = document.querySelector(".recos");
const url = element.getAttribute("data-fragment");

console.log(element);
console.log(url);

window
      .fetch(url)
      .then(res => res.text())
      .then(html => {
        element.innerHTML = html;
      });