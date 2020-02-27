importScripts('./libs/consts.js');

self.onmessage = function (e) {
    try {
        let result = e.data.a * FACTOR * getFactor();
        self.postMessage(result);
    } catch (e) {
        console.error(e);
    }
}