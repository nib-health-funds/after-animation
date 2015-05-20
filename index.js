var events = require('animation-events');

module.exports = function(el, callback) {
  if (events.has(el)) {
    events.once(el, 'end', callback);
  } else {
   callback.apply(el);
  }
};