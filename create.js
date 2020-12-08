var div = document.createElement('div');
div.textContent = "Hello World"

var anchor = document.createElement('a');
anchor.textContent = "Google";
anchor.setAttribute('href', 'http://google.com')
// div.appendChild(anchor)

var body = document.querySelector('body');


body.appendChild(div);
body.appendChild(anchor);

