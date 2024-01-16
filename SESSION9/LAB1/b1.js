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
const [player1, player2] = game.players;
console.log(player1, player2);

// C2
const [gk1, ...fieldPlayers] = player1;
console.log(gk1, fieldPlayers);

// C3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// C4
const player = ['Thiago', 'Coutinho', 'Perisic'];
const [playerChange, ...playerTeam1] = [player, ...player1]
console.log(`Đội hình chính: ${playerTeam1}\nĐội hình thay người: ${playerChange}`);
// C5
const {team1, x: draw, team2} = game.odds;
console.log(`Tỉ lệ thắng\nTeam 1: ${team1}\nHòa: ${draw}\nTeam 2: ${team2}`);

// C6
function printGoals(...player){
    console.log(...player);
}
printGoals(...game.scored);

// C7
team1 < team2 && console.log(`Đội 1 giành chiến thắng`) || console.log(`Đội 2 giành chiến thắng`);