
const head = document.getElementById("firstHeading");
// Returns a single Element object or null if no element with the specified ID exists.

const output = document.getElementById("output");
// Returns a live HTMLCollection of elements that have the specified class name(s).
// If no matching elements are found, it returns an empty HTMLCollection.

let headIDName = head.id;
let headIDATT = head.getAttribute('id');

let headClassName = head.className;
let headClassATT = head.getAttribute('class');

output.innerHTML = `headIDName: ${headIDName} <br> ` +
                   `headIDATT: ${headIDATT} <br>` +
                   `headClassName is: ${headClassName} <br>` +
                   `headClassATT: ${headClassATT} <br>`;

head.setAttribute('class', 'test');

headClassName = head.className;
headClassATT = head.getAttribute('class');

output.innerHTML += `<br><hr><br>After the class name changed:<br>` +
                    `headClassName is: ${headClassName} <br>` +
                    `headClassATT: ${headClassATT} <br>`;