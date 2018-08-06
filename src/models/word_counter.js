const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (evt) => {
    const inputtedText = evt.detail;
    const result = this.wordCount(inputtedText);
    PubSub.publish('WordCounter:result', result);
  });

  PubSub.subscribe('InputView:text-submitted', (evt) => {
    const submittedText = evt.detail;
    const result2 = this.wordCount(submittedText);
    PubSub.publish('WordCounter:result2', result2);
  });
};

WordCounter.prototype.wordCount = function (text) {
  return text.split(' ').filter(word => (word !== '')).length;
};

module.exports = WordCounter;
