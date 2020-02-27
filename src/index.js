import BaseOSH from './osh/base/BaseOSH.js';
import Worker from 'worker-loader!./osh/workers/testworker.js';

function component() {
    const worker = new Worker();
    let print = new BaseOSH();

    worker.postMessage({ a: 1 });
    worker.onmessage = function (event) {
        document.write(print.printMe()+" "+event.data);
    };
}

component();