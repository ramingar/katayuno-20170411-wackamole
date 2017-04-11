import counter from './counter.component';

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const seconds = 15;
        let secondsCount = 0;
        const myCounter = counter(seconds);

        document.querySelector('#content').innerHTML = myCounter.timeAfter(secondsCount);

        const intervalProcess = setInterval(() => {
            if (secondsCount === seconds) {
                clearInterval(intervalProcess);
            }
            secondsCount++;
            document.querySelector('#content').innerHTML = myCounter.timeAfter(secondsCount);
        }, 1000);
    });
})();
