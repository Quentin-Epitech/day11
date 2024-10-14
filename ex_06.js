function worker(task, timeRequired) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(task + " done");}, 
        timeRequired);});}
  
  async function factory(tasks) {
    const promesse = tasks.tasks.map(({ task, timeRequired }) =>
      worker(task, parseInt(timeRequired))
        .then((resultat) => {
          console.log(resultat);
          return resultat;}));
  await Promise.all(promesse);}
  
  
  
  let tasks = {
    tasks: [
      { task: 'Teaching Astronomy', timeRequired: '500' },
      { task: 'Refill fuel', timeRequired: '1500' },
      { task: 'Repair module', timeRequired: '1000' },
    ],
  };
  
  factory(tasks);
  worker("Going to work", 1000).then(value => { console.log(value) });