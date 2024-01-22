const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Hitz',
        'Meunier',
        'Akanji',
        'Hummels',
        'Guerreiro',
        'Witsel',
        'Dahoud',
        'Reus',
        'Brandt',
        'Hazard',
        'Haaland',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  //Lab 1.1
  const [players1, players2] = game.players;
  const [gk, ...fieldPlayers] = players1;
  const allPlayers = [...players1, ...players2];
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  const { team1, x: draw, team2 } = game.odds;
  
  const printGoals = (...players) => {
    players.forEach((player, i) => {
      console.log(`Goal ${i + 1}: ${player}`);
    });
  };
  
  const winner = game.odds.team1 < game.odds.team2 && game.team1;

//Lab 1.2

game.scored.forEach((player, i) => {
    console.log(`Goal ${i + 1}: ${player}`);
  });
  
  const averageOdds = (game.odds.team1 + game.odds.x + game.odds.team2) / 3;
  console.log(`Tỉ lệ kết quả trận đấu: ${averageOdds}`);
  
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamName = team === 'x' ? 'draw' : game[team];
    console.log(`Tỉ lệ thắng của ${teamName}: ${odd}`);
  }
  
  const scorers = {};
  game.scored.forEach(player => {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  });
  const players = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
  game.scored = players;
      