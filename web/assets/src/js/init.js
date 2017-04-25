import WackAMole from './wackamole.component';

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const SPEED = 1000;
        const wackAMole = WackAMole();

        const setScore = function (points) {
            document.querySelector('.points').innerHTML = points;
        };

        const hit = function (hole, event) {
            if (!event.isTrusted) return; // cheater!
            wackAMole.hit(hole);
            setScore(wackAMole.getScore());
        };

        const hideMoles = function () {
            const moles = document.querySelectorAll('.mole');
            moles.forEach((mole) => {
                mole.className = 'back-image-centered mole';
            });
        };

        const popMole = function () {
            const max = 5, min = 0;
            const random = Math.floor(Math.random() * (max - min)) + min;
            wackAMole.popMole(random);
            document.querySelector('#mole-' + random).className = 'back-image-centered mole display';
        };

        const start = function () {
            const moles = document.querySelectorAll('.mole');

            moles.forEach((mole, idx) => {
                mole.onclick = function (event) {
                    hit(idx, event);
                };
            });

            setInterval(() => {
                hideMoles();
                popMole();
            }, SPEED);

        };

        start();
    });
})();
