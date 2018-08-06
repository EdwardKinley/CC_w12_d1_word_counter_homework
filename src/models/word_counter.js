const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindevents = function () {
  PubSub.subscribe('InputView:text-inputted', (evt) => {
    const inputtedText = evt.detail;
    const result = this.wordCount(inputtedText);
    PubSub.publish('WordCounter:result', result);
  });
};

WordCounter.prototype.wordCount = function () {
  return 42;
};

module.exports = WordCounter;
