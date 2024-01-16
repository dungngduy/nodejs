const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Bayern Munich',
            'player2',
            'player3',
            'player4',
            'player5',
            'player6',
            'player7',
            'player8',
            'player9',
            'player10',
            'player11'
        ],
        [
            'Borrussia Dortmund',
            'player2',
            'player3',
            'player4',
            'player5',
            'player6',
            'player7',
            'player8',
            'player9',
            'player10',
            'player11'
        ]
    ],
    scored: ['Lewandowski', 'Davies', 'Muller', 'Lewandowski'],
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};

const events = new Map([
    ['8', 'Phạt góc'],
    ['17', 'Ghi bàn'],
    ['30', 'Phạt góc'],
    ['37', 'Phạt góc'],
    ['41', 'Thẻ vàng'],
    ['48', 'Thẻ vàng'],
    ['55', 'Ghi bàn'],
    ['69', 'Phạt góc'],
    ['75', 'Thẻ vàng'],
    ['87', 'Ghi bàn'],
    ['90', 'Ghi bàn'],
]);
// C1
const scores = [...new Set(events.values())];
console.log(scores);

// C2
events.delete('75');
console.log(events);

// C3
const time = [...events.keys()];
const avg = time[time.length - 1]/time.length;
console.log(`Trung bình ${avg} phút sẽ có 1 sự kiện xảy ra`);

// C4
for (const [keys, value] of events.entries()) {
    let hiep = keys <= '45' ? '1' : '2';
    console.log(`Hiệp ${hiep} phút thứ ${keys}: ${value}`);
}

// C5
// document.querySelector('body').innerHTML = '<textarea name="" id="" cols="30" rows="10"></textarea><br><button>Click</button>';
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     let text = document.querySelector('textarea').value;
//     const rows = text.split('\n'); // add array
//     for (const row of rows) {
//         const [str1, str2] = row.toLowerCase().trim().split('_');
//         const textPerfect = `${str1}${str2.replace(str2[0], str2[0].toUpperCase())}`;
//         console.log(textPerfect);
//     }
// })

// Bài tập thêm
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao937661
// 09;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis
// 2323639855;12:30'

// � Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// � Delayed Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)

// button.addEventListener('click', function(){
//     let text = document.querySelector('textarea').value;
//     const getCode = str => str.slice(0, 3).toUpperCase();
//     for (const row of text.split('+')) {
//         let [type, from, to, time] = row.split(';');
//         const output = `${type.startsWith('_Delayed') ? '*' : ''} ${type.replaceAll('_', ' ').trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(46);
//         console.log(output);
//     }
// })