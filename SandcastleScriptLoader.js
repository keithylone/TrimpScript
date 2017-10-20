// Code from Xenko
// http://xenko.github.io/BeachBall/BeachBall.js

setTimeout(startup, 1000);

function startup() {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', 'http://keithylone.github.io/SandcastleScript/SandcastleScript.js');
    document.head.appendChild(js);
}
