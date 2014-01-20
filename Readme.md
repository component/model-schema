
# model-schema

  A plugin that creates a model's attributes from a schema.

## Installation

    $ component install segmentio/model-schema
    $ npm install model-schema

## Example

```js
var model = require('model');
var schema = require('model-schema');

var json = {
  id: {
    type: 'string',
    required: true,
    validators: [Function, Function]
  },
  name: {
    type: 'string',
    validators: [Function]
  }
};

var User = model()
  .use(schema(json));
```

## API

#### schema(json)

  Return the plugin function for a given `json` schema.