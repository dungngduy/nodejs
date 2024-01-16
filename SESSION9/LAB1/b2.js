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
// C1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// C2
let sum = 0;
const odd = Object.values(game.odds);
for (const item of odd) {
    sum += item;
}
console.log(`Tỉ lệ kết quả trận đấu: ${sum/odd.length}`);

// C3
const odds = Object.entries(game.odds);
for (const [team, odd] of odds) {
    const result = team === 'x' ? `hòa` : `thắng của ${game[team]}`;
    console.log(`Tỉ lệ ${result}: ${odd}`);
}

// C4
const scores = {};
const scored = game.scored;
for(let i = 0; i < scored.length; i++){
    let count = 0;
    for(let j = 0; j < scored.length; j++){
        if(scored[i] == scored[j]){
            count++;
        }
    }
    scores[game.scored[i]] = count;
}
console.log(scores);