const test = require('ava');
const runamecase = require('.');

test('1. Genitive (родительный): кого, чего', t => {
    t.is(runamecase('Анастасия', 1), 'Анастасии');
    t.is(runamecase('Андрей', 1), 'Андрея');
    
    t.is(runamecase('Ваня', 1), 'Вани');
    t.is(runamecase('Ерофей', 1), 'Ерофея');
    t.is(runamecase('Иван', 1), 'Ивана');

    t.is(runamecase('Лада', 1), 'Лады');

    t.is(runamecase('Лёня', 1), 'Лёни');
    t.is(runamecase('Леонид', 1), 'Леонида');
    t.is(runamecase('Настя', 1), 'Насти');

    // t.is(runamecase('', 1), '');
});

test('2. Dative (дательный): кому, чему', t => {
    t.is(runamecase('Анастасия', 2), 'Анастасие');
    t.is(runamecase('Андрей', 2), 'Андрею');
    t.is(runamecase('Ваня', 2), 'Ване');
    t.is(runamecase('Ерофей', 2), 'Ерофею');
    t.is(runamecase('Иван', 2), 'Ивану');

    t.is(runamecase('Лада', 2), 'Ладе');

    t.is(runamecase('Лёня', 2), 'Лёне');
    t.is(runamecase('Леонид', 2), 'Леониду');
    t.is(runamecase('Настя', 2), 'Насте');

    // t.is(runamecase('', 2), '');
});

test('3. Accusative (винительный): кого, что', t => {
    t.is(runamecase('Анастасия', 3), 'Анастасию');
    t.is(runamecase('Андрей', 3), 'Андрея');
    t.is(runamecase('Ваня', 3), 'Ваню');
    t.is(runamecase('Ерофей', 3), 'Ерофея');
    t.is(runamecase('Иван', 3), 'Ивана');

    t.is(runamecase('Лада', 3), 'Ладу');

    t.is(runamecase('Лёня', 3), 'Лёню');
    t.is(runamecase('Леонид', 3), 'Леонида');
    t.is(runamecase('Настя', 3), 'Настю');

    // t.is(runamecase('', 3), '');
});

test('4. Instrumental (творительный): кем, чем', t => {
    t.is(runamecase('Анастасия', 4), 'Анастасией');
    t.is(runamecase('Андрей', 4), 'Андреем');
    t.is(runamecase('Ваня', 4), 'Ваней');
    t.is(runamecase('Ерофей', 4), 'Ерофеем'); 
    t.is(runamecase('Иван', 4), 'Иваном');

    t.is(runamecase('Лада', 4), 'Ладой');

    t.is(runamecase('Лёня', 4), 'Лёней');
    t.is(runamecase('Леонид', 4), 'Леонидом');
    t.is(runamecase('Настя', 4), 'Настей');

    // t.is(runamecase('', 4), '');
});

test('5. Prepositional (предложный): о ком, о чём', t => {
    t.is(runamecase('Анастасия', 5), 'Анастасие');
    t.is(runamecase('Андрей', 5), 'Андрее');
    t.is(runamecase('Ваня', 5), 'Ване');
    t.is(runamecase('Ерофей', 5), 'Ерофее');
    t.is(runamecase('Иван', 5), 'Иване');

    t.is(runamecase('Лада', 5), 'Ладе');

    t.is(runamecase('Лёня', 5), 'Лёне');
    t.is(runamecase('Леонид', 5), 'Леониде');
    t.is(runamecase('Настя', 5), 'Насте');

    // t.is(runamecase('', 5), '');
});
