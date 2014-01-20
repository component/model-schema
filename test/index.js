
var assert = require('assert');
var noop = function(){};

try {
  var schema = require('model-schema');
  var model = require('model');
} catch (e) {
  var schema = require('..');
  var model = require('../../model');
}

describe('model-schema', function () {

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
    var Model = model('user').use(schema(json));
    assert.equal(Model.attrs.id, json.id);
    assert.equal(Model.attrs.name, json.name);
  });

});