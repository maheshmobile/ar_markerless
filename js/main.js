var roset = document.getElementById('roset'),
    heading_el = document.getElementById('heading'),
    webkit_heading_el = document.getElementById('webkit-heading'),
    absolute_el = document.getElementById('absolute'),
    accuracy_el = document.getElementById('accuracy')

function orientationHandler(ev) {
    data = {
        heading: ev.alpha.toFixed(0),
        webkitCompassHeading: ev.webkitCompassHeading,
        absolute: ev.absolute,
        webkitCompassAccuracy: ev.webkitCompassAccuracy
    }
    requestAnimationFrame(showAlpha(data))
}

function showAlpha(data) {
    roset.style.transform = 'rotate(' + data.heading + 'deg)'
    heading_el.innerHTML = data.heading
    webkit_heading_el.innerHTML = data.webkitCompassHeading
    absolute_el.innerHTML = data.absolute
    accuracy_el.innerHTML = data.webkitCompassAccuracy
}

window.addEventListener('deviceorientation', orientationHandler, false)

/*
 * Register service worker
 * (Does nothing at present. Is needed to display Chrome install web app banner.)
 */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('../dist/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
