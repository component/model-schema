
var assert = require('assert');
var noop = function(){};

try {
  var schema = require('hades-schema');
  var hades = require('hades');
} catch (e) {
  var schema = require('..');
  var hades = require('../../hades');
}

describe('hades-schema', function () {

  var json = {
    id: {
      type: 'string',
      required: true,
      validators: [noop, noop]
    },
    name: {
      type: 'string',
      validators: [noop]
    }
  };

  it('should work', function () {
    var Model = hades().use(schema(json));
    assert.equal(Model.attrs.id, json.id);
    assert.equal(Model.attrs.name, json.name);
  });

});