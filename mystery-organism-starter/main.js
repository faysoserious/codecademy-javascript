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
  };
};
console.log(pAequorFactory(1, mockUpStrand()));







