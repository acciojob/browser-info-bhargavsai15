//your JS code here. If required.
const browser = document.getElementById('browser');
const version = document.getElementById('version');
window.addEventListener('load', () => {
  browser.innerText = navigator.appName;
  version.innerText = navigator.appVersion;
})