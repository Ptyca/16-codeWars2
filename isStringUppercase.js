String.prototype.isUpperCase = function() {
    const letter = this.toString();
        if (letter === letter.toUpperCase()){
        return true;
        } 
        else {
        return false;  
        }
    }
     test('isUpperCase', () => {
     
           expect('Hello World'.isUpperCase()).toBe(false, 'Hello World is not upper case');
           expect('hello world'.isUpperCase()).toBe(false, 'hello world is not upper case');
           expect('Hello world'.isUpperCase()).toBe(false, 'Hello world is not upper case');
           expect('hello World'.isUpperCase()).toBe(false, 'hello World is not upper case');
           expect('HELLO WORLD'.isUpperCase()).toBe(true, 'HELLO WORLD is upper case');
           expect('Bob walks his dog every day.'.isUpperCase()).toBe(false, 'Bob walks his dog every day. is not upper case');
           expect('BOB walks his dog every day.'.isUpperCase()).toBe(false, 'BOB walks his dog every day. is not upper case');
           expect('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase()).toBe(true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
           expect('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase()).toBe(false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
           expect('#lovewins'.isUpperCase()).toBe(false, '#lovewins is not upper case');
           expect('#Lovewins'.isUpperCase()).toBe(false, '#Lovewins is not upper case');
           expect('#loveWins'.isUpperCase()).toBe(false, '#loveWins is not upper case');
           expect('#LoveWins'.isUpperCase()).toBe(false, '#LoveWins is not upper case');
           expect('#LOVEWins'.isUpperCase()).toBe(false, '#LOVEWins is not upper case');
           expect('#LoveWINS'.isUpperCase()).toBe(false, '#LoveWINS is not upper case');
           expect('#LOVEWINs'.isUpperCase()).toBe(false, '#LOVEWINs is not upper case');
           expect('#lOVEWINS'.isUpperCase()).toBe(false, '#lOVEWINS is not upper case');
           expect('#LOVEWINS'.isUpperCase()).toBe(true, '#LOVEWINS is upper case');
         });