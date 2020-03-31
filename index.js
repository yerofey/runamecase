/*
    Russian case system:
	0. Nominative       - именительный	- кто, что
	1. Genitive         - родительный 	- кого, чего
	2. Dative           - дательный 	- кому, чему
	3. Accusative       - винительный	- кого, что
	4. Instrumental     - творительный	- кем, чем
	5. Prepositional    - предложный	- о ком, о чём
*/

module.exports = (name, namecase) => {
    if (typeof name !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof name}\``);
    }
    
    return getNameInCase(name, namecase);
}

const getNameInCase = (name, namecase) => {
    // TODO: last N symbols to lowercase

    const letters = [
        [
            'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я',
        ],
        [
            'б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ',
        ],
        [
            'ъ', 'ь',
        ]
    ];

    let last_one = name[name.length - 1];
    let last_two = name[name.length - 2] + last_one;
    let cut_symbols = 0;
    let ends;

    if (namecase == 0) {
        namecase = 1;
    }

    // TODO: char codes
    switch (last_one) {
        case 'а':
            ends = [
                'и',
                'е',
                'у',
                'ой',
                'е',
            ];
            cut_symbols = 1;
            break;

        case 'ь':
            ends = [
                'я',
				'ю',
				'я',
				'ем',
				'е',
            ];
            cut_symbols = 1;
            break;

        case 'я':
            ends = [
                'и',
				'е',
				'ю',
				'ей',
				'е',
            ];
            cut_symbols = 1;
            break;
    }

    switch (last_two) {
        case 'ан':
            ends = [
                'а',
				'у',
				'а',
				'ом',
				'е',
            ];
            cut_symbols = 0;
            break;

        case 'вь':
            ends = [
                'вь',
				'ви',
				'вь',
				'вью',
				'ви',
            ];
            cut_symbols = 2;
            break;

        case 'ев':
            ends = [
                'ьва',
				'ьву',
				'ьва',
				'ьвом',
				'ьве',
            ];
            cut_symbols = 2;
            break;

        case 'ей':
            ends = [
                'ея',
				'ею',
				'ея',
				'еем',
				'ее',
            ];
            cut_symbols = 2;
            break;

        case 'иа':
            ends = [
                'ю',
				'е',
				'ю',
				'ей',
				'е',
            ];
            cut_symbols = 1;
            break;
    }

    if (cut_symbols == 0 && in_array(last_one, letters[1], true)) {
        ends = [
            'а',
            'у',
            'а',
            'ом',
            'е',
        ];
        cut_symbols = 0;
    }

    return name.substring(0, name.length - cut_symbols) + ends[namecase - 1];
}

// const getNameInCase = (name, namecase) => {
const in_array = (needle, haystack, strict) => {
    for (let key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            return true;
        }
    }
    
    return false;
}
