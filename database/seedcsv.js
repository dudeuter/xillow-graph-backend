const fs = require('fs');
const faker = require('faker');
const cliProgress = require('cli-progress');

const ws = fs.createWriteStream('out.csv');
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const homes = 10000000;

bar.start(homes, 0);
ws.write('home_id,estimate,date,listed,sold\n');

for (let i = 0; i < homes; i += 1) {
  const points = 1 + Math.floor(Math.random() * 5);
  for (let j = 0; j < points; j += 1) {
    const date = new Date(faker.date.past());
    ws.write(`${i + 1},${100000 + Math.floor(Math.random() * 50) * 100000},${date.getFullYear()}-${1 + date.getMonth()}-${date.getDate()},${Math.random() > 0.95},${Math.random() > 0.95}\n`);
  }
  bar.increment(1);
}

bar.stop();
