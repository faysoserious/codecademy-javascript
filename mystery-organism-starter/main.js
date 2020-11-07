// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Factory function pAequorFactory() to create multiple objects
const pAequorFactory = (number, dnaBase) => {
  return {
    specimenNum: number,
    dna : dnaBase,
    /**
     * .mutate() is responsible for randomly selecting a base in the object’s dna property 
     * and changing the current base to a different base. Then .mutate() will return 
     * the object’s dna.For example, if the randomly selected base is the 1st base 
     * and it is 'A', the base must be changed to 'T', 'C', or 'G'. 
     * But it cannot be 'A' again.
     */
    mutate() {
      const currentBase = this.dna;
      const mutantStand = [];
      for (let i = 0; i < 15; i++) {
        let item = returnRandBase();
        do {
          item = returnRandBase();
        } while(item === currentBase[i]);
        mutantStand.push(item);
      };
      return mutantStand;
    },
    /** 
     * The behavior of .compareDNA() is to compare the current pAequor‘s .dna 
     * with the passed in pAequor‘s .dna and compute how many bases are identical
     *  and in the same locations. 
     */
    compareDNA(obj) {
      let similarity = 0;
      let identicalNum = 0;
      const DNA1 = obj.dna;
      const DNA2 = this.dna;
      for (let i = 0; i < 15; i++) {
        if (DNA1[i] === DNA2[i]) {
          identicalNum++;
        };
      };
      console.log(identicalNum);
      similarity = identicalNum / 15 * 100;
      return `specimen ${obj.specimenNum} and specimen ${this.specimenNum} have ${similarity.toFixed(2)}% DNA in common.`
    }
  };
};
const test = pAequorFactory(1,mockUpStrand());
const test2 = pAequorFactory(2,mockUpStrand());
console.log(test.dna);
console.log(test2.dna);
console.log(test.compareDNA(test2));






