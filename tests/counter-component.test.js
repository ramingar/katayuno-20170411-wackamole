import test from 'tape';

// Component to test

const WackAMole = function () {

};

// Testear que sale un topo
test('-------- Component: Check if a mole exists', (assert) => {
    const message = 'A mole exists';
    const expected = true;

    const wackAMole = WackAMole();
    wackAMole.popMole();

    const actual = wackAMole.isMoleVisible;

    assert.equal(actual, expected, message);

    assert.end();
});

// Testear que se esconde

// Añadir 1 punto a la puntuación

// Comprobar que existe un método que indique que ha sido golpeado el topo: se ha escondido y ha ganado un punto
