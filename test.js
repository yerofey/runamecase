const test = require('ava');
const runamecase = require('.');

/*
	1. Genitive         - родительный 	- кого, чего
	2. Dative           - дательный 	- кому, чему
	3. Accusative       - винительный	- кого, что
	4. Instrumental     - творительный	- кем, чем
	5. Prepositional    - предложный	- о ком, о чём
*/

test('Абдулла', t => {
    t.is(runamecase('Абдулла', 1), 'Абдуллы');
    t.is(runamecase('Абдулла', 2), 'Абдулле');
    t.is(runamecase('Абдулла', 3), 'Абдуллу');
    t.is(runamecase('Абдулла', 4), 'Абдуллой');
    t.is(runamecase('Абдулла', 5), 'Абдулле');
});

test('Алексей', t => {
    t.is(runamecase('Алексей', 1), 'Алексея');
    t.is(runamecase('Алексей', 2), 'Алексею');
    t.is(runamecase('Алексей', 3), 'Алексея');
    t.is(runamecase('Алексей', 4), 'Алексеем');
    t.is(runamecase('Алексей', 5), 'Алексее');
});

test('Анастасия', t => {
    t.is(runamecase('Анастасия', 1), 'Анастасии');
    t.is(runamecase('Анастасия', 2), 'Анастасие');
    t.is(runamecase('Анастасия', 3), 'Анастасию');
    t.is(runamecase('Анастасия', 4), 'Анастасией');
    t.is(runamecase('Анастасия', 5), 'Анастасие');
});

test('Андрей', t => {
    t.is(runamecase('Андрей', 1), 'Андрея');
    t.is(runamecase('Андрей', 2), 'Андрею');
    t.is(runamecase('Андрей', 3), 'Андрея');
    t.is(runamecase('Андрей', 4), 'Андреем');
    t.is(runamecase('Андрей', 5), 'Андрее');
});

test('Анеля', t => {
    t.is(runamecase('Анеля', 1), 'Анели');
    t.is(runamecase('Анеля', 2), 'Анеле');
    t.is(runamecase('Анеля', 3), 'Анелю');
    t.is(runamecase('Анеля', 4), 'Анелей');
    t.is(runamecase('Анеля', 5), 'Анеле');
});

test('Аркадий', t => {
    t.is(runamecase('Аркадий', 1), 'Аркадия');
    t.is(runamecase('Аркадий', 2), 'Аркадию');
    t.is(runamecase('Аркадий', 3), 'Аркадия');
    t.is(runamecase('Аркадий', 4), 'Аркадием');
    t.is(runamecase('Аркадий', 5), 'Аркадии');
});

test('Валерий', t => {
    t.is(runamecase('Валерий', 1), 'Валерия');
    t.is(runamecase('Валерий', 2), 'Валерию');
    t.is(runamecase('Валерий', 3), 'Валерия');
    t.is(runamecase('Валерий', 4), 'Валерием');
    t.is(runamecase('Валерий', 5), 'Валерии');
});

test('Ваня', t => {
    t.is(runamecase('Ваня', 1), 'Вани');
    t.is(runamecase('Ваня', 2), 'Ване');
    t.is(runamecase('Ваня', 3), 'Ваню');
    t.is(runamecase('Ваня', 4), 'Ваней');
    t.is(runamecase('Ваня', 5), 'Ване');
});

test('Виль', t => {
    t.is(runamecase('Виль', 1), 'Виля');
    t.is(runamecase('Виль', 2), 'Вилю');
    t.is(runamecase('Виль', 3), 'Виля');
    t.is(runamecase('Виль', 4), 'Вилем');
    t.is(runamecase('Виль', 5), 'Виле');
});

test('Гаврило', t => {
    t.is(runamecase('Гаврило', 1), 'Гаврилы');
    t.is(runamecase('Гаврило', 2), 'Гавриле');
    t.is(runamecase('Гаврило', 3), 'Гаврилу');
    t.is(runamecase('Гаврило', 4), 'Гаврилы');
    t.is(runamecase('Гаврило', 5), 'Гавриле');
});

test('Георгий', t => {
    t.is(runamecase('Георгий', 1), 'Георгия');
    t.is(runamecase('Георгий', 2), 'Георгию');
    t.is(runamecase('Георгий', 3), 'Георгия');
    t.is(runamecase('Георгий', 4), 'Георгием');
    t.is(runamecase('Георгий', 5), 'Георгии');
});

test('Гия', t => {
    t.is(runamecase('Гия', 1), 'Гии');
    t.is(runamecase('Гия', 2), 'Гие');
    t.is(runamecase('Гия', 3), 'Гию');
    t.is(runamecase('Гия', 4), 'Гией');
    t.is(runamecase('Гия', 5), 'Гие');
});

