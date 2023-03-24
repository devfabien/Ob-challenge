const readline = require('readline');
const generator = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  generator.question('Enter a text: ', (text) => {
    const uniqueWords = countUniqueWords(text);
    console.log(uniqueWords);
    generator.close();
  });

function countUniqueWords(text) {
  const words = text.toLowerCase().split(/\W+/);

  const counts = {};
  for (const word of words) {
    if (word in counts) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
 
  const wordCounts = [];
  for (const [word, count] of Object.entries(counts)) {
    wordCounts.push({ word, count });
  }
 
  wordCounts.sort((a, b) => b.count - a.count);
  
  return wordCounts;
}


