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

    const name_lower = name.toLowerCase();

    if (typeof namecase === 'string') { // TODO: check if exists
        namecase = cases[namecase];
    }

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

    const specific_names = {
        'гия': {
            ends: [
                'и',
                'е',
                'ю',
                'ей',
                'е',  
            ],
            cut: 1
        },
        'данко': {
            skip: true
        },
        'илия': {
            ends: [
                'и',
                'е',
                'ю',
                'ей',
                'и',
            ],
            cut: 1
        },
        'лия': {
            ends: [
                'и',
                'и',
                'ю',
                'ей',
                'и', 
            ],
            cut: 1
        },
        'мария': {
            ends: [
                'и',
                'и',
                'ю',
                'ей',
                'и',
            ],
            cut: 1
        },
        'николя': {
            skip: true
        },
        'юлия': {
            ends: [
                'и',
                'и',
                'ю',
                'ей',
                'и',
            ],
            cut: 1
        }
    };

    let found = false;
    let cut = 0;
    let ends = false;
    let skip = false;

    if (specific_names.hasOwnProperty(name_lower)) {
        let data = specific_names[name_lower];
        cut = data.cut;
        ends = data.ends;
        found = true;

        if (data.hasOwnProperty('skip')) {
            skip = data.skip;
        }
    }

    if (skip === true) {
        return name;
    }

    if (namecase == 0) {
        namecase = 1;
    }

    if (found === false) {
        switch (last_n(name, 3)) {
            case 'еля':
                ends = [
                    'и',
                    'е',
                    'ю',
                    'ей',
                    'е',
                ];
                cut = 1;
                break;
    
            case 'енц':
                ends = [
                    'а',
                    'у',
                    'а',
                    'ем',
                    'е',
                ];
                cut = 0;
                break;
    
            case 'лла':
                ends = [
                    'ы',
                    'е',
                    'у',
                    'ой',
                    'е',
                ];
                cut = 1;
                break;
    
            case 'овь': // "Любовь"
                ends = [
                    'и',
                    'и',
                    'ь',
                    'ью',
                    'и',
                ];
                cut = 1;
                break;
        }

        if (ends === false) {
            switch (last_n(name, 2)) {
                case 'ан':
                    ends = [
                        'а',
                        'у',
                        'а',
                        'ом',
                        'е',
                    ];
                    cut = 0;
                    break;
        
                case 'вь':
                    ends = [
                        'ь',
                        'и',
                        'ь',
                        'ью',
                        'и',
                    ];
                    cut = 1;
                    break;
        
                case 'да':
                    ends = [
                        'ы',
                        'е',
                        'у',
                        'ой',
                        'е',
                    ];
                    cut = 1;
                    break;
        
                case 'ев':
                    ends = [
                        'ва',
                        'ву',
                        'ва',
                        'вом',
                        'ве',
                    ];
                    cut = 1;
                    break;
        
                case 'ей':
                    ends = [
                        'я',
                        'ю',
                        'я',
                        'ем',
                        'е',
                    ];
                    cut = 1;
                    break;
        
                case 'иа':
                    ends = [
                        'ю',
                        'е',
                        'ю',
                        'ей',
                        'е',
                    ];
                    cut = 1;
                    break;

                case 'ии':
                    ends = [
                        'и',
                        'е',
                        'ю',
                        'ей',
                        'е',
                    ];
                    cut = 1;
                    break;
    
                case 'ия':
                    ends = [
                        'и',
                        'е',
                        'ю',
                        'ей',
                        'е',
                    ];
                    cut = 1;
                    break;
        
                case 'ий':
                    ends = [
                        'я',
                        'ю',
                        'я',
                        'ем',
                        'и',
                    ];
                    cut = 1;
                    break;
        
                case 'ло':
                    ends = [
                        'ы',
                        'е',
                        'у',
                        'ы',
                        'е',
                    ];
                    cut = 1;
                    break;
        
                case 'та':
                    ends = [
                        'ы',
                        'е',
                        'у',
                        'ой',
                        'е',
                    ];
                    cut = 1;
                    break;
        
                case 'ья':
                    ends = [
                        'и',
                        'е',
                        'ю',
                        'ёй',
                        'е',
                    ];
                    cut = 1;
                    break;
            }
        }

        if (ends === false) {
            switch (last_n(name, 1)) {
                case 'а':
                    ends = [
                        'и',
                        'е',
                        'у',
                        'ой',
                        'е',
                    ];
                    cut = 1;
                    break;
        
                case 'ь':
                    ends = [
                        'я',
                        'ю',
                        'я',
                        'ем',
                        'е',
                    ];
                    cut = 1;
                    break;
        
                case 'я':
                    ends = [
                        'и',
                        'е',
                        'ю',
                        'ей',
                        'е',
                    ];
                    cut = 1;
                    break;
            }
        }
    
        if (ends === false) {
            if (in_array(last_n(name, 1), letters[1], true)) {
                ends = [
                    'а',
                    'у',
                    'а',
                    'ом',
                    'е',
                ];
                cut = 0;
            }
        }
    }

    let new_name = name.substring(0, name.length - cut);
    if (ends !== false) {
        new_name += ends[namecase - 1];
    }

    return new_name;
}

const in_array = (needle, haystack, strict) => {
    for (let key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            return true;
        }
    }
    
    return false;
}

const last_n = (string, slice) => {
    return string.substr(string.length - slice);
}