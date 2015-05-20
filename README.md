# after-animation

Fire a callback after an animation or fire immediately if the browser doesn't support them.

## Installation

Component:

    component install nib-health-funds/after-animation

## Usage

    var after = require('after-animation');

    var el = document.querySelector('.js-ball');
    after(el, function(event) {
      console.log('animation ended!');
    });
