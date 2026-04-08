
import { expect } from 'chai';

import { shuffle } from '../src/shuffle.js';

describe('shuffle()', () => {
    
    it('should return an array with the same length as the input array', () => {
        const originalArray = [1, 2, 3, 4, 5];
        const shuffledArray = shuffle(originalArray);
        
        expect(shuffledArray).to.have.length(originalArray.length);
    });

   
    it('should rearrange the indexes of the array', () => {
    
        const originalArray = Array.from({length: 50}, (_, i) => i);
        const shuffledArray = shuffle(originalArray);
        
       
        expect(shuffledArray).to.not.equal(originalArray);
        
      
        expect(shuffledArray).to.have.members(originalArray);

        
        let isShuffled = false;
        for (let i = 0; i < originalArray.length; i++) {
            if (originalArray[i] !== shuffledArray[i]) {
                isShuffled = true;
                break;
            }
        }
        expect(isShuffled).to.be.true;
    });
});