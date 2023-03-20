/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let sam= new Map();
    for( let i= 0; i< this.words.length; i++){
      let firstWord=this.words[i];
      let secondWord=this.words[i+1] || null;
      if (sam.has(firstWord)) sam.get(firstWord).push(secondWord); 
        else sam.set(firstWord, [secondWord]);
    }
    this.sam=sam;
    // TODO
  }

static choice (ar){
  return ar[Math.floor(Math.random() * ar.length)];

}


  /** return random text from chains */

  makeText(numCount = 5) {
    // TODO\
 

    let keys = Array.from(this.sam.keys());
    let key= MarkovMachine.choice(keys);
    let out= [];
    while (out.length < numCount && key!== null){
      out.push(key);
      key = MarkovMachine.choice(this.sam.get(key));
    }
    return out.join(" ");
  }
  printChain(numCount = 5) {
    let count = 0;
    for (let [key, value] of this.sam.entries()) {
      console.log(`${key}: ${value}`);
      count++;
      if (count >= numCount) {
        break;
      }
    }
}
  }


module.exports= {
  MarkovMachine,
};
let mm = new MarkovMachine("the cat in the hat did an amazing hat of hats that can hat");
console.log(mm.makeText(numWords=50));
mm.makeText();
mm.printChain(numCount = 5);


