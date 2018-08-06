const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter:result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  });

  PubSub.subscribe('WordCounter:result2', (evt) => {
    const result2 = evt.detail;
    this.updateView2(result2);
  })
};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  console.log(`The number of words is ${result}.`);
  resultElement.textContent = `The number of inputted words so far is ${result}.`
};

ResultView.prototype.updateView2 = function (result) {
  const result2Element = document.querySelector('#result2');
  console.log(`The number of submitted words is ${result}.`);
  result2Element.textContent = `The total number of submitted words is ${result}.`
  const resultElement = document.querySelector('#result');
  resultElement.textContent = ``
};

module.exports = ResultView;
