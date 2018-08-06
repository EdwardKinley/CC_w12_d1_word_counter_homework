const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (evt) => {
    const inputtedText = evt.detail;
    const result = this.wordCount(inputtedText);
    PubSub.publish('WordCounter:result', result);
  });
};

WordCounter.prototype.wordCount = function (text) {
  return text.split(' ').length;
};

module.exports = WordCounter;
