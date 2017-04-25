const WackAMole = function () {
    let score = 0;

    const holes = [false, false, false, false, false, false];

    const popMole = function (hole = 0) {
        if (holes[hole]) {
            return false;
        }
        holes[hole] = true;
        return true;
    };

    const hideMole = function (hole = 0) {
        if (!holes[hole]) {
            return false;
        }
        holes[hole] = false;
        return true;
    };

    const isMoleVisible = function (hole = 0) {
        return holes[hole];
    };

    const addPoint = function () {
        score++;
    };

    const hit = function (hole = 0) {
        if (hideMole(hole)) {
            addPoint();
        }
    };

    const getScore = function () {
        return score;
    };

    return {popMole, hideMole, isMoleVisible, addPoint, getScore, holes, hit};
};
export default WackAMole;
