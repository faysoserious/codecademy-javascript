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
    dna: dnaBase,
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
        } while (item === currentBase[i]);
        mutantStand.push(item);
      };
      return mutantStand;
    },
/**
 * The rules are that 'A' bases bind with 'T' bases (and vice versa) 
 * and 'C' bases bind with 'G' bases (and vice versa).
 */
    complementStrand() {
      const currentBase = this.dna;
      const comStand = [];
      for (let i = 0; i < 15; i++) {
        switch (currentBase[i]) {
          case 'A':
            comStand.push('T');
            break;
          case 'T':
            comStand.push('A');
            break;
          case 'C':
            comStand.push('G');
            break;
          case 'G':
            comStand.push('C');
            break;
          default:
            console.log('wrong DNA base!');
            break;

        };
      };
      return comStand;
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
    },
    /**
     * returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. 
     * Otherwise, .willLikelySurvive() returns false.
     */
    willLikelySurvive() {
      const check = this.dna;
      let CGs = 0;
      //Make good use of built-in functions
      //const cOrG = this.dna.filter(el => el === "C" || el === "G");
      check.forEach(element => {
        if (element === 'C' || element === 'G') {
          CGs++;
        };
      });
      const surviveRate = CGs / 15;
      //console.log(surviveRate);
      if (surviveRate >= 0.6) {
        return true;
      } else {
        return false;
      };

    }


  };
};

const create = n => {
  let i = 0;
  let instance = 1;
  const instancesArray = [];
  do {
    i++;
    let instanceObj = pAequorFactory(instance, mockUpStrand());
    if (instanceObj.willLikelySurvive()) {
      instancesArray.push(instanceObj);
      instance++;
    }

  } while (instance < (n + 1));
  return instancesArray;

};
//const test = create(2);
//console.log(test[1].dna);
//console.log(test[1].complementStrand());

/********************solution from Codeacademy**************************************
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this.dna.length >= 0.6;
    },
  }
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)
 */