test('Даниил', t => {
    t.is(runamecase('Даниил', 1), 'Даниила');
    t.is(runamecase('Даниил', 2), 'Даниилу');
    t.is(runamecase('Даниил', 3), 'Даниила');
    t.is(runamecase('Даниил', 4), 'Даниилом');
    t.is(runamecase('Даниил', 5), 'Данииле');
});

test('Данко', t => {
    t.is(runamecase('Данко', 1), 'Данко');
    t.is(runamecase('Данко', 2), 'Данко');
    t.is(runamecase('Данко', 3), 'Данко');
    t.is(runamecase('Данко', 4), 'Данко');
    t.is(runamecase('Данко', 5), 'Данко');
});

test('Ерофей', t => {
    t.is(runamecase('Ерофей', 1), 'Ерофея');
    t.is(runamecase('Ерофей', 2), 'Ерофею');
    t.is(runamecase('Ерофей', 3), 'Ерофея');
    t.is(runamecase('Ерофей', 4), 'Ерофеем'); 
    t.is(runamecase('Ерофей', 5), 'Ерофее');
});

test('Иван', t => {
    t.is(runamecase('Иван', 1), 'Ивана');
    t.is(runamecase('Иван', 2), 'Ивану');
    t.is(runamecase('Иван', 3), 'Ивана');
    t.is(runamecase('Иван', 4), 'Иваном');
    t.is(runamecase('Иван', 5), 'Иване');
});

test('Илия', t => {
    t.is(runamecase('Илия', 1), 'Илии');
    t.is(runamecase('Илия', 2), 'Илие');
    t.is(runamecase('Илия', 3), 'Илию');
    t.is(runamecase('Илия', 4), 'Илией');
    t.is(runamecase('Илия', 5), 'Илии');
});

test('Илья', t => {
    t.is(runamecase('Илья', 1), 'Ильи');
    t.is(runamecase('Илья', 2), 'Илье');
    t.is(runamecase('Илья', 3), 'Илью');
    t.is(runamecase('Илья', 4), 'Ильёй');
    t.is(runamecase('Илья', 5), 'Илье');
});

test('Леонид', t => {
    t.is(runamecase('Леонид', 1), 'Леонида');
    t.is(runamecase('Леонид', 2), 'Леониду');
    t.is(runamecase('Леонид', 3), 'Леонида');
    t.is(runamecase('Леонид', 4), 'Леонидом');
    t.is(runamecase('Леонид', 5), 'Леониде');
});

test('Лёня', t => {
    t.is(runamecase('Лёня', 1), 'Лёни');
    t.is(runamecase('Лёня', 2), 'Лёне');
    t.is(runamecase('Лёня', 3), 'Лёню');
    t.is(runamecase('Лёня', 4), 'Лёней');
    t.is(runamecase('Лёня', 5), 'Лёне');
});

test('Лида', t => {
    t.is(runamecase('Лида', 1), 'Лиды');
    t.is(runamecase('Лида', 2), 'Лиде');
    t.is(runamecase('Лида', 3), 'Лиду');
    t.is(runamecase('Лида', 4), 'Лидой');
    t.is(runamecase('Лида', 5), 'Лиде');
});

test('Лия', t => {
    t.is(runamecase('Лия', 1), 'Лии');
    t.is(runamecase('Лия', 2), 'Лии');
    t.is(runamecase('Лия', 3), 'Лию');
    t.is(runamecase('Лия', 4), 'Лией');
    t.is(runamecase('Лия', 5), 'Лии');
});

test('Любовь', t => {
    t.is(runamecase('Любовь', 1), 'Любови');
    t.is(runamecase('Любовь', 2), 'Любови');
    t.is(runamecase('Любовь', 3), 'Любовь');
    t.is(runamecase('Любовь', 4), 'Любовью');
    t.is(runamecase('Любовь', 5), 'Любови');
});

test('Мария', t => {
    t.is(runamecase('Мария', 1), 'Марии');
    t.is(runamecase('Мария', 2), 'Марии');
    t.is(runamecase('Мария', 3), 'Марию');
    t.is(runamecase('Мария', 4), 'Марией');
    t.is(runamecase('Мария', 5), 'Марии');
});

test('Майя', t => {
    t.is(runamecase('Майя', 1), 'Майи');
    t.is(runamecase('Майя', 2), 'Майе');
    t.is(runamecase('Майя', 3), 'Майю');
    t.is(runamecase('Майя', 4), 'Майей');
    t.is(runamecase('Майя', 5), 'Майе');
});

