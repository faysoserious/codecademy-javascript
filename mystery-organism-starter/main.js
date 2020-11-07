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
    }
  };
};
const test = pAequorFactory(1,mockUpStrand());
console.log(test.dna);
console.log(test.mutate());






