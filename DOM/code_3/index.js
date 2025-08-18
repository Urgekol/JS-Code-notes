const head = document.querySelector("#firstHeading");
const output = document.querySelector("#output");

let headIDName = head.id;
let headIDATT = head.getAttribute('id');

let headClassName = head.className;
let headClassATT = head.getAttribute('class');

output.innerHTML = `headIDName: ${headIDName} <br>` +
                   `headIDATT: ${headIDATT} <br>` +
                   `headClassName is: ${headClassName} <br>` +
                   `headClassATT: ${headClassATT} <br>`;

head.setAttribute('class', 'test');

headClassName = head.className;
headClassATT = head.getAttribute('class');

output.innerHTML += `<br><hr><br>After the class name changed:<br>` +
                    `headClassName is: ${headClassName} <br>` +
                    `headClassATT: ${headClassATT} <br>`;