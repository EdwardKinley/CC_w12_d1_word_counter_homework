const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#text');
  const form = document.querySelector('#wordcounter-form');

  input.addEventListener('input', (evt) => {
    const inputtedText = evt.target.value;
    PubSub.publish('InputView:text-inputted', inputtedText);
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const submittedText = evt.target.text.value;
    PubSub.publish('InputView:text-submitted', submittedText);
  });
};

module.exports = InputView;
