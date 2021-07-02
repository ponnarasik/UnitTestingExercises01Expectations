const assert = require('assert');

const checkFive = require('../checkFive.js');

describe("checkFive", function(){

it("returns 'num is less than 5' when num < 5.", function(){
   assert.strictEqual(output, "2 is less than 5.");
         //code here...
     let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });

});