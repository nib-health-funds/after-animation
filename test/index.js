var assert = require('assert');
var after = require('after-animation');

//add an animation class for testing
var
  el,
  style = document.createElement('style')
;
style.appendChild(document.createTextNode('@-webkit-keyframes animation { 0% {opacity: 1;} 100% {opacity: 1} } .animation {-webkit-animation: animation 1s 3;}'));
document.head.appendChild(style);

describe('after-animation', function() {

  beforeEach(function() {
    el = document.createElement('div');
    document.body.appendChild(el); //styles are only calculated if the element is in the doc
  });

  afterEach(function() {
    document.body.removeChild(el);
    el = null;
  });

  it('should call the callback immediately', function(done) {
    var start = Date.now();

    after(el, function() {
      assert(Date.now()-start < 500);
      done();
    });

  });

  it('should call the callback after the animation', function(done) {
    this.timeout(4000);
    var start = Date.now();

    el.classList.add('animation');
    after(el, function() {
      console.log(Date.now()-start)
      assert(Date.now()-start > 3000);
      done();
    });

  });

});