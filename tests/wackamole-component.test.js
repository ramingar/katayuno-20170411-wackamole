import test from 'tape';

// Component to test
import WackAMole from '../web/assets/src/js/wackamole.component';

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
test('-------- Component: Check if a mole can to hide', (assert) => {
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
test('-------- Component: Check if no mole exists after mole was hit', (assert) => {
    const message = 'Mole must be hidden';
    const expected = false;

    const wackAMole = WackAMole();
    wackAMole.popMole();
    wackAMole.hit();

    const actual = wackAMole.isMoleVisible();

    assert.equal(actual, expected, message);

    assert.end();
});

// NOTA: utilizar espías para no usar en un test métodos que no deberían ser públicos (por ej, el isMoleVisible())

// Comprobar cuando el topo ha sido golpeado: ha ganado un punto
test('-------- Component: Check if we have 1 point after mole was clicked', (assert) => {
    const message = 'The score must be 1';
    const expected = 1;

    const wackAMole = WackAMole();
    wackAMole.popMole();
    wackAMole.hit();

    const actual = wackAMole.getScore();

    assert.equal(actual, expected, message);

    assert.end();
});

// Testear que no se añade punto si no existe topo al que golpear
test('-------- Component: Check if we have no points added after we clicked somewhere but no mole is available', (assert) => {
    const message = 'The score must be 0';
    const expected = 0;

    const wackAMole = WackAMole();
    wackAMole.hit();

    const actual = wackAMole.getScore();

    assert.equal(actual, expected, message);

    assert.end();
});


// Testear que no se añade punto si el topo ya se ha escondido
test('-------- Component: Check if we have no points added after we hit a hole with no mole available', (assert) => {
    const message = 'The score must be 0';
    const expected = 0;

    const wackAMole = WackAMole();
    wackAMole.popMole();
    wackAMole.hideMole();
    wackAMole.hit();

    const actual = wackAMole.getScore();

    assert.equal(actual, expected, message);

    assert.end();
});

// Testear que tenemos 6 agujeros donde colocar un topo
test('-------- Component: Check if we have 6 holes where put a mole', (assert) => {
    const message = 'The need 6 holes';
    const expected = 6;

    const wackAMole = WackAMole();

    const actual = wackAMole.holes.length;

    assert.equal(actual, expected, message);

    assert.end();
});

// Testear que el topo puede salir al azar en cualquier agujero
test('-------- Component: Check if we can put a mole in a random hole', (assert) => {
    const message = 'The mole is not in that hole';
    const expected = true;

    const wackAMole = WackAMole();

    // si hacemos el random dentro de popMole, no hay forma de comprobar que efectivamente ha sido random
    // por tanto, le pasamos de forma random dónde queremos el mole
    const max = 5, min = 0;
    const random = Math.floor(Math.random() * (max - min)) + min;
    wackAMole.popMole(random);

    const actual = wackAMole.isMoleVisible(random);

    assert.equal(actual, expected, message);

    assert.end();
});

// El topo no puede salir en la última posición usada
test('-------- Component: Check if mole will never pop in the same hole last mole used', (assert) => {
    const message = 'Mole used last hole used';
    const expected = false;

    const wackAMole = WackAMole();

    wackAMole.popMole(3);
    const actual = wackAMole.popMole(3);

    assert.equal(actual, expected, message);

    assert.end();
});
