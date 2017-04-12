import test from 'tape';

// Component to test

const WackAMole = function () {
    let mole = false;
    let score = 0;

    const popMole = function () {
        mole = true;
    };

    const hideMole = function () {
        mole = false;
    };

    const isMoleVisible = function () {
        return mole;
    };

    const addPoint = function () {
        score++;
    };

    const hit = function () {
        hideMole();
        addPoint();
    };

    const getScore = function () {
        return score;
    };

    return {popMole, isMoleVisible, hideMole, addPoint, getScore, hit};
};

// Testear que cuando creamos una instancia nueva del juego el topo está escondido
test('-------- Component: In a new instance no mole must exist', (assert) => {
    const message = 'A mole exists';
    const expected = false;

    const wackAMole = WackAMole();

    const actual = wackAMole.isMoleVisible();

    assert.equal(actual, expected, message);

    assert.end();
});

// Testear que sale un topo
test('-------- Component: Check if a mole pops', (assert) => {
    const message = 'No mole exists';
    const expected = true;

    const wackAMole = WackAMole();
    wackAMole.popMole();

    const actual = wackAMole.isMoleVisible();

    assert.equal(actual, expected, message);

    assert.end();
});

// Testear que se esconde
test('-------- Component: Check if a mole hides', (assert) => {
    const message = 'A mole exists';
    const expected = false;

    const wackAMole = WackAMole();
    wackAMole.popMole();
    wackAMole.hideMole();

    const actual = wackAMole.isMoleVisible();

    assert.equal(actual, expected, message);

    assert.end();
});

// Añadir 1 punto a la puntuación
test('-------- Component: Check if we can add a point', (assert) => {
    const message = 'No point added';
    const expected = 1;

    const wackAMole = WackAMole();
    wackAMole.addPoint();

    const actual = wackAMole.getScore();

    assert.equal(actual, expected, message);

    assert.end();
});

// Añadir 6 puntos a la puntuación
test('-------- Component: Check if we can add six points', (assert) => {
    const message = 'The score must be 6';
    const expected = 6;
    const POINTS = 6;

    const wackAMole = WackAMole();

    for (let ii = 0; ii < POINTS; ii++) {
        wackAMole.addPoint();
    }

    const actual = wackAMole.getScore();

    assert.equal(actual, expected, message);

    assert.end();
});

// Comprobar cuando el topo ha sido golpeado: se ha escondido
test('-------- Component: Check if no mole exists if mole was hit', (assert) => {
    const message = 'Mole must be hidden';
    const expected = false;

    const wackAMole = WackAMole();
    wackAMole.hit();

    const actual = wackAMole.isMoleVisible();

    assert.equal(actual, expected, message);

    assert.end();
});


// Comprobar cuando el topo ha sido golpeado: ha ganado un punto
test('-------- Component: Check if we have 1 point after mole clicked', (assert) => {
    const message = 'The score must be 1';
    const expected = 1;

    const wackAMole = WackAMole();
    wackAMole.hit();

    const actual = wackAMole.getScore();

    assert.equal(actual, expected, message);

    assert.end();
});

// NOTA: utilizar espías para no usar en un test métodos que no deberían ser públicos (por ej, el isMoleVisible())