test('Настя', t => {
    t.is(runamecase('Настя', 1), 'Насти');
    t.is(runamecase('Настя', 2), 'Насте');
    t.is(runamecase('Настя', 3), 'Настю');
    t.is(runamecase('Настя', 4), 'Настей');
    t.is(runamecase('Настя', 5), 'Насте');
});

test('Никита', t => {
    t.is(runamecase('Никита', 1), 'Никиты');
    t.is(runamecase('Никита', 2), 'Никите');
    t.is(runamecase('Никита', 3), 'Никиту');
    t.is(runamecase('Никита', 4), 'Никитой');
    t.is(runamecase('Никита', 5), 'Никите');
});

test('Николя', t => {
    t.is(runamecase('Николя', 1), 'Николя');
    t.is(runamecase('Николя', 2), 'Николя');
    t.is(runamecase('Николя', 3), 'Николя');
    t.is(runamecase('Николя', 4), 'Николя');
    t.is(runamecase('Николя', 5), 'Николя');
});

test('Ольга', t => {
    t.is(runamecase('Ольга', 1), 'Ольги');
    t.is(runamecase('Ольга', 2), 'Ольге');
    t.is(runamecase('Ольга', 3), 'Ольгу');
    t.is(runamecase('Ольга', 4), 'Ольгой');
    t.is(runamecase('Ольга', 5), 'Ольге');
});

test('Полоний', t => {
    t.is(runamecase('Полоний', 1), 'Полония');
    t.is(runamecase('Полоний', 2), 'Полонию');
    t.is(runamecase('Полоний', 3), 'Полония');
    t.is(runamecase('Полоний', 4), 'Полонием');
    t.is(runamecase('Полоний', 5), 'Полонии');
});

test('Радий', t => {
    t.is(runamecase('Радий', 1), 'Радия');
    t.is(runamecase('Радий', 2), 'Радию');
    t.is(runamecase('Радий', 3), 'Радия');
    t.is(runamecase('Радий', 4), 'Радием');
    t.is(runamecase('Радий', 5), 'Радии');
});

test('Ричард', t => {
    t.is(runamecase('Ричард', 1), 'Ричарда');
    t.is(runamecase('Ричард', 2), 'Ричарду');
    t.is(runamecase('Ричард', 3), 'Ричарда');
    t.is(runamecase('Ричард', 4), 'Ричардом');
    t.is(runamecase('Ричард', 5), 'Ричарде');
});

test('Ференц', t => {
    t.is(runamecase('Ференц', 1), 'Ференца');
    t.is(runamecase('Ференц', 2), 'Ференцу');
    t.is(runamecase('Ференц', 3), 'Ференца');
    t.is(runamecase('Ференц', 4), 'Ференцем');
    t.is(runamecase('Ференц', 5), 'Ференце');
});

test('Эмил', t => {
    t.is(runamecase('Эмил', 1), 'Эмила');
    t.is(runamecase('Эмил', 2), 'Эмилу');
    t.is(runamecase('Эмил', 3), 'Эмила');
    t.is(runamecase('Эмил', 4), 'Эмилом');
    t.is(runamecase('Эмил', 5), 'Эмиле');

    // также изменяются Шарль, Пьер, Питер, Клод, Жан, Джон, Эдвард, Теодор, Тигран, Тукай, Фазиль, Равиль, Мирза, Муса, Менея и др.
});

test('Эмиль', t => {
    t.is(runamecase('Эмиль', 1), 'Эмиля');
    t.is(runamecase('Эмиль', 2), 'Эмилю');
    t.is(runamecase('Эмиль', 3), 'Эмиля');
    t.is(runamecase('Эмиль', 4), 'Эмилем');
    t.is(runamecase('Эмиль', 5), 'Эмиле');
});

test('Юлия', t => {
    t.is(runamecase('Юлия', 1), 'Юлии');
    t.is(runamecase('Юлия', 2), 'Юлии');
    t.is(runamecase('Юлия', 3), 'Юлию');
    t.is(runamecase('Юлия', 4), 'Юлией');
    t.is(runamecase('Юлия', 5), 'Юлии');
});

test('Юрий', t => {
    t.is(runamecase('Юрий', 1), 'Юрия');
    t.is(runamecase('Юрий', 2), 'Юрию');
    t.is(runamecase('Юрий', 3), 'Юрия');
    t.is(runamecase('Юрий', 4), 'Юрием');
    t.is(runamecase('Юрий', 5), 'Юрии');
});



// test('', t => {
//     t.is(runamecase('', 1), '');
// });


/*
	1. Genitive         - родительный 	- кого, чего
	2. Dative           - дательный 	- кому, чему
	3. Accusative       - винительный	- кого, что
	4. Instrumental     - творительный	- кем, чем
	5. Prepositional    - предложный	- о ком, о чём
*/
