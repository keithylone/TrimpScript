
setTimeout(startup, 1000);

function startup() {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', 'http://keithylone.github.io/TrimpScript/TrimpScriptLoader.js');
    document.head.appendChild(js);
}
