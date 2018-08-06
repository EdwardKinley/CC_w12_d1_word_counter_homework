const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  });
};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = "The number of words is ${result}."
};

module.exports = ResultView;
