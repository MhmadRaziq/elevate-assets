// var baseURI = "https://manychat.com";
// var pixelPath = "/analytics/png";
// var whoamiPath = "/analytics/whoami";

// var lsStoredClientId = localStorage.getItem("mchtClientId") || "";
// var cookieStoredClientId = document.cookie.replace(
//   /(?:(?:^|.*;\s*)mchtClientId\s*\=\s*([^;]*).*$)|^.*$/,
//   "$1"
// );
// var cookieLegacyClientId = document.cookie.replace(
//   /(?:(?:^|.*;\s*)clientId\s*\=\s*([^;]*).*$)|^.*$/,
//   "$1"
// );
// var rootDomain = document.location.hostname.split(".").slice(-2).join(".");
// var cookieAppendix = ";domain=." + rootDomain + ";Max-Age=" + 3600 * 24 * 365;
// if (lsStoredClientId && !cookieStoredClientId)
//   document.cookie = "mchtClientId=" + lsStoredClientId + cookieAppendix;
// if (!lsStoredClientId && cookieStoredClientId)
//   localStorage.setItem("mchtClientId", cookieStoredClientId);
// var clientId = cookieStoredClientId || lsStoredClientId;

// var referer = document.referrer;
// var url = new URL(baseURI + pixelPath);
// url.searchParams.set("visitorId", clientId);
// url.searchParams.set("legacyClientId", cookieLegacyClientId);
// url.searchParams.set("location", location.href);
// url.searchParams.set("referer", referer);
// url.searchParams.set("ts", new Date().getTime());

// var img = document.createElement("img");
// if (!clientId) {
//   img.onload = function () {
//     if (clientId) return; // Because it can be saved already
//     var xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", function () {
//       clientId = this.responseText;
//       document.cookie = "mchtClientId=" + clientId + cookieAppendix;
//       localStorage.setItem("mchtClientId", clientId);
//     });
//     var whoamiURI = new URL(baseURI + whoamiPath);
//     whoamiURI.searchParams.set("location", location.href);
//     whoamiURI.searchParams.set("referer", referer);
//     whoamiURI.searchParams.set("legacyClientId", cookieLegacyClientId);
//     whoamiURI.searchParams.set("ts", new Date().getTime());
//     xhr.open("GET", whoamiURI.toString(), true);
//     xhr.withCredentials = true;
//     xhr.send(null);
//   };
// }
// img.src = url.toString();

// var currentPath = location.href;
// var watcher = function () {
//   if (location.href !== currentPath) {
//     currentPath = location.href;
//     url.searchParams.set("visitorId", clientId);
//     url.searchParams.set("location", currentPath);
//     url.searchParams.set("ts", new Date().getTime());
//     url.searchParams.set(
//       "legacyClientId",
//       document.cookie.replace(
//         /(?:(?:^|.*;\s*)clientId\s*\=\s*([^;]*).*$)|^.*$/,
//         "$1"
//       )
//     );
//     img.src = url.toString();
//   }
// };

// window.onhashchange = watcher;
// var observer = new MutationObserver(watcher);
// observer.observe(document, {
//   attributes: true,
//   childList: true,
//   subtree: true,
//   characterData: true,
// });
