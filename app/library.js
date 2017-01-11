'use strict'

var file = {}

Array.prototype.toTwenty = function() {
  var oneToTwenty = [];
  for(var i = 1; i <= 20; i++) {
    oneToTwenty.push(i);
  }
  return oneToTwenty;
};


Array.prototype.toForty = function() {
  var twoToForty = [];
  for(var i = 2; i <= 40; i += 2) {
    twoToForty.push(i);
  }
  return twoToForty;
};


Array.prototype.toOneThousand = function() {
  var tenToOneThousand = [];
  for(var i = 10; i <= 1000; i += 10) {
    tenToOneThousand.push(i);
  }
  return tenToOneThousand;
};

Array.prototype.search = function(num) {
  var minIndex = 0;
  var maxIndex = this.length  -1;
  //var index;
  var currentElement;
  //var count = 1;

  var result = {count : 0, index : 0}

  while(minIndex < maxIndex) {

    result.count += 1;
    result.index = (minIndex + maxIndex) / 2 | 0;
    currentElement = this[result.index];

    if (currentElement < num) {
      minIndex = result.index + 1;
    }
    else if (currentElement > num) {
      maxIndex = result.index -1;
    }
    else {
      return result;
    }
  }

  
  return result;
};


module.exports = file;
