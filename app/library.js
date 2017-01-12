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
  var currentIndex;

  //var result = {count : 0, index : 0, length: this.length}
  this.count = 0;
  this.index = -1;

  /*if (num === this[maxIndex]) {
      result.count = 0;
      result.index = maxIndex;
      return result;
    }*/

  while(minIndex <= maxIndex) {

    //result.count += 1;
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = this[currentIndex];

    if (this[minIndex] === num) {
      //minIndex = result.index + 1;
      this.index = minIndex;
      break;
    }
    else if (this[maxIndex] === num) {
      this.index = maxIndex;
      break;
    }

    if (currentElement < num) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > num) {
      maxIndex = currentIndex - 1;
    }
    else {
      this.index = currentIndex;
      break;
    }
    this.count += 1;
  }

  //result.index - 1;
  return this;
};


module.exports = file;
