// Write your package code here!
var token = 'VoA6HNw9EeS0bxJtO5t17w';

var script = document.createElement('script');

script.type = 'text/javascript';
script.src = 'https://jwpsrv.com/library/' + token + '.js';

var head = document.getElementsByTagName('head')[0];

head.appendChild(script);