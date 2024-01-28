var voters = [
    { name:'Bob', age: 30, voted: true },
    { name:'Jake', age: 32, voted: true },
    { name:'Kate', age: 25, voted: false },
    { name:'Sam', age: 20, voted: false },
    { name:'Phil', age: 21, voted: true },
    { name:'Ed', age: 55, voted: true },
    { name:'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
  ];
  
  var ageVoter = voters.reduce(function (accumulator, voter) {
    if (voter.voted) {
      if (voter.age >= 20 && voter.age < 30) {
        accumulator['20-30'] = (accumulator['20-30'] || 0) + 1;
      } else if (voter.age >= 30 && voter.age < 40) {
        accumulator['30-40'] = (accumulator['30-40'] || 0) + 1;
      } else if (voter.age >= 40) {
        accumulator['>40'] = (accumulator['>40'] || 0) + 1;
      }
    }
    return accumulator;
  }, {});
  
  console.log(ageVoter);
  